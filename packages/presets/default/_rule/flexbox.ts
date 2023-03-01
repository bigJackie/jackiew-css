import { Rule } from "../../../utils/type";
import { flexDirectionMap, flexStretchMap } from "../_theme/mapping";
export const flexbox: Rule[] = [
  // flex
  [
    /^flex$/,
    () => [
      ["display", "-webkit-box"],
      ["display", "-ms-flexbox"],
      ["display", "-webkit-flex"],
      ["display", "flex"],
    ],
  ],
  // flex-basis
  [
    /^basis-(\d+)(%|x?)$/,
    ([, val, multi]) => [
      ["flex-basis", multi ? (multi == "%" ? `${parseInt(val)}%` : `${parseInt(val) / 4}rem`) : `${parseInt(val)}px`],
    ],
  ],
  // inline-flex
  [
    /^inline-flex$/,
    () => [
      ["display", "-webkit-inline-box"],
      ["display", "-ms-inline-flexbox"],
      ["display", "-webkit-inline-flex"],
      ["display", "inline-flex"],
    ],
  ],
  //flex-direction
  [
    /^flex-(row|row-reverse|col|col-reverse)$/,
    ([, val]) => [
      ["-webkit-box-orient", val === "row" || val === "row-reverse" ? "horizontal" : "vertical"],
      ["-webkit-box-direction", val === "row" || val === "col" ? "normal" : "reverse"],
      ["-ms-flex-direction", flexDirectionMap[val]],
      ["-webkit-flex-direction", flexDirectionMap[val]],
      ["flex-direction", flexDirectionMap[val]],
    ],
  ],

  // flex-wrap
  [
    /^flex-(wrap|nowrap|wrap-reverse)$/,
    ([, val]) => [
      ["-ms-flex-wrap", val],
      ["-webkit-flex-wrap", val],
      ["flex-wrap", val],
    ],
  ],

  // flex-stretch
  [
    /^flex-(1|auto|initial|none)$/,
    ([, val]) => [
      ["-webkit-box-flex", val === "1" || val === "auto" ? 1 : 0],
      ["-ms-flex", flexStretchMap[val]],
      ["-webkit-flex", flexStretchMap[val]],
      ["flex", flexStretchMap[val]],
    ],
  ],

  // flex-grow
  [
    /^flex-(grow|grow-0)$/,
    ([, val]) => [
      ["-webkit-box-flex", val === "grow" ? 1 : 0],
      ["-ms-flex-positive", val === "grow" ? 1 : 0],
      ["-webkit-flex-grow", val === "grow" ? 1 : 0],
      ["flex-grow", val === "grow" ? 1 : 0],
    ],
  ],
  // flex-shrink
  [
    /^flex-(shrink|shrink-0)$/,
    ([, val]) => [
      ["-ms-flex-negative", val === "shrink" ? 1 : 0],
      ["-webkit-flex-shrink", val === "shrink" ? 1 : 0],
      ["flex-shrink", val === "shrink" ? 1 : 0],
    ],
  ],
];
