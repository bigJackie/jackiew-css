<h1 align='center'>jackiew-css

<h5 align='center'>

atom css engine inspired by [antfu](https://antfu.me/)

</h5>

</h1>

<div align="center">

[![](https://img.shields.io/badge/license-MIT-violet.svg)](https://champyin.com)
[![](https://img.shields.io/badge/package-NPM-blueviolet.svg)](https://champyin.com)

</div>

## Features

- ⚡️ **It's FAST**
- 🧩 On-demand CSS utilities
- 🔥 Hot module replacement (HMR)
- 🎳 Support Variant Groups - e.g. `bg-gray-200 hover:(bg-gray-100 text-red-300)`
- 🌑 Support Dark mode
- 📱 Support Screen BreackPoints

## Documentation

Read the [documentation](https://ui.jackiewongz.com/) for more details.

## install

```javascript
npm install @jackiew/atomcss
```

## Quick Start

In vite.config.ts

```javascript
import { AtomCss } from "./packages/index";

export default defineConfig({
  plugins: [AtomCss({})],
});
```

## Custom Rules

### css rules

```javascript
...
plugins: [
    AtomCss({
      rules: [
        [/^text-big$/, [["font-size", "48px"]]],
        // ignore first parameter
        [/^(?:width|w)-(\d+)%$/, ([, val])=>[["width", `${val}%`]]],
      ],
      // etc..
    }),
  ],
...
```

## Browser Support

| <img src="https://github.com/zhubeijia/source/blob/main/srclogo/icon-edge.06c7aa18.svg?raw=true" width="20px">Edge | <img src="https://github.com/zhubeijia/source/blob/main/srclogo/icon-chrome.99f0b30c.svg?raw=true" width="20px">Chrome | <img src="https://github.com/zhubeijia/source/blob/main/srclogo/icon-safari.1bf88a3e.svg?raw=true" width="20px">Safari |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Edge                                                                                                                 | Last two versions                                                                                                        | Last two versions                                                                                                        |

## License

MIT License &copy; 2022 [JackieWong](https://github.com/bigJackie)

Looking forward to your suggestion!!
