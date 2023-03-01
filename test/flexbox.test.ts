import { describe, expect, it } from "vitest";
import { getStyle } from "../packages/core";

describe.concurrent("flex", () => {
  it("flex", () => {
    const style = "flex";
    expect(getStyle(style)).toEqual(
      ".flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;}"
    );
  });

  it("flex-basis", () => {
    const style = "basis-20 basis-50% basis-2x";
    expect(getStyle(style)).toEqual(
      ".basis-20{flex-basis:20px;}.basis-50%{flex-basis:50%;}.basis-2x{flex-basis:0.5rem;}"
    );
  });

  it("inline-flex", () => {
    const style = "inline-flex";
    expect(getStyle(style)).toEqual(
      ".inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex;}"
    );
  });

  /* direction */
  it("flex-row", () => {
    const style = "flex-row";
    expect(getStyle(style)).toEqual(
      ".flex-row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;}"
    );
  });

  it("flex-row-reverse", () => {
    const style = "flex-row-reverse";
    expect(getStyle(style)).toEqual(
      ".flex-row-reverse{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;}"
    );
  });

  it("flex-col", () => {
    const style = "flex-col";
    expect(getStyle(style)).toEqual(
      ".flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column;}"
    );
  });

  it("flex-col-reverse", () => {
    const style = "flex-col-reverse";
    expect(getStyle(style)).toEqual(
      ".flex-col-reverse{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;-webkit-flex-direction:column-reverse;flex-direction:column-reverse;}"
    );
  });

  /* wrap */
  it("flex-wrap", () => {
    const style = "flex-wrap";
    expect(getStyle(style)).toEqual(".flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap;}");
  });
  it("flex-nowrap", () => {
    const style = "flex-nowrap";
    expect(getStyle(style)).toEqual(".flex-nowrap{-ms-flex-wrap:nowrap;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;}");
  });
  it("flex-wrap-reverse", () => {
    const style = "flex-wrap-reverse";
    expect(getStyle(style)).toEqual(
      ".flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;-webkit-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;}"
    );
  });

  /* stretch */
  it("flex-1", () => {
    const style = "flex-1";
    expect(getStyle(style)).toEqual(".flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%;}");
  });
  it("flex-auto", () => {
    const style = "flex-auto";
    expect(getStyle(style)).toEqual(
      ".flex-auto{-webkit-box-flex:1;-ms-flex:1 1 auto;-webkit-flex:1 1 auto;flex:1 1 auto;}"
    );
  });
  it("flex-initial", () => {
    const style = "flex-initial";
    expect(getStyle(style)).toEqual(
      ".flex-initial{-webkit-box-flex:0;-ms-flex:0 1 auto;-webkit-flex:0 1 auto;flex:0 1 auto;}"
    );
  });
  it("flex-none", () => {
    const style = "flex-none";
    expect(getStyle(style)).toEqual(".flex-none{-webkit-box-flex:0;-ms-flex:none;-webkit-flex:none;flex:none;}");
  });

  /* grow */

  it("flex-grow", () => {
    const style = "flex-grow";
    expect(getStyle(style)).toEqual(
      ".flex-grow{-webkit-box-flex:1;-ms-flex-positive:1;-webkit-flex-grow:1;flex-grow:1;}"
    );
  });

  it("flex-grow-0", () => {
    const style = "flex-grow-0";
    expect(getStyle(style)).toEqual(
      ".flex-grow-0{-webkit-box-flex:0;-ms-flex-positive:0;-webkit-flex-grow:0;flex-grow:0;}"
    );
  });

  /* shrink */
  it("flex-shrink", () => {
    const style = "flex-shrink";
    expect(getStyle(style)).toEqual(".flex-shrink{-ms-flex-negative:1;-webkit-flex-shrink:1;flex-shrink:1;}");
  });

  it("flex-shrink-0", () => {
    const style = "flex-shrink-0";
    expect(getStyle(style)).toEqual(".flex-shrink-0{-ms-flex-negative:0;-webkit-flex-shrink:0;flex-shrink:0;}");
  });
});
