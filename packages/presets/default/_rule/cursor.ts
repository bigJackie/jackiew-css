import { Rule } from "../../../utils/type";

export const cursor: Rule[] = [
  // cursor
  [/^cursor-(auto|default|pointer|wait|text|move|help|not-allowed)$/, ([, val]) => [["cursor", val]]],
  // pointer events
  [/^pointer-events-(none|auto|)$/, ([, val]) => [["pointer-events", val]]],
  // user-select
  [
    /^select-(none|text|all|auto)$/,
    ([, val]) => [
      ["-webkit-user-select", val],
      ["-moz-user-select", val],
      ["-ms-user-select", val],
      ["user-select", val],
    ],
  ],
];
