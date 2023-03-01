import type { ModuleNode, PluginOption, ViteDevServer } from "vite";
import { customize, generateStyle, groupHandler, getStyle } from "./core";
import { StylePreset } from "./utils/type";

export function AtomCss(presets: StylePreset = null) {
  if (presets) customize(presets);

  const vueRE: RegExp = /\.vue$/,
    cssRE: RegExp = /\.css$/,
    classRE: RegExp = /(?<=class=")(.*?)(?=")/g,
    styleRE: RegExp = /<(style)[\s\S]*?>[\s\S]+?<\/\1>/g;
  let viteServer: ViteDevServer = null,
    cssModules: ModuleNode[] = null;

  return <PluginOption>{
    name: "class-loader",
    enforce: "pre",

    handleHotUpdate(ctx) {
      let updateModules: ModuleNode[];
      const { file, server, modules } = ctx;
      if (!viteServer) viteServer = server;

      if (vueRE.test(file)) {
        cssModules = modules.filter(module => cssRE.test(module.url));
        updateModules = modules.filter(module => vueRE.test(module.url));
        return [...updateModules];
      } else {
        cssModules = null;
        return [...modules];
      }
    },

    transform(code, id, opt) {
      // Match .vue files
      if (!vueRE.test(id)) return code;

      let cssFileNum: number = 0,
        style: string = "";

      // Match inline class
      if (classRE.test(code)) {
        cssFileNum++;
        let class_inline = code.match(classRE);
        for (let line of class_inline) {
          const newLine = groupHandler(line);
          code = code.replace(line, newLine);
          style += generateStyle(newLine);
        }
      }
      if (styleRE.test(code)) cssFileNum += code.match(styleRE).length;

      if (!cssModules) return `<style>${style}</style>${code}`;

      // check if changed .vue file's inline class, update virtual css file
      for (let index = 0; index < cssModules.length; index++) {
        if (cssFileNum <= 0) continue;

        const module = cssModules[index];
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
        cssFileNum--;
      }

      return `<style>${style}</style>${code}`;
    },
  };
}

export * from "./utils/type";
export { getStyle };
