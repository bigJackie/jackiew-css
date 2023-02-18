import { Rule } from "../../../utils/type";
import { RuleHandler } from "../../../utils/type";

export const font: Rule[] = [
  // font-size
  [/\b(?:text|t)-(\d+)/g, ([, val]) => [["font-size", `${val}px`]]],
  // font-style
  // [/(text|t)-(\d+)/g, fontSizeHandler],
  // font-weight
  // leeter-spacing
  [/\b(?:text|t|letter)-(?:spacing)-(\d+)/g, ([, val]) => [["letter-spacing", `${val}px`]]],
  // line-height
  [/\b(?:text|t|line)-(?:height|h)-(\d+)(x?)/g, ([, val, mul]) => [["line-height", `${mul ? val : val + "px"}`]]],
  // text-align
  [/\b(?:text|t)-(left|right|center|justify)/g, ([, val]) => [["text-align", val]]],
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
