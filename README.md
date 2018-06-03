# `yiq`

> Returns white when a color is dark and black when a color is light. :art:

## Installing

If you are using NPM:

```shell
npm i --save yiq
```

If you are using Yarn:
```shell
yarn add yiq
```

## Basic Usage

Just call the `yiq` function after importing it:

```javascript
const yiq = require('yiq')

console.log(yiq('#fff')) // #000
console.log(yiq('#000')) // #fff
```

## API

### `yic`

`yiq` — Returns a light color when a color is dark and dark color when a color is light.

#### Description

```javascript
string yiq ( string hexColor [, object options ] )
```

The second parameter (options) should be used to define the colors that the function will return:

```javascript
yic('#fff', {
  white: '#f0f0f0',
  dark: '#333'
}) // #333
```

The defaults are:

- `options.white`: `#fff`;
- `options.dark`: `#000`.

## License

The source code of this repository is under the [MIT License](https://github.com/lffg/yiq/blob/master/LICENSE).  
Copyright © [Luiz Felipe F.](https://lffg.github.io).
