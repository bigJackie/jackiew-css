import type { PluginOption } from "vite";
import { generateStyle } from "./core";

export default function loadClass() {
  const vueRE = /\.vue$/;
  const cssRE = /\.css$/;
  const classRE = /(?<=class=")(.*)(?=")/g;
  const styleRE = /<(style)[\s\S]*?>[\s\S]+?<\/\1>/g;
  let viteServer = null,
    cssModules = null;

  return <PluginOption>{
    name: "class-loader",

    enforce: "pre",

    handleHotUpdate(ctx) {
      let updateModules;
      const { file, server, modules } = ctx;
      if (!viteServer) viteServer = server;

      if (vueRE.test(file)) {
        cssModules = modules.filter(module => cssRE.test(module.url));
        updateModules = modules.filter(module => vueRE.test(module.url));
      } else {
        cssModules = null;
      }
      return [...updateModules];
    },

    transform(code, id, opt) {
      // 匹配vue文件 非vue文件return
      if (!vueRE.test(id)) return code;
      let cssFileNum = 0,
        style = "";
      // 匹配class
      if (classRE.test(code)) {
        cssFileNum++;
        let class_inline = code.match(classRE);
        for (let line of class_inline) {
          style += generateStyle(line);
        }
      }
      if (styleRE.test(code)) cssFileNum += code.match(styleRE).length;

      if (cssModules) {
        cssModules.forEach(module => {
          if (cssFileNum > 0) {
            viteServer.ws.send({
              type: "update",
              updates: [
                {
                  type: "js-update",
                  path: module.url,
                  acceptedPath: module.url,
                  timestamp: new Date().getTime(),
                },
              ],
            });
          }
          cssFileNum--;
        });
      }
      return `<style>${style}</style>${code}`;
    },
  };
}
