---
sidebar_position: 13
title: JavaScript - Mutable Array Method
---

# What are mutable array methods?

**Archived blogs from [here](https://victoriacheng15.hashnode.dev/javascript-mutable-array-methods)**

In JavaScript, there are many array methods. They can be divided into two categories - mutable and immutable methods. What is the difference between them? As the name suggested, a mutable method will change the array, while an immutable method will not change.

> In some cases, it can be neat to have immutable object as it often leads to a much simpler application development. Often times you need root cause analysis to figure out what went wrong in your program, having mutable objects passed as parameters between functions/methods can be a real pain in the ass when you are debugging your program. [source](https://poanchen.github.io/blog/2017/06/13/mutable-vs-Immutable-object-in-JavaScript)

Does this mean mutable methods are bad? Probably not, but it all depends on what are you trying to do with the code. If you want to keep the original array, best to copy the array with [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) or [Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) or [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) before.

> Note: if you are just learning JavaScript, don't worry about the 3 copying methods above for now. One thing to keep in mind, these listed methods below will change your original array.

This is an interesting read, [If immutable objects are good, why do people keep creating mutable objects?](https://softwareengineering.stackexchange.com/questions/151733/if-immutable-objects-are-good-why-do-people-keep-creating-mutable-objects)

Anyway, let's see how each method works!

## pop()

_Poor mango milk tea, it will be alone after removing from the array._

This method will remove the last item of the array and return the removed item.

[MDN - pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

```js
const teas = [
  "milk tea",
  "green milk tea",
  "coffee milk tea",
  "mango milk tea",
];

const removed = teas.pop();

console.log(removed); // 'mango milk tea'

console.log(teas); // [ 'milk tea', 'green milk tea', 'coffee milk tea' ]
```

## shfit()

_It looks like the milk tea will be in the same shoes as mango milk tea_

This method is similar to pop(), but it removes the first item of the array and will return the first item as well.

[MDN - shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

```js
const teas = [
  "milk tea",
  "green milk tea",
  "coffee milk tea",
  "mango milk tea",
];

const shift = teas.shift();

console.log(shift); // milk tea
console.log(teas); // [ 'green milk tea', 'coffee milk tea', 'mango milk tea' ]
```

## push()

_Gross, taro milk tea will be joined the line soon._

This method adds one or more items to the end of the array. Any type of values (e.g. string, boolean, etc) can be added to the array.

[MDN - push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

```js
const teas = [
  "milk tea",
  "green milk tea",
  "coffee milk tea",
  "mango milk tea",
];

teas.push("taro milk tea", 10, 20);
console.log(teas);
// ['milk tea', 'green milk tea', 'coffee milk tea', 'mango milk tea', 'taro milk tea', 10, 20]
```

## unshfit()

_Wait, brown sugar milk tea, why are you cutting the line??_

This method is similar to push(), but it adds one or more elements to the beginning of the array.

[MDN - unshfit()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

```js
const teas = [
  "milk tea",
  "green milk tea",
  "coffee milk tea",
  "mango milk tea",
];

teas.unshift("brown sugar milk tea");
console.log(teas);
// [ 'brown sugar milk tea', 'milk tea', 'green milk tea', 'coffee milk tea', 'mango milk tea']
```

## reverse()

_Teas, the line order is reversed based on someone's decision. Mango milk tea, you are first in the line now. And milk tea, you are last in the line now._

This method reverses the order of items in the array. E.g. first item become the last item.

[MDN - reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

```js
const teas = [
  "milk tea",
  "green milk tea",
  "coffee milk tea",
  "mango milk tea",
];

const reversed = teas.reverse();

console.log("new", reversed);
// new [ 'mango milk tea', 'coffee milk tea', 'green milk tea', 'milk tea' ]
console.log("original", teas);
// original [ 'mango milk tea', 'coffee milk tea', 'green milk tea', 'milk tea' ]
```

## fill()

_It looks like some teas will be filled with some new type of flavours._

This method changes the item to a provided value.

`fill(value, start, end)`

- value: the value that you want to change to
- start: the starting index
- end: the ending index

[MDN - fill()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

```js
const teas = [
  "milk tea",
  "green milk tea",
  "coffee milk tea",
  "mango milk tea",
];

const filled = teas.fill("matcha milk tea", 1, 2);
console.log("new", filled);
// fillled [ 'milk tea', 'matcha milk tea', 'coffee milk tea', 'mango milk tea' ]

const filled2 = teas.fill("expresso milk tea", 2, 3);
console.log("new", filled2);
// fillleds [ 'milk tea', 'matcha milk tea', 'expresso milk tea', 'mango milk tea' ]

console.log("original", teas);
// original [ 'milk tea', 'gone', 'gone', 'mango milk tea' ]
```

## sort()

_Hey teas, please line up based on alphabet order!_

This method sorts elements based on the [UTF-16 code values](https://en.wikipedia.org/wiki/UTF-16). You don't need to pass anything for the sort() if you are sorting string values. If values are number, you will need to pass `compare function`.

[MDN - sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

```js
const teas = [
  "milk tea",
  "green milk tea",
  "coffee milk tea",
  "mango milk tea",
];

const sorted = teas.sort();

console.log("new", sorted);
// new [ 'coffee milk tea', 'green milk tea', 'mango milk tea', 'milk tea' ]
console.log("original", teas);
// original [ 'coffee milk tea', 'green milk tea', 'mango milk tea', 'milk tea' ]

// for numbers
const nums = [2, 5, 8, 10, 70, 4];

const sortedNums = nums.sort();
console.log(sortedNums);
// [ 10, 2, 4, 5, 70, 8 ], this only sorts based on the first number of each number

const ascending = nums.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  return -1;
});
console.log("ascending", ascending); // ascending [ 2, 4, 5, 8, 10, 70 ]

const descending = nums.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  return -1;
});
console.log("descending", descending); // descending [ 70, 10, 8, 5, 4, 2 ]
```

## splice()

_Oh no, green milk tea is gone! Where is mango milk tea?? Oh, there are 2 more new teas joined!_

This method can take 5 or more parameters, and do 2 things. It can either remove or replace existed elements based on the provided start point and delete counts. It also can add new items.

`splice(start, deleteCount, items1, items2, itemN`

- start: the starting index
- deleteCount: how many elements to delete or replace
- itemN: item names if you are replacing

[MDN - splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

```js
const teas = [
  "milk tea",
  "green milk tea",
  "coffee milk tea",
  "mango milk tea",
];

const spliced = teas.splice(1, 1);

console.log("spliced", spliced);
// spliced [ 'green milk tea' ]
console.log("original", teas);
// original [ 'milk tea', 'coffee milk tea', 'mango milk tea' ]

teas.splice(2, 1, "strawberry milk tea");
console.log("no more mango milk tea", teas);
// no more mango milk tea [ 'milk tea', 'coffee milk tea', 'strawberry milk tea' ]

teas.splice(3, 0, "taro milk tea", "brown sugar milk tea");
console.log("2 more teas show up", teas);
// 2 more teas show up
// ['milk tea', 'coffee milk tea', 'strawberry milk tea', 'taro milk tea', 'brown sugar milk tea']
```

## Recap

Keep in mind, these methods will mutate your array. If you need to keep the original array, make sure to copy the array with [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) or [Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) or [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) before.

I love bubble teas, which is why I used bubble teas as an example. 😆

## Thank you!

Thank you for your time and reading this! Feel free to share your feedback in the comment below, and follow me on [@viktoriacheng15](https://twitter.com/viktoriacheng15)
