# markdown-stream

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]

Tranform a stream of Markdown into HTML (via [Remarkable][remarkable]).

## Installation

```
npm install markdown-stream
```

## Usage

``` javascript
var fs       = require('fs')
var markdown = require('markdown-stream')

var input  = fs.createReadStream('README.md')
var output = fs.createWriteStream('README.html')

input
  .pipe(markdown('full', {
    html: true
  }))
  .pipe(output)
```

## Options

Refer to [Remarkable][remarkable] for presets and options.

## Note

The module requires the whole stream to be buffered, so use it carefully.

[npm-img]: https://img.shields.io/npm/v/markdown-stream.svg?style=flat-square
[npm-url]: https://npmjs.org/package/markdown-stream
[license-img]: http://img.shields.io/npm/l/markdown-stream.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/markdown-stream.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/markdown-stream
[remarkable]: https://github.com/jonschlinkert/remarkable
