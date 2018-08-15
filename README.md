# sort-github-stars-size

[![NPM version](https://img.shields.io/npm/v/sort-github-stars-size.svg?style=flat)](https://npmjs.org/package/sort-github-stars-size)
[![Travis CI](https://travis-ci.org/ZYSzys/sort-github-stars-size.svg?branch=master)](https://travis-ci.org/ZYSzys/sort-github-stars-size)
[![codecov](https://codecov.io/gh/ZYSzys/sort-github-stars-size/branch/master/graph/badge.svg)](https://codecov.io/gh/ZYSzys/sort-github-stars-size)
[![NPM downloads](http://img.shields.io/npm/dm/sort-github-stars-size.svg?style=flat)](https://npmjs.org/package/sort-github-stars-size)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![license](https://img.shields.io/github/license/ZYSzys/sort-github-stars-size.svg)](https://github.com/ZYSzys/sort-github-stars-size/blob/master/LICENSE)

> Sort your personal starred repos by repo's size.

![](/screenshot.png)

## Installation

### Global
```sh
# Using npm
npm install -g sort-github-stars-size

# Using yarn
yarn global add sort-github-stars-size
```

### Local
```sh
# Using npm
npm install --save sort-github-stars-size

# Using yarn
yarn add sort-github-stars-size
```


## Usage

### NodeJS
```js
const sortStarredBySize = require('.')

// use your username, 'ZYSzys' is mine
sortStarredBySize('ZYSzys', (err, repos) => {
  console.log(err || repos.map(function(c) {
    return `${c.full_name} => ${c.size} kb`
  }).join("\n"))
});
// =>
// Just a number.
```

### CLI
```bash
# use your username, 'ZYSzys' is mine
sort-starred-by-size ZYSzys
```
## License

MIT.