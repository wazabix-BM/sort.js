### sort.js

[![Discord](https://img.shields.io/discord/519837781866840122?color=738ADB&label=WaZaBiX%27s%20guild&logo=Discord)](https://discord.gg/ES52WDg)
[![npm](https://img.shields.io/npm/v/sort.js?color=blue&logo=npm)](https://www.npmjs.com/package/sort.js)
[![NPM](https://img.shields.io/npm/l/sort.js?logo=github)](https://github.com/wazabix-BM/sort.js/blob/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/sort.js?logo=npm)](https://www.npmjs.com/package/sort.js)

> Simple JS library to sort different elements of an array

# Install

```sh
npm i sort.js
```

# API

* *Constructor*

<code><b>new Sort ([array], [mode])</b></code>

* *function*

<code><b>.sortOption ([option], 'callback')</b></code>

* Parameters

<code><b>[mode]</b></code>
<code><b>[option]</b></code>

* <code><b>[mode]</b></code>
    * Different possibilities: "numbers", "words" and "time"
        * This parameters allows you to specify what type of data your table contains.

* <code><b>[options]</b></code>
    * Differents possibilities: "descending", "ascending", "alphabetical", "reverse alphabetical order", "ordered" and "reverse ordered"
        * This parameter allows you to define what kind of sort you want to have for your output array. In ascending or descending order, in alphabetical order or not if it's for words.

# Usage

* <code>[mode]</code> = numbers

> Used to sort numbers in ascending or descending order

```js
const { Sort } = require ('sort.js');

const numbers = [15, 4, 8, 25, 1];

new Sort (numbers, 'numbers').sortOption ('ascending', array => {
    console.log (array);
});

// Expected output: [ 1, 4, 8, 15, 25 ]

// ------------------------------------------------------

new Sort (numbers, 'numbers').sortOption ('descending', array => {
    console.log (array);
});

// Expected output: [ 25, 15, 8, 4, 1 ]
```

* <code>[mode]</code> = words

> Used to sort words in alphabetical or non-alphabetical order

```js
const { Sort } = require ('sort.js');

const words = ['mango', 'pineapple', 'kiwi', 'fruits'];

new Sort (words, 'words').sortOption ('alphabetical', array => {
    console.log (array);
});

// Expected output: [ 'fruits', 'kiwi', 'mango', 'pineapple' ]

// ----------------------------------------------------------------

new Sort (words, 'words').sortOption ('reverse alphabetical order', array => {
    console.log (array);
});

// Expected output: [ 'pineapple', 'mango', 'kiwi', 'fruits' ]
```

* <code>[mode]</code> = time

> Used to sort the different times of the day

All times of the day are taken care of

You can see them in this picture: https://www.englishlearnsite.com/wp-content/uploads/2018/01/Times-of-The-Day.jpg

```js
const { Sort } = require ('sort.js');

const timeWords = ['night', 'morning', 'afternoon', 'early afternoon', 'noon', 'midnight'];

new Sort (wordsTime, 'time').sortOption ('ordered', array => {
    console.log (array);
});

/* Expected output: [
  'morning',
  'noon',
  'early afternoon',
  'afternoon',
  'night',
  'midnight'
]
*/

// ------------------------------------------------------------------------------

new Sort (wordsTime, 'time').sortOption ('reverse ordered', array => {
    console.log (array);
});

/* Expected output: [
  'midnight',
  'night',
  'afternoon',
  'early afternoon',
  'noon',
  'morning'
]
*/
```
