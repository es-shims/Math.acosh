# Math.acosh <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Math.acosh` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-map-objects).

## Getting started

```sh
npm install --save math.acosh
```

## Usage/Examples

```js
console.log(Math.acosh(1)); // 0
console.log(Math.acosh(2)); // 1.3169578969248166
console.log(Math.acosh(0)); // NaN
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/math.acosh
[npm-version-svg]: https://versionbadg.es/es-shims/Math.acosh.svg
[deps-svg]: https://david-dm.org/es-shims/Math.acosh.svg
[deps-url]: https://david-dm.org/es-shims/Math.acosh
[dev-deps-svg]: https://david-dm.org/es-shims/Math.acosh/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Math.acosh#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/math.acosh.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/math.acosh.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/math.acosh.svg
[downloads-url]: https://npm-stat.com/charts.html?package=math.acosh
[codecov-image]: https://codecov.io/gh/es-shims/Math.acosh/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Math.acosh/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/Math.acosh
[actions-url]: https://github.com/es-shims/Math.acosh/actions
