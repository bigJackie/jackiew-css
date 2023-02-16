export default {
  rules: [
    // [/(\s*)(?<=ml-)[0-9]*(?=\s)/g, ([, d]) => ({ margin: `${d / 4}rem` })],
    // [/(\s*)(?<=mr-)[0-9]*(?=\s)/g, ([, d]) => ({ margin: `${d / 4}rem` })],
    [/(text-)[^\s\d]+(?=\s?)/g, /(?<=text-)[^\s\d]+(?=\s?)/g, ([color]) => ({ key: "color", val: color })],
    [/(text-)\d+(?=\s?)/g, /(?<=text-)\d+(?=\s?)/g, ([size]) => ({ key: "font-size", val: size + "px" })],
  ],
};
