# password-js [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Password generator written in Javascript

## Installation

```sh
$ npm install --save password-js
```

## Usage

```js
var Password = require('password-js');

var options = {
  passwordLength: 20, // optional, defaults to 8
  // randomGenerator // Optional random number generator, defaults to use Math.random()
}

var passwordGenerator = Password(options);

var generatedPassword = passwordGenerator.generate();
```




## License

MIT © [Scott Warren](s.cott.pw)


[npm-image]: https://badge.fury.io/js/password-js.svg
[npm-url]: https://npmjs.org/package/password-js
[travis-image]: https://travis-ci.org/scottwarren/password-js.svg?branch=master
[travis-url]: https://travis-ci.org/scottwarren/password-js
[daviddm-image]: https://david-dm.org/scottwarren/password-js.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/scottwarren/password-js
[coveralls-image]: https://coveralls.io/repos/scottwarren/password-js/badge.svg
[coveralls-url]: https://coveralls.io/r/scottwarren/password-js

## Contributing

Using Git Flow within this project (make branches from develop, and merge back to develop)
