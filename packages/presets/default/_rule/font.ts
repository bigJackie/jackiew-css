import { Rule } from "../../../utils/type";
import { colors } from "../_theme/colors";
export const font: Rule[] = [
  // font-size
  [
    /^(?:text|t)-(\d+)(x?)$/,
    ([, val, multi]) => [["font-size", multi ? `${parseInt(val) / 4}rem` : `${parseInt(val)}px`]],
  ],
  // font-style
  // font-weight
  // leeter-spacing
  [/^(?:text|t|letter)-(?:spacing)-(\d+)$/, ([, val]) => [["letter-spacing", `${parseInt(val)}px`]]],
  // line-height
  [
    /^(?:text|t|line)-(?:height|h)-(\d+)(x?)$/,
    ([, val, multi]) => [["line-height", `${multi ? parseInt(val) : parseInt(val) + "px"}`]],
  ],
  // text-align
  [/^(?:text|t)-(left|right|start|end|center|justify)$/, ([, val]) => [["text-align", val]]],
  // text-color
  [/^(?:text|t)-(inherit|current|transparent|black|white)$/, ([, color]) => [["color", colors[color]]]],
  [
    /^(?:text|t)-(rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark)(?:-?)(\d+)?$/,
    ([, color, val]) => [["color", colors[color] ? (val ? colors[color][val] : colors[color]["500"]) : color]],
  ],
  /* background-color */
  [
    /^(rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark)(?:-?)(\d+)?$/,
    ([, color, val]) => [
      ["background-color", colors[color] ? (val ? colors[color][val] : colors[color]["500"]) : color],
    ],
  ],
  // text-decoration
  // [/(?:text|t)/g,()=>[[]]]
  // text-decoration-color
  // [/(?:text|t)/g,()=>[[]]]
  // text-decoration-style
  // [/(?:text|t)/g,()=>[[]]]
  // text-decoration-thickness
  // [/(?:text|t)/g,()=>[[]]]
  // text-underline-offset
  // [/(?:text|t)/g,()=>[[]]]
  // text-indent
  // [/(?:text|t)/g,()=>[[]]]
  // text-transform
  // [/(?:text|t)/g,()=>[[]]]
  // text-orientation
  // -webkit-text-stroke-width
  // -webkit-text-stroke-color
  // white-space
  // writing-mode
];
