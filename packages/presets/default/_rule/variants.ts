import { Variant } from "../../../utils/type";
import { screenBreakPointMap } from "../_theme/mapping";
export const variants: Variant[] = [
  {
    match: s => (s.startsWith("!") ? s.slice(1) : null),
    selector: s => `\\${s}`,
    rewrite: s => `${s} !important`,
  },
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
  { match: s => (s.startsWith("hover:") ? s.slice(6) : null), selector: s => `${s.replace(/(\\*)\:/g, "\\:")}:hover` },
  { match: s => (s.startsWith("focus:") ? s.slice(6) : null), selector: s => `${s.replace(/(\\*)\:/g, "\\:")}:focus` },
  {
    match: s => (s.startsWith("active:") ? s.slice(6) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}:active`,
  },
  {
    match: s => (s.startsWith("target:") ? s.slice(6) : null),
    selector: s => `${s.replace(/(\\*)\:/g, "\\:")}:target`,
  },
  { match: s => (s.startsWith("dark:") ? s.slice(5) : null), selector: s => `dark .${s.replace(/(\\*)\:/g, "\\:")}` },
];
