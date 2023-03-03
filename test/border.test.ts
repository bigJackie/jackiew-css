import { describe, expect, it } from "vitest";
import { getStyle } from "../packages/core";

describe.concurrent("border", () => {
  /* border-radius */
  it("rounded-0", () => {
    const style = "rounded-0";
    expect(getStyle(style)).toEqual(".rounded-0{border-radius:0px;}");
  });
  it("rounded-50", () => {
    const style = "rounded-50%";
    expect(getStyle(style)).toEqual(".rounded-50%{border-radius:50%;}");
  });
  it("rounded-3x", () => {
    const style = "rounded-3x";
    expect(getStyle(style)).toEqual(".rounded-3x{border-radius:0.75rem;}");
  });
  /* border-width */
  it("border-0", () => {
    const style = "border-0";
    expect(getStyle(style)).toEqual(".border-0{border-width:0px;}");
  });

  /* border-color */
  it("border-color", () => {
    const style = "border-red border-current border-rose-200";
    expect(getStyle(style)).toEqual(
      ".border-red{border-color:#ef4444;}.border-current{border-color:currentColor;}.border-rose-200{border-color:#fecdd3;}"
    );
  });
  /* border-opacity */
  it("border-opacity-0", () => {
    const style = "border-opacity-0";
    expect(getStyle(style)).toEqual(".border-opacity-0{border-opacity:0;}");
  });
  it("border-opacity-50", () => {
    const style = "border-opacity-50";
    expect(getStyle(style)).toEqual(".border-opacity-50{border-opacity:0.5;}");
  });
  it("border-opacity-100", () => {
    const style = "border-opacity-100";
    expect(getStyle(style)).toEqual(".border-opacity-100{border-opacity:1;}");
  });
  /* border-style */
  it("border-none", () => {
    const style = "border-none";
    expect(getStyle(style)).toEqual(".border-none{border-style:none;}");
  });
  it("border-solid", () => {
    const style = "border-solid";
    expect(getStyle(style)).toEqual(".border-solid{border-style:solid;}");
  });
});
