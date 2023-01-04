---
slug: sets-in-javascript
title: Sets in JavaScript
authors: victoria
tags: [javascript]
description: "JavaScript Set object allows storing unique values of any type. It can be used to remove duplicates from an array. Set.prototype.size property returns the number of elements in the Set object, which can be compared to the original array length to determine if it is an isogram (a word with no repeating letters). To ignore letter case, convert the string to lower case before using Set()."
image: "./sets-in-javascript.webp"
hide_table_of_contents: false
---

![sets in javascript](./sets-in-javascript.webp)

<!--truncate-->

## 🤔 Set in JavaScript 🤔

**Archived blogs from [here](https://victoriacheng15.hashnode.dev/set-in-javascript)**

It is an object that allows you to store unique values of any type.

Example:

```js
const array = ["hello", 2, 2, 3, 4, "hi", "Hi"];

const set = new Set(array);

console.log(set); // [object Set]

// need to use either Array.from or spread operator
console.log([...set]); // Array ['hello', 2, 3, 4, 'hi', 'Hi']
```

Have you noticed that there is only one `2` in the array after `console.log`? This is how you remove duplications with `Set()`.

Keep in mind, lower and upper case letters are NOT the same. `'A' === 'a'` will return false in browser console.

## Codewars problem:

An isogram is a word that has _no repeating letters_, consecutive or non-consecutive.

Implement a function that determines whether a string that contains only letters is an isogram.

Assume the empty string is an isogram. Ignore letter case.

Example: (Input => Output)

- "Dermatoglyphics" => true

- "aba" => false

- "moOse" => false (ignore letter case)

### First method (without using Set);

- Set up the newArr to take characters in

- Convert str to lower cases

- Convert str to array with spread operator

- Check the newArr first, if the newArr doesn't have the character, push. Otherwise, don't push

- Compare strArr and newArr length, if both are equal, true

```js
function isIsogram(str) {
  const newArr = [];
  const strArr = [...str.toLowerCase()];
  strArr.forEach((char) => {
    if (!newArr.includes(char)) {
      newArr.push(char);
    }
  });
  return newArr.length === str.length;
}
```

### Second method:

- Convert str to lower cases

- Use new Set() and take str.toLowerCase() as the parameter

- Use size property to return the number of elements in the Set object and length for str

- Compare size and length, if both are equal, true.

```js
function isIsogram(str) {
  return new Set(str.toLowerCaser()).size === length;
}

// if use spread operator instead
function isIsogram(str) {
  return [...new Set(str.toLowerCase())].length === length;
}
```

### Conclusion

Make sure to convert them to lower case first and then remove any duplications. Unless the problem stats differently.

As you can see, both methods work. The first method writes more lines of code, while the second method is one-line!

# Resources

[MDN - Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

[MDN - Set() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set)

[MDN - Set.prototype.size](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size)

# Thank you!

Thank you for your time and reading. I hope this helps you. Please feel free to let me know if you have any questions or feedback. 😀
