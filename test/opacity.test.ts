import { describe, expect, it } from "vitest";
import { getStyle } from "../packages/core";

describe.concurrent("opacity", () => {
  it("opacity-0", () => {
    const style = "opacity-0";
    expect(getStyle(style)).toEqual(".opacity-0{opacity:0;}");
  });
  it("opacity-50", () => {
    const style = "opacity-50";
    expect(getStyle(style)).toEqual(".opacity-50{opacity:0.5;}");
  });
  it("opacity-100", () => {
    const style = "opacity-100";
    expect(getStyle(style)).toEqual(".opacity-100{opacity:1;}");
  });
});
