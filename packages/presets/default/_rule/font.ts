import { Rule } from "../../../utils/type";

export const font: Rule[] = [
  // font-size
  [/^(?:text|t)-(\d+)$/, ([, val]) => [["font-size", `${parseInt(val)}px`]]],
  // font-style
  // font-weight
  // leeter-spacing
  [/^(?:text|t|letter)-(?:spacing)-(\d+)$/, ([, val]) => [["letter-spacing", `${parseInt(val)}px`]]],
  // line-height
  [
    /^(?:text|t|line)-(?:height|h)-(\d+)(x?)$/,
    ([, val, mul]) => [["line-height", `${mul ? parseInt(val) : parseInt(val) + "px"}`]],
  ],
  // text-align
  [/^(?:text|t)-(left|right|center|justify)$/, ([, val]) => [["text-align", val]]],
  // text-color
  // [/(?:text|t)/g,()=>[[]]]
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
