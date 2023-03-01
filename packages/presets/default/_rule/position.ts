import { Rule } from "../../../utils/type";
import { posContentMap } from "../_theme/mapping";
export const position: Rule[] = [
  // justify-content
  [
    /^justify-(start|end|center|between|around|evenly)$/,
    ([, val]) =>
      val !== "around"
        ? [
            ["-webkit-box-pack", posContentMap[val][0]],
            ["-ms-flex-pack", posContentMap[val][0]],
            ["-webkit-justify-content", posContentMap[val][1]],
            ["justify-content", posContentMap[val][1]],
          ]
        : [
            ["-ms-flex-pack", posContentMap[val][0]],
            ["-webkit-justify-content", posContentMap[val][1]],
            ["justify-content", posContentMap[val][1]],
          ],
  ],
  // justify-items
  [/^justify-items-(auto|start|end|center|stretch)$/, ([, val]) => [["justify-items", val]]],
  // justify-self
  [
    /^justify-self-(auto|start|end|center|stretch)$/,
    ([, val]) => [
      ["-ms-grid-column-align", val],
      ["justify-self", val],
    ],
  ],
  // align-content
  [
    /^content-(start|end|center|between|around|evenly)$/,
    ([, val]) => [
      ["-ms-flex-line-pack", posContentMap[val][0]],
      ["-webkit-align-content", posContentMap[val][1]],
      ["align-content", posContentMap[val][1]],
    ],
  ],
  // align-items
  [
    /^items-(baseline|start|end|center|stretch)$/,
    ([, val]) => [
      ["-webkit-box-align", val],
      ["-ms-flex-align", val],
      ["-webkit-align-items", val === "start" || val === "end" ? `flex-${val}` : val],
      ["align-items", val === "start" || val === "end" ? `flex-${val}` : val],
    ],
  ],
  // align-self
  [
    /^self-(auto|center|stretch)$/,
    ([, val]) => [
      ["-ms-flex-item-align", val],
      ["-ms-grid-row-align", val],
      ["-webkit-align-self", val === "start" ? `flex-${val}` : val],
      ["align-self", val === "start" ? `flex-${val}` : val],
    ],
  ],
  [
    /^self-(start|end)$/,
    ([, val]) => [
      ["-ms-flex-item-align", val],
      ["-webkit-align-self", `flex-${val}`],
      ["align-self", `flex-${val}`],
    ],
  ],
  // place-content
  [
    /^place-content-(center|start|end|between|around|evenly|stretch)$/,
    ([, val]) => [["place-content", ["between", "around", "evenly"].some(v => v === val) ? `space-${val}` : val]],
  ],
  // place-items
  [/^place-items-(auto|start|end|center|stretch)$/, ([, val]) => [["place-items", val]]],
  // place-self
  [
    /^place-self-(auto|start|end|center|stretch)$/,
    ([, val]) => [
      ["-ms-grid-row-align", val],
      ["-ms-grid-column-align", val],
      ["place-self", val],
    ],
  ],

  // position
  [
    /^(static|fixed|absolute|relative|sticky)$/,
    ([, val]) =>
      val === "sticky"
        ? [
            ["position", `-webkit-${val}`],
            ["position", val],
          ]
        : [["position", val]],
  ],

  // top right bottom left
  [
    /^(top|right|bottom|left)-(auto|\d+)(x?)$/,
    ([, direction, val, multi]) => [
      [direction, val !== "auto" ? (multi ? `${parseInt(val) / 4}rem` : `${parseInt(val)}px`) : "auto"],
    ],
  ],
  // floats
  [/^float-(right|left|none)$/, ([, val]) => [["float", val]]],
  // clear
  [/^clear-(right|left|both|none)$/, ([, val]) => [["clear", val]]],
  // z-index
  [
    /^(-?)z-(auto|\d+)$/,
    ([, minus, val]) => [["z-index", val !== "auto" ? (minus ? `-${parseInt(val)}` : `${parseInt(val)}`) : "auto"]],
  ],
];
