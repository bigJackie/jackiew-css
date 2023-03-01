export const directionMap: Record<string, string[]> = {
  t: ["top"],
  r: ["right"],
  b: ["bottom"],
  l: ["left"],
  x: ["right", "left"],
  y: ["top", "bottom"],
  a: ["top", "right", "bottom", "left"],
};

export const flexDirectionMap: Record<string, string> = {
  row: "row",
  col: "column",
  "row-reverse": "row-reverse",
  "col-reverse": "column-reverse",
};

export const flexStretchMap: Record<string, string> = {
  1: "1 1 0%",
  auto: "1 1 auto",
  initial: "0 1 auto",
  none: "none",
};

export const posContentMap: Record<string, string[]> = {
  start: ["start", "flex-start"],
  end: ["end", "flex-end"],
  center: ["center", "center"],
  between: ["justify", "space-between"],
  around: ["distribute", "space-around"],
  evenly: ["space-evenly", "space-evenly"],
};

export const screenBreakPointMap: Record<string, string> = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
  "3xl": "1920px",
};

export const sizingMap: Record<string, string> = {
  auto: "auto",
  none: "none",
  full: "100%",
  screen: "100vw",
};
