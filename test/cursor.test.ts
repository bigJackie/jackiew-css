import { describe, expect, it } from "vitest";
import { getStyle } from "../packages/core";

describe.concurrent("cursor", () => {
  /* cursor */
  it("cursor-auto", () => {
    const style = "cursor-auto";
    expect(getStyle(style)).toEqual(".cursor-auto{cursor:auto;}");
  });
  it("cursor-default", () => {
    const style = "cursor-default";
    expect(getStyle(style)).toEqual(".cursor-default{cursor:default;}");
  });
  it("cursor-pointer", () => {
    const style = "cursor-pointer";
    expect(getStyle(style)).toEqual(".cursor-pointer{cursor:pointer;}");
  });
  it("cursor-wait", () => {
    const style = "cursor-wait";
    expect(getStyle(style)).toEqual(".cursor-wait{cursor:wait;}");
  });
  it("cursor-text", () => {
    const style = "cursor-text";
    expect(getStyle(style)).toEqual(".cursor-text{cursor:text;}");
  });
  it("cursor-move", () => {
    const style = "cursor-move";
    expect(getStyle(style)).toEqual(".cursor-move{cursor:move;}");
  });
  it("cursor-help", () => {
    const style = "cursor-help";
    expect(getStyle(style)).toEqual(".cursor-help{cursor:help;}");
  });
  it("cursor-not-allowed", () => {
    const style = "cursor-not-allowed";
    expect(getStyle(style)).toEqual(".cursor-not-allowed{cursor:not-allowed;}");
  });

  /* select */
  it("user-select-none", () => {
    const style = "select-none";
    expect(getStyle(style)).toEqual(
      ".select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"
    );
  });
  it("user-select-text", () => {
    const style = "select-text";
    expect(getStyle(style)).toEqual(
      ".select-text{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;}"
    );
  });
  it("user-select-all", () => {
    const style = "select-all";
    expect(getStyle(style)).toEqual(
      ".select-all{-webkit-user-select:all;-moz-user-select:all;-ms-user-select:all;user-select:all;}"
    );
  });
  it("user-select-auto", () => {
    const style = "select-auto";
    expect(getStyle(style)).toEqual(
      ".select-auto{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;}"
    );
  });

  /* pointer events */
  it("pointer-events", () => {
    const style = "pointer-events-none";
    expect(getStyle(style)).toEqual(".pointer-events-none{pointer-events:none;}");
  });
  it("pointer-events", () => {
    const style = "pointer-events-auto";
    expect(getStyle(style)).toEqual(".pointer-events-auto{pointer-events:auto;}");
  });
});
