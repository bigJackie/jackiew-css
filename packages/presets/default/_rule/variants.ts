import { Variant } from "../../../utils/type";

export const variants: Variant[] = [
  {
    match: s => (s.startsWith("!") ? s.slice(1) : null),
    selector: s => `\\${s}`,
    rewrite: s => `${s} !important`,
  },
  { match: s => (s.startsWith("hover:") ? s.slice(6) : null), selector: s => `${s.replace(/\:/, "\\:")}:hover` },
  { match: s => (s.startsWith("focus:") ? s.slice(6) : null), selector: s => `${s.replace(/\:/, "\\:")}:focus` },
  { match: s => (s.startsWith("active:") ? s.slice(6) : null), selector: s => `${s.replace(/\:/, "\\:")}:active` },
  { match: s => (s.startsWith("target:") ? s.slice(6) : null), selector: s => `${s.replace(/\:/, "\\:")}:target` },
  { match: s => (s.startsWith("dark:") ? s.slice(5) : null), selector: s => `dark .${s.replace(/\:/, "\\:")}` },
];
