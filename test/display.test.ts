import { describe, expect, it } from "vitest";
import { getStyle } from "../packages/core";

describe.concurrent("font style", () => {
  /* display */
  it("block", () => {
    const style = "block";
    expect(getStyle(style)).toEqual(".block{display:block;}");
  });
  it("inline-block", () => {
    const style = "inline-block";
    expect(getStyle(style)).toEqual(".inline-block{display:inline-block;}");
  });
  it("inline", () => {
    const style = "inline";
    expect(getStyle(style)).toEqual(".inline{display:inline;}");
  });
  it("flow-root", () => {
    const style = "flow-root";
    expect(getStyle(style)).toEqual(".flow-root{display:flow-root;}");
  });
  it("contents", () => {
    const style = "contents";
    expect(getStyle(style)).toEqual(".contents{display:contents;}");
  });
  it("hidden", () => {
    const style = "hidden";
    expect(getStyle(style)).toEqual(".hidden{display:none;}");
  });
  it("list-item", () => {
    const style = "list-item";
    expect(getStyle(style)).toEqual(".list-item{display:list-item;}");
  });

  /* visibility */
  it("visible", () => {
    const style = "visible";
    expect(getStyle(style)).toEqual(".visible{visibility:visible;}");
  });
  it("invisible", () => {
    const style = "invisible";
    expect(getStyle(style)).toEqual(".invisible{visibility:hidden;}");
  });
});
