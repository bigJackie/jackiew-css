import { Rule } from "../../../utils/type";

export const opacity: Rule[] = [
  // opacity
  [/^opacity-(\d+)$/, ([, val]) => [["opacity", `${parseInt(val) / 100}`]]],
];
