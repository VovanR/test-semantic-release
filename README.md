# test-semantic-release

[![semantic-release][semantic-release-image]][semantic-release-url]
[![Commitizen friendly][commitizen-image]][commitizen-url]
[![XO code style][codestyle-image]][codestyle-url]

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> Test

## Install
```
npm install -g commitizen
```



```
npm install -g semantic-release-cli
```
*If you see*
```
Package gnome-keyring-1 was not found in the pkg-config search path.
Perhaps you should add the directory containing `gnome-keyring-1.pc'
to the PKG_CONFIG_PATH environment variable
No package 'gnome-keyring-1' found
```
*Do*
```
sudo apt-key update
sudo apt-get update
sudo apt-get install libgnome-keyring-dev
```

```
cd your-module
semantic-release-cli setup
```

## License

MIT © [Vladimir Rodkin](https://github.com/VovanR)

[semantic-release-url]: https://github.com/semantic-release/semantic-release
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square

[commitizen-url]: http://commitizen.github.io/cz-cli/
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square

[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square


[npm-url]: https://npmjs.org/package/test-semantic-release
[npm-image]: https://img.shields.io/npm/v/test-semantic-release.svg?style=flat-square

[travis-url]: https://travis-ci.org/VovanR/test-semantic-release
[travis-image]: https://img.shields.io/travis/VovanR/test-semantic-release.svg?style=flat-square

[depstat-url]: https://david-dm.org/VovanR/test-semantic-release
[depstat-image]: https://david-dm.org/VovanR/test-semantic-release.svg?style=flat-square

[depstat-dev-url]: https://david-dm.org/VovanR/test-semantic-release
[depstat-dev-image]: https://david-dm.org/VovanR/test-semantic-release/dev-status.svg?style=flat-square
