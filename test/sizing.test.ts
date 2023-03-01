import { describe, expect, it } from "vitest";
import { getStyle } from "../packages/core";

describe.concurrent("position", () => {
  /* width */
  it("width-full", () => {
    const style = "width-full";
    expect(getStyle(style)).toEqual(".width-full{width:100%;}");
  });
  it("width-auto", () => {
    const style = "width-auto";
    expect(getStyle(style)).toEqual(".width-auto{width:auto;}");
  });
  it("width-200", () => {
    const style = "w-200";
    expect(getStyle(style)).toEqual(".w-200{width:200px;}");
  });
  it("min-width-20x", () => {
    const style = "min-w-20x";
    expect(getStyle(style)).toEqual(".min-w-20x{min-width:5rem;}");
  });
  it("max-width-0", () => {
    const style = "max-width-0";
    expect(getStyle(style)).toEqual(".max-width-0{max-width:0px;}");
  });

  /* height */
  it("height-screen-xl", () => {
    const style = "height-screen-xl";
    expect(getStyle(style)).toEqual(".height-screen-xl{height:1280px;}");
  });
  it("max-height-screen-sm", () => {
    const style = "max-h-screen-sm";
    expect(getStyle(style)).toEqual(".max-h-screen-sm{max-height:640px;}");
  });
  it("min-height-screen", () => {
    const style = "min-h-screen";
    expect(getStyle(style)).toEqual(".min-h-screen{min-height:100vw;}");
  });

  /* box-sizing */
  it("border-box", () => {
    const style = "box-border";
    expect(getStyle(style)).toEqual(".box-border{-webkit-box-sizing:border-box;box-sizing:border-box;}");
  });

  it("content-box", () => {
    const style = "box-content";
    expect(getStyle(style)).toEqual(".box-content{-webkit-box-sizing:content-box;box-sizing:content-box;}");
  });
});
