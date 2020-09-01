# length.js

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/47748c98a2a142958333845ba6343225)](https://app.codacy.com/app/danielsss/length.js?utm_source=github.com&utm_medium=referral&utm_content=danielsss/length.js&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.com/danielsss/length.js.svg?branch=master)](https://travis-ci.com/danielsss/length.js)
[![npm version](https://badge.fury.io/js/js-length.svg)](https://badge.fury.io/js/js-length)

A safety length tool for every javascript program.

# Why js-length ?
Actually the `.length` will be called in your program everywhere, also we see
the fatal error in your log. perhaps, it will crash your program, the `js-length`
will `resolve` all the length or size of `javascript variable`.

* Crash:
```js
// Assuming that `some API()` gives a response value of null
const test = someAPI();

for(let i = 0; i < test.length; i++) {
  //logic code here
}

/* 
The for loop will cause an fatal error:

TypeError: Cannot read property 'length' of null

It's not safe here 
*/
```

* To avoid call the `length` of null
```js
const length = require('js-length');
const values = someAPI();
for(let i = 0; i < length(values); i++) {
  // Logic code here
}

/* 
  It's never be crash
  At least length.js will return a number >= 0 
*/
```

# Usage

* install
```shell
npm i --save js-length@latest
```

* require
```js
const length = require('js-length');
```

* examples
```js
length(null); // => 0
length(undefined); // => 0
length('abc'); // => 3
length([1,2,3]); // => 3

const map = new Map();
map.set(1, 1);
map.set(2, 2);
length(map); // => 2

const set = new Set([1, 2, 3]);
length(set) // => 3

/* fn.length for arguments length */
const fn = function(a, b, c) {}
/* we don't length the function arguments */
length(fn); // => 0

length({}); // => 0
length({'a': 1}); // => 0

```

# LICENCE

MIT License

Copyright (c) 2018 Danielsss

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
