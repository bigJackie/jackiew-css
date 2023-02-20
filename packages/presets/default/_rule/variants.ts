import { Variant } from "../../../utils/type";

export const variants: Variant[] = [
  {
    match: s => (s.startsWith("!") ? s.slice(1) : null),
    selector: s => `\\${s}`,
    rewrite: s => `${s} !important`,
  },
  { match: s => (s.startsWith("hover:") ? s.slice(6) : null), selector: s => `${s.replace(/\:/, "\\:")}:hover` },
];
