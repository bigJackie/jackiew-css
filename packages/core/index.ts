import { rules, variants } from "../presets/default/_rule";
import { RuleHandler, Selector, ReWrite } from "../utils/type";

const classMap = new Map();

export function generateStyle(classLine: string) {
  let style = "";
  rules.forEach(rule => {
    if (typeof rule[1] == "function") {
      let res = classLine.split(" ");
      for (let i of res) {
        const className = i;
        let ruleName = className,
          ruleSelectors: Selector[] = [],
          ruleRewrites: ReWrite[] = [];
        for (let j = 0; j < variants.length; j++) {
          const variant = variants[j];
          if (variant.match(ruleName)) {
            ruleName = variant.match(ruleName);
            if (variant.selector) ruleSelectors.push(variant.selector);
            if (variant.rewrite) ruleRewrites.push(variant.rewrite);
          }
        }
        if (!(<RegExp>rule[0]).test(ruleName)) continue;
        if (hasClass(className)) {
          style += classMap.get(className);
        } else {
          const merge = mergeStyle(className, rule[1]((<RegExp>rule[0]).exec(ruleName)), ruleSelectors, ruleRewrites);
          style += merge;
          classMap.set(className, merge);
        }
      }
    }
  });
  return style;
}

export function getStyle(classLine: string) {
  let style = "";
  rules.forEach(rule => {
    if (typeof rule[1] == "function") {
      let res = classLine.split(" ");
      for (let i of res) {
        const className = i;
        let ruleName = className,
          ruleSelectors: Selector[] = [],
          ruleRewrites: ReWrite[] = [];
        for (let j = 0; j < variants.length; j++) {
          const variant = variants[j];
          if (variant.match(ruleName)) {
            ruleName = variant.match(ruleName);
            if (variant.selector) ruleSelectors.push(variant.selector);
            if (variant.rewrite) ruleRewrites.push(variant.rewrite);
          }
        }
        if (!(<RegExp>rule[0]).test(ruleName)) continue;
        style += mergeStyle(className, rule[1]((<RegExp>rule[0]).exec(ruleName)), ruleSelectors, ruleRewrites);
      }
    }
  });
  return style;
}

function mergeStyle(className: string, attrs: RuleHandler, selectors: Selector[], rewrites: ReWrite[]) {
  let line = "";
  selectors.forEach(selector => (className = selector(className)));
  attrs.forEach(attr => {
    line = `${attr.join(":")}`;
    rewrites.forEach(rewrite => (line = rewrite(line)));
    line += ";";
  });
  return `.${className}\{${line}\}`;
}

// console.log(getStyle("!hover:t-30"));

function hasClass(className: string) {
  return classMap.has(className) ? true : false;
}
