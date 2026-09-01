# is-animated

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![coverage][coveralls-image]][coveralls-url]
[![standard][standard-image]][standard-url]
[![standard version][standard-version-image]][standard-version-url]

> DEPRECATION NOTICE
>
> This GitHub repository does not contain active source code for `is-animated` NPM library. Since 01.09.2026 the package is being maintained in new repository: [`FRSOURCE/is-animated`](https://github.com/FRSOURCE/is-animated).
>
> All the new pull requests, issues and other information should be posted there.
> Thanks for understanding!

**is-animated** is a simple library for detecting animated images, it supports not only GIFs, but also APNG and WebP images.

## Install

```
npm install is-animated
```

## Example

```js
const fs = require('fs')
const isAnimated = require('is-animated')

const filename = process.argv[2]

fs.readFile(filename, (err, buffer) => {
  const answer = isAnimated(buffer) ? 'Yes' : 'No'
  console.log(`Is "${filename}" animated? ${answer}.`)
})

```

## License

[MIT](LICENSE.md)


[npm-image]: https://img.shields.io/npm/v/is-animated.svg
[npm-url]: https://www.npmjs.com/package/is-animated
[travis-image]: https://img.shields.io/travis/qzb/is-animated.svg
[travis-url]: https://travis-ci.org/qzb/is-animated
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://npm.im/standard
[standard-version-image]: https://img.shields.io/badge/release-standard%20version-brightgreen.svg
[standard-version-url]: https://github.com/conventional-changelog/standard-version
[coveralls-image]: https://img.shields.io/coveralls/qzb/is-animated/master.svg
[coveralls-url]: https://coveralls.io/r/qzb/is-animated?branch=master


