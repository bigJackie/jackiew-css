import { describe, expect, it } from "vitest";
import { getStyle } from "../packages/core";

describe("font style", () => {
  const style = "text-20 t-0";
  it("font-size", () => {
    expect(getStyle(style)).toEqual(".text-20{font-size:20px;}.t-0{font-size:0px;}");
  });
});
