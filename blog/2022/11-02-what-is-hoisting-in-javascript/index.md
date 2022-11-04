---
slug: what-is-hoisting-in-javascript
title: What is hoisting in JavaScript?
authors: victoria
tags: [javascript]
hide_table_of_contents: false
---

![Hoisting in JavaScript](./js-hoisting.webp)

I was reviewing my Anki cards on interview preps and hoisting question came up. Sometime, I remember and another time, I don't remember. 😅 So I decided to look into hoisting more.

<!--truncate-->

## What is hoisting?

It is a tricky question that comes with a tricky answer. However, **hoisting in JavaScript allows you to access functions and variables before they have been created** according to [Wes Bos's JavaScript - Hoisting](https://wesbos.com/javascript/03-the-tricky-bits/hoisting).

Also, there are TWO things that are hoisted

- function declarations
- variable declarations

## Function declarations

This was the question that came up on my Anki review. The question was `Explain the different between the 2 functions below`

```js
function foo() {}

var foo = function () {};
```

The first one is a function declaration, while the latter is a function expression. The key difference is that the function declaration has its body hoisted, but the bodies of function expressions are not.

Let's use different examples and say there are 2 greeting functions. Both of them will log both values in the console.

```js
function greet() {
  console.log("hello");
}

greet(); // hello

var greeting = function () {
  console.log("hey");
};

greeting(); // hey
```

However, if you are trying to move function callings before the declaration. The function `declaration` will log the value in the console, while the function `expression` will show error in the console. This is because JavaScript will move all function `declarations` to the top of the file and then run it, and NOT function `expression`. The "move" is done in the background somehow by the JavaScript. The file stays the same and doesn't actually change.

```js
greet(); // hello

function greet() {
  console.log("hello");
}

greeting();
// TypeError: greeting is not a function

var greeting = function () {
  console.log("hey");
};
```

Also, if you are using Eslint, and it will complain about `greet()` is used before the function was defined. This is based on the `no-use-before-define` rule. You can read more on this rule [on the site here](https://eslint.org/docs/latest/rules/no-use-before-define). This is why I am seldom calling the function before it defines and if I do, Eslint would let me know.

If `let` or `const` was used instead, it would show cannot access 'greeting' before initialization.

```js
greeting();
// ReferenceError: Cannot access 'greeting' before initialization

let greeting = function () {
  console.log("hey");
};
```

## Variable declarations

Let's run the code below. We know this will log the `a` value for sure.

```js
var a = 10;
console.log(a); //10
```

If you move `console.log(a)` above the variable declaration. You will get `undefined` in the console. Keep in mind, this happens when `var` is used instead of `let` or `const`.

```js
console.log(a);
// undefined
var a = 10;
```

If `let` or `const` was used instead, it shows the same error as function expression.

```js
console.log(a);
// ReferenceError: Cannot access 'a' before initialization
let a = 10;
```

## Recap

Hoisting is a tricky concept to understand and can be really confused if `var` was used instead of `let` and `const`.

Let's think this way, books have sequels. e.g. Harry Potter books have 1 to 7 sequels. So if you are trying to read the 2nd book instead of the first book, it would not make sense, and you are skipping details and events that were written in the first book. In order to understand the story, you would need to read these books in the order. It is similar to How JavaScript reads your code from top to bottom. Variables or functions need to be declared before you can call them. And it would make sense.

Of courses, JavaScript is weird in its own way, like you can call the function declarations before the functions are defined and `var` was used.

## Resources

- [Wes Bos's JavaScript - Hoisting](https://wesbos.com/javascript/03-the-tricky-bits/hoisting)
- [JavaScript Info - The old "var"](https://javascript.info/var)
- [Web Dev Simplified - Learn JavaScript Hoisting In 5 Minutes](https://www.youtube.com/watch?v=EvfRXyKa_GI)

## Thank you!

Thank you for your time and reading this!