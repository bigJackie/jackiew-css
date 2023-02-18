import { rules } from "../presets/default/_rule";
import { RuleHandler } from "../utils/type";

const classMap = new Map();

export function generateStyle(classLine: string) {
  let style = "";
  rules.forEach(rule => {
    if (typeof rule[1] == "function") {
      let res = (<RegExp>rule[0]).exec(classLine);
      while (res) {
        const [className, , ,] = res;
        if (hasClass(className)) {
          style += classMap.get(className);
        } else {
          const merge = mergeStyle(className, rule[1](res));
          style += merge;
          classMap.set(className, merge);
        }
        res = (<RegExp>rule[0]).exec(classLine);
      }
    }
  });
  return style;
}

export function getStyle(classLine: string) {
  let style = "";
  rules.forEach(rule => {
    if (typeof rule[1] == "function") {
      let res = (<RegExp>rule[0]).exec(classLine);
      while (res) {
        const [className, , ,] = res;
        style += mergeStyle(className, rule[1](res));
        res = (<RegExp>rule[0]).exec(classLine);
      }
    }
  });
  return style;
}

function mergeStyle(className: string, attrs: RuleHandler) {
  let line = "";
  attrs.forEach(attr => (line += `${attr.join(":")};`));
  return `.${className}\{${line}\}`;
}

function hasClass(className: string) {
  return classMap.has(className) ? true : false;
}
