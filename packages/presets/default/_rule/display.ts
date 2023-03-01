import { Rule } from "../../../utils/type";
import { directionMap } from "../_theme/mapping";

export const display: Rule[] = [
  // display
  [
    /^(block|inline-block|inline|flow-root|contents|hidden|list-item)$/,
    ([, val]) => [["display", val === "hidden" ? "none" : val]],
  ],
  // visibility
  [/^(visible|invisible)$/, ([, val]) => [["visibility", val === "invisible" ? "hidden" : val]]],
];
