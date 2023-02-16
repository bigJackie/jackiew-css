import type { PluginOption } from "vite";
import preset from "./preset";
const rules = preset.rules;

export default function loadClass() {
  const vueRE = /\.vue$/;
  const classRE = /(?<=class=")(.*)(?=")/g;

  return <PluginOption>{
    name: "class-loader",

    enforce: "pre",

    transform(code, id, opt) {
      // 匹配vue文件 非vue文件return
      if (!vueRE.test(id)) return code;
      let style = "";

      // 匹配class
      let class_inline = code.match(classRE);
      for (let i in class_inline) {
        rules.forEach(rule => {
          const class_name_reg = rule[0] as RegExp;
          const class_style_reg = rule[1] as RegExp;
          const f = rule[2] as Function;
          const class_name = class_inline[i].match(class_name_reg);
          const class_style = class_inline[i].match(class_style_reg);

          if (!!class_name) {
            style += `.${class_name[0]}\{${f(class_style).key}:${f(class_style).val};\}`;
          }
        });
      }

      return `<style>${style}</style>${code}`;
    },
  };
}
