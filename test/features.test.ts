import { describe, expect, it } from "vitest";
import { getStyle } from "../packages/core";

describe.concurrent("features", () => {
  it("important", () => {
    const style = "text-0 !t-20 t-height-20 !t-justify";
    expect(getStyle(style)).toEqual(
      ".text-0{font-size:0px;}.\\!t-20{font-size:20px !important;}.t-height-20{line-height:20px;}.\\!t-justify{text-align:justify !important;}"
    );
  });

  it("hover", () => {
    const style = "hover:text-0 t-20 !hover:t-height-20 hover:t-justify";
    expect(getStyle(style)).toEqual(
      ".hover\\:text-0:hover{font-size:0px;}.t-20{font-size:20px;}.\\!hover\\:t-height-20:hover{line-height:20px !important;}.hover\\:t-justify:hover{text-align:justify;}"
    );
  });
});
