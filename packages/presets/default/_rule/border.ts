import { Rule } from "../../../utils/type";
import { colors } from "../_theme/colors";
export const border: Rule[] = [
  // border-radius
  [
    /^rounded-(\d+)(%|x)?$/,
    ([, val, multi]) => [
      [
        "border-radius",
        multi ? (multi === "x" ? `${parseInt(val) / 4}rem` : `${parseInt(val)}%`) : `${parseInt(val)}px`,
      ],
    ],
  ],
  // border-width
  [/^border-(\d+)$/, ([, val]) => [["border-width", `${parseInt(val)}px`]]],
  // border-color
  [/^border-(current|transparent|black|white)$/, ([, color]) => [["border-color", colors[color]]]],
  [
    /^border-(rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark)(?:-?)(\d+)?$/,
    ([, color, val]) => [["border-color", colors[color] ? (val ? colors[color][val] : colors[color]["500"]) : color]],
  ],
  [/^border-opacity-(\d+)$/, ([, val]) => [["border-opacity", `${parseInt(val) / 100}`]]],
  [/^border-(solid|dashed|dotted|double|none)$/, ([, val]) => [["border-style", val]]],
];
