import { Variant } from "../../../utils/type";
import { screenBreakPointMap } from "../_theme/mapping";
export const variants: Variant[] = [
  // important
  {
    match: s => (s.startsWith("!") ? s.slice(1) : null),
    selector: s => `\\${s}`,
    rewrite: s => `${s} !important`,
  },
  // screen breakpoints
  {
    match: s => (s.startsWith("xs:") ? s.slice(3) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}`,
    wrapper: s => `@media(max-width:480px){${s}}`,
  },
  {
    match: s => (s.startsWith("sm:") ? s.slice(3) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}`,
    wrapper: s => `@media(max-width:640px){${s}}`,
  },
  {
    match: s => (s.startsWith("md:") ? s.slice(3) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}`,
    wrapper: s => `@media(max-width:768px){${s}}`,
  },
  {
    match: s => (s.startsWith("lg:") ? s.slice(3) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}`,
    wrapper: s => `@media(max-width:1024px){${s}}`,
  },
  {
    match: s => (s.startsWith("xl:") ? s.slice(3) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}`,
    wrapper: s => `@media(max-width:1280px){${s}}`,
  },
  {
    match: s => (s.startsWith("2xl:") ? s.slice(4) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}`,
    wrapper: s => `@media(max-width:1536px){${s}}`,
  },
  {
    match: s => (s.startsWith("3xl:") ? s.slice(4) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}`,
    wrapper: s => `@media(max-width:1920px){${s}}`,
  },
  // pseudo classs
  { match: s => (s.startsWith("first:") ? s.slice(6) : null), selector: s => `${s.replace(/(\\*)\:/g, "\\:")}:first` },
  { match: s => (s.startsWith("last:") ? s.slice(5) : null), selector: s => `${s.replace(/(\\*)\:/g, "\\:")}:last` },
  { match: s => (s.startsWith("odd:") ? s.slice(4) : null), selector: s => `${s.replace(/(\\*)\:/g, "\\:")}:odd` },
  { match: s => (s.startsWith("even:") ? s.slice(5) : null), selector: s => `${s.replace(/(\\*)\:/g, "\\:")}:even` },
  {
    match: s => (s.startsWith("visited:") ? s.slice(8) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}:visited`,
  },
  {
    match: s => (s.startsWith("checked:") ? s.slice(8) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}:checked`,
  },
  {
    match: s => (s.startsWith("focus-within:") ? s.slice(13) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}:focus-within`,
  },
  { match: s => (s.startsWith("hover:") ? s.slice(6) : null), selector: s => `${s.replace(/(\\*)\:/g, "\\:")}:hover` },
  { match: s => (s.startsWith("focus:") ? s.slice(6) : null), selector: s => `${s.replace(/(\\*)\:/g, "\\:")}:focus` },
  {
    match: s => (s.startsWith("focus-visible:") ? s.slice(14) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}:focus-visible`,
  },
  {
    match: s => (s.startsWith("active:") ? s.slice(7) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}:active`,
  },
  { match: s => (s.startsWith("link:") ? s.slice(5) : null), selector: s => `${s.replace(/(\\*)\:/g, "\\:")}:link` },
  {
    match: s => (s.startsWith("target:") ? s.slice(7) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}:target`,
  },

  // pseudo element
  {
    match: s => (s.startsWith("bofore:") ? s.slice(7) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}::before`,
  },
  {
    match: s => (s.startsWith("after:") ? s.slice(6) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}::after`,
  },
  {
    match: s => (s.startsWith("first-letter:") ? s.slice(13) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}::first-letter`,
  },
  {
    match: s => (s.startsWith("first-line:") ? s.slice(11) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}::first-line`,
  },
  {
    match: s => (s.startsWith("marker:") ? s.slice(7) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}::marker`,
  },
  {
    match: s => (s.startsWith("selection:") ? s.slice(10) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}::selection`,
  },
  { match: s => (s.startsWith("dark:") ? s.slice(5) : null), selector: s => `dark .${s.replace(/(\\*)\:/g, "\\:")}` },
];
