import { Rule } from "../../../utils/type";
import { sizingMap, screenBreakPointMap } from "../_theme/mapping";

export const sizing: Rule[] = [
  // width
  [
    /^(max-|min-)?(?:width|w)-(\d+)(x?)$/,
    ([, limit, val, multi]) => [
      [`${!!limit ? limit : ""}width`, multi ? `${parseInt(val) / 4}rem` : `${parseInt(val)}px`],
    ],
  ],
  [
    /^(max-|min-)?(?:width|w)-(auto|screen|none|full)(?:-?)(\S+)?$/,
    ([, limit, val, screen]) => [
      [
        `${!!limit ? limit : ""}width`,
        screen ? (val === "screen" ? screenBreakPointMap[screen] : sizingMap[val]) : sizingMap[val],
      ],
    ],
  ],
  // height
  [
    /^(max-|min-)?(?:height|h)-(\d+)(x?)$/,
    ([, limit, val, multi]) => [
      [`${!!limit ? limit : ""}height`, multi ? `${parseInt(val) / 4}rem` : `${parseInt(val)}px`],
    ],
  ],
  [
    /^(max-|min-)?(?:height|h)-(auto|screen|none|full)(?:-?)(\S+)?$/,
    ([, limit, val, screen]) => [
      [
        `${!!limit ? limit : ""}height`,
        val === "screen" ? (screen ? screenBreakPointMap[screen] : sizingMap[val]) : sizingMap[val],
      ],
    ],
  ],

  // box-sizing
  [
    /^box-(border|content)$/,
    ([, val]) => [
      ["-webkit-box-sizing", `${val}-box`],
      ["box-sizing", `${val}-box`],
    ],
  ],
];
