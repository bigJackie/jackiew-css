import { describe, expect, it } from "vitest";
import { getStyle } from "../packages/core";

describe.concurrent("font style", () => {
  /* margin */
  it("margin-top", () => {
    const style = "mt-20";
    expect(getStyle(style)).toEqual(".mt-20{margin-top:20px;}");
  });
  it("margin-right", () => {
    const style = "mr-30";
    expect(getStyle(style)).toEqual(".mr-30{margin-right:30px;}");
  });
  it("margin-bottom", () => {
    const style = "mb-20";
    expect(getStyle(style)).toEqual(".mb-20{margin-bottom:20px;}");
  });
  it("margin-left", () => {
    const style = "ml-20";
    expect(getStyle(style)).toEqual(".ml-20{margin-left:20px;}");
  });
  it("margin-x", () => {
    const style = "mx-20";
    expect(getStyle(style)).toEqual(".mx-20{margin-right:20px;margin-left:20px;}");
  });
  it("margin-y", () => {
    const style = "my-20";
    expect(getStyle(style)).toEqual(".my-20{margin-top:20px;margin-bottom:20px;}");
  });
  it("margin-all", () => {
    const style = "ma-20";
    expect(getStyle(style)).toEqual(".ma-20{margin-top:20px;margin-right:20px;margin-bottom:20px;margin-left:20px;}");
  });

  /* padding */
  it("padding-top", () => {
    const style = "pt-20";
    expect(getStyle(style)).toEqual(".pt-20{padding-top:20px;}");
  });
  it("padding-right", () => {
    const style = "pr-30";
    expect(getStyle(style)).toEqual(".pr-30{padding-right:30px;}");
  });
  it("padding-bottom", () => {
    const style = "pb-20";
    expect(getStyle(style)).toEqual(".pb-20{padding-bottom:20px;}");
  });
  it("padding-left", () => {
    const style = "pl-20";
    expect(getStyle(style)).toEqual(".pl-20{padding-left:20px;}");
  });
  it("padding-x", () => {
    const style = "px-20";
    expect(getStyle(style)).toEqual(".px-20{padding-right:20px;padding-left:20px;}");
  });
  it("padding-y", () => {
    const style = "py-20";
    expect(getStyle(style)).toEqual(".py-20{padding-top:20px;padding-bottom:20px;}");
  });
  it("padding-all", () => {
    const style = "pa-20";
    expect(getStyle(style)).toEqual(
      ".pa-20{padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;}"
    );
  });

  /* mul */
  it("padding-left", () => {
    const style = "pl-2x";
    expect(getStyle(style)).toEqual(".pl-2x{padding-left:0.5rem;}");
  });
  it("margin-top", () => {
    const style = "mt-4x";
    expect(getStyle(style)).toEqual(".mt-4x{margin-top:1rem;}");
  });
});
