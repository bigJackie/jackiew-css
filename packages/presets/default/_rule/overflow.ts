import { Rule } from "../../../utils/type";

export const overflow: Rule[] = [
  // opacity
  [
    /^overflow(?:-?)(x|y)?-(auto|hidden|visible|scroll)$/,
    ([, direction, val]) => [[direction ? `overflow-${direction}` : "overflow", val]],
  ],
  // scroll behavior
  [/^scroll-(auto|smooth)$/, ([, val]) => [["scroll-behavior", val]]],
];
