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

  it("group", () => {
    const style = "text-20 hover:(text-80 t-spacing-30) !focus:(text-80 t-spacing-30)";
    expect(getStyle(style)).toEqual(
      ".text-20{font-size:20px;}.hover\\:text-80:hover{font-size:80px;}.\\!focus\\:text-80:focus{font-size:80px !important;}.hover\\:t-spacing-30:hover{letter-spacing:30px;}.\\!focus\\:t-spacing-30:focus{letter-spacing:30px !important;}"
    );
  });

  it("dark", () => {
    const style = "t-20 dark:t-40";
    expect(getStyle(style)).toEqual(".t-20{font-size:20px;}.dark .dark\\:t-40{font-size:40px;}");
  });
});
