import { Rule } from "../../../utils/type";
import { directionMap } from "../_theme/mapping";

export const spacing: Rule[] = [
  // marigin
  [
    /^(?:m)(t|r|b|l|x|y|a)-(\d+)(x?)$/,
    ([, direction, val, multi]) =>
      directionMap[direction].map(d => [`margin-${d}`, multi ? `${parseInt(val) / 4}rem` : `${parseInt(val)}px`]),
  ],
  // padding
  [
    /^(?:p)(t|r|b|l|x|y|a)-(\d+)(x?)$/,
    ([, direction, val, multi]) =>
      directionMap[direction].map(d => [`padding-${d}`, multi ? `${parseInt(val) / 4}rem` : `${parseInt(val)}px`]),
  ],
];
