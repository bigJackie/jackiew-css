import { describe, expect, it } from "vitest";
import { getStyle } from "../packages/core";

describe.concurrent("font style", () => {
  it("font-size", () => {
    const style = "text-0 t-20";
    expect(getStyle(style)).toEqual(".text-0{font-size:0px;}.t-20{font-size:20px;}");
  });

  it("letter-spacing", () => {
    const style = "text-spacing-0 t-spacing-20 letter-spacing-200";
    expect(getStyle(style)).toEqual(
      ".text-spacing-0{letter-spacing:0px;}.t-spacing-20{letter-spacing:20px;}.letter-spacing-200{letter-spacing:200px;}"
    );
  });

  it("line-height", () => {
    const style = "text-height-0 t-height-20 line-h-200 t-h-3x";
    expect(getStyle(style)).toEqual(
      ".text-height-0{line-height:0px;}.t-height-20{line-height:20px;}.line-h-200{line-height:200px;}.t-h-3x{line-height:3;}"
    );
  });

  it("text-align", () => {
    const style = "text-left text-right t-center t-justify";
    expect(getStyle(style)).toEqual(
      ".text-left{text-align:left;}.text-right{text-align:right;}.t-center{text-align:center;}.t-justify{text-align:justify;}"
    );
  });

  it("text-color", () => {
    const style = "text-red text-current text-rose-200";
    expect(getStyle(style)).toEqual(
      ".text-red{color:#ef4444;}.text-rose-200{color:#fecdd3;}.text-current{color:currentColor;}"
    );
  });

  it("background-color", () => {
    const style = "rose-200";
    expect(getStyle(style)).toEqual(".rose-200{background-color:#fecdd3;}");
  });
});
