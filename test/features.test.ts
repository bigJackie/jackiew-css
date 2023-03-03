import { describe, expect, it } from "vitest";
import { getStyle } from "../packages/core";

describe.concurrent("features", () => {
  it("important", () => {
    const style = "!t-20";
    expect(getStyle(style)).toEqual(".\\!t-20{font-size:20px !important;}");
  });

  it("hover", () => {
    const style = "hover:text-0 !hover:t-height-20";
    expect(getStyle(style)).toEqual(
      ".hover\\:text-0:hover{font-size:0px;}.\\!hover\\:t-height-20:hover{line-height:20px !important;}"
    );
  });

  it("group", () => {
    const style = " hover:(text-80 t-spacing-30) !focus:(text-80 t-spacing-30)";
    expect(getStyle(style)).toEqual(
      ".hover\\:text-80:hover{font-size:80px;}.hover\\:t-spacing-30:hover{letter-spacing:30px;}.\\!focus\\:text-80:focus{font-size:80px !important;}.\\!focus\\:t-spacing-30:focus{letter-spacing:30px !important;}"
    );
  });

  it("dark", () => {
    const style = "t-20 dark:t-40";
    expect(getStyle(style)).toEqual(".t-20{font-size:20px;}.dark .dark\\:t-40{font-size:40px;}");
  });

  it("wrapper:sm", () => {
    const style = "t-20 !sm:focus:t-40";
    expect(getStyle(style)).toEqual(
      ".t-20{font-size:20px;}@media(max-width:640px){.\\!sm\\:focus\\:t-40:focus{font-size:40px !important;}}"
    );
  });

  it("wrapper:xl", () => {
    const style = "t-20 xl:t-40";
    expect(getStyle(style)).toEqual(".t-20{font-size:20px;}@media(max-width:1280px){.xl\\:t-40{font-size:40px;}}");
  });

  it("wrapper:3xl", () => {
    const style = "t-20 3xl:hover:t-40";
    expect(getStyle(style)).toEqual(
      ".t-20{font-size:20px;}@media(max-width:1920px){.3xl\\:hover\\:t-40:hover{font-size:40px;}}"
    );
  });
});
