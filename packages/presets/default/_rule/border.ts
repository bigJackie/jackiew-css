import { Rule } from "../../../utils/type";
import { RuleHandler } from "../../../utils/type";
import { directionMap } from "../_theme/mapping";

export const border: Rule[] = [
  // border-width
  [/(border|b)(?:-?)([^\s-]*)-(\d+)/g, borderWidthHandler],
  // border-radius
  [/(rounded)(?:-?)([^\s-]*)-([A-z0-9]+)/g, borderRadiusHandler],
];

function borderWidthHandler([, , mod, val]: string[]): RuleHandler {
  if (mod in directionMap) {
    return directionMap[mod].map(direction => [`border-${direction}-width`, `${val}px`]);
  } else return [["border-width", `${val}px`]];
}

function borderRadiusHandler(): RuleHandler {
  return;
}
