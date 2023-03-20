import { rules, variants } from "../presets/default/_rule";
import { RuleHandler, Selector, ReWrite, Wrapper, StylePreset, Rule, Variant } from "../utils/type";
const classMap: Map<string, string> = new Map();

/* customize preset */
export function customize(presets: StylePreset) {
  presets.rules ? rules.push.apply(rules, presets.rules) : null;
  presets.variants ? variants.push.apply(variants, presets.variants) : null;
}

export function generateStyle(classLine: string) {
  const classItems: string[] = classLine.split(" ");
  let style: string = "";

  for (let classItem of classItems) {
    const className = classItem;
    let ruleName: string = className,
      ruleSelectors: Selector[] = [],
      ruleRewrites: ReWrite[] = [],
      ruleWrapper: Wrapper = null;
    for (let ruleIndex = rules.length - 1; ruleIndex >= 0; ruleIndex--) {
      const rule: Rule = rules[ruleIndex];

      for (let variantIndex = 0; variantIndex < variants.length; variantIndex++) {
        const variant: Variant = variants[variantIndex];
        if (!variant.match(ruleName)) continue;

        ruleName = variant.match(ruleName);
        if (variant.selector) ruleSelectors.push(variant.selector);
        if (variant.rewrite) ruleRewrites.push(variant.rewrite);
        if (variant.wrapper) ruleWrapper = variant.wrapper;
      }

      if (!(<RegExp>rule[0]).test(ruleName)) continue;

      if (hasClass(className)) {
        // style += classMap.get(className);
      } else {
        const attrs = typeof rule[1] === "function" ? rule[1]((<RegExp>rule[0]).exec(ruleName)) : rule[1];
        const merge = mergeStyle(className, attrs, ruleSelectors, ruleRewrites, ruleWrapper);
        style += merge;
        classMap.set(className, merge);
      }
      break;
    }
  }
  return style;
}

export function getStyle(classLine: string) {
  // check group
  classLine = groupHandler(classLine);

  const classItems: string[] = classLine.split(" ");
  let style: string = "";
  for (let classItem of classItems) {
    const className = classItem;
    let ruleName: string = className,
      ruleSelectors: Selector[] = [],
      ruleRewrites: ReWrite[] = [],
      ruleWrapper: Wrapper = null;

    for (let ruleIndex = rules.length - 1; ruleIndex >= 0; ruleIndex--) {
      const rule: Rule = rules[ruleIndex];

      for (let variantIndex = 0; variantIndex < variants.length; variantIndex++) {
        const variant: Variant = variants[variantIndex];
        if (!variant.match(ruleName)) continue;

        ruleName = variant.match(ruleName);
        if (variant.selector) ruleSelectors.push(variant.selector);
        if (variant.rewrite) ruleRewrites.push(variant.rewrite);
        if (variant.wrapper) ruleWrapper = variant.wrapper;
      }
      if (!(<RegExp>rule[0]).test(ruleName)) continue;

      const attrs = typeof rule[1] === "function" ? rule[1]((<RegExp>rule[0]).exec(ruleName)) : rule[1];
      const merge = mergeStyle(className, attrs, ruleSelectors, ruleRewrites, ruleWrapper);
      style += merge;
      break;
    }
  }
  return style;
}

function mergeStyle(
  className: string,
  attrs: RuleHandler,
  selectors: Selector[],
  rewrites: ReWrite[],
  wrapper: Wrapper
) {
  let line: string = "";
  selectors.forEach(selector => (className = selector(className)));

  attrs.forEach(attr => {
    line += `${attr.join(":")}`;
    rewrites.forEach(rewrite => (line = rewrite(line)));
    line += ";";
  });
  return !!wrapper ? wrapper(`.${className}\{${line}\}`) : `.${className}\{${line}\}`;
}

function hasClass(className: string) {
  return classMap.has(className) ? true : false;
}

export function groupHandler(line: string) {
  const groupRE: RegExp = /([\S]*?:)(?:\()([\s\S]*?)(?:\))/g;

  // no group in class, return
  if (!groupRE.test(line)) return line;

  const groups: RegExpMatchArray = line.match(groupRE);
  groups.forEach(group => {
    let [selector, classNames] = group.split(":"),
      newLine: Array<string> = [];

    // remove parentheses
    classNames = classNames.substring(1, classNames.length - 1);
    classNames.split(" ").forEach(className => {
      newLine.push(`${selector}:${className}`);
    });
    line = line.replace(group, newLine.join(" "));
  });
  return line;
}
