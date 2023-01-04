---
slug: javascript-functions
title: JavaScript Functions
authors: victoria
tags: [javascript]
description: "A function in JavaScript is a block of code that can be called multiple times without repetition. Functions can take arguments and have default values. There are two ways to declare functions: function declarations and function expressions. Arrow functions are a shorter syntax for writing function expressions."
image: "./javascript-functions.webp"
hide_table_of_contents: false
---

![javascript functions](./javascript-functions.webp)

<!--truncate-->

## What is a function?

**Archived blogs from [here](https://victoriacheng15.hashnode.dev/javascript-functions)**

Functions are _building blocks_ of the program. They allow the code to be called many times without repetition!

```js
function greeting() {
  console.log("Hello everyone!");
}

greeting(); // Hello everyone!
```

Let's declare a variable name and assign `Penguin` value to the `name` variable!

```js
let name = "Penguin";

// method 1
function greeting() {
  console.log("Hello " + name + "!");
}

// method 2 with template string, a new feature in ES6
function greeting() {
  console.log(`Hello ${name}!`);
  // use 'back-tick' key, next to number 1 on keyboard instead of single or double quotes
}

greeting(); // Hello Penguin!
```

![Hello Penguin](https://images6.fanpop.com/image/photos/37800000/-Hello-penguins-of-madagascar-37800672-500-500.gif)

What if you need to greet many visitors and their names are not Penguin? You can set a parameter named `name` to the greeting function. And you pass 'Anna' or 'Victoria' or any name as an argument.

```js
function greeting(name) {
  console.log(`Hello ${name}!`);
}

greeting("Anna"); // Hello Anna!
greeting("Victoria"); // Hello Victoria!
```

What if you forgot to pass an argument to `name`? The console will show `Hello undefined!`. We can do this in a few ways.

- Passing _default value_ by adding `name = 'Stranger'`
- Use `if else` statement
- Using the OR `||` operator by adding `name = name || 'Stranger'`

```js
// method 1
function greeting(name = "Stranger") {
  console.log(`Hello ${name}!`);
}

// method 2
function greeting(name) {
  if (name === undefined) {
    console.log("Hello Stranger!");
  } else {
    console.log(`Hello ${name}!`);
  }
}

// method 3
function greeting(name) {
  name = name || "Stranger";
  console.log(`Hello ${name}!`);
}
```

## There are 2 ways of declaring functions

```js
// first:  Function Declaration, which is what you have been read so far
function sayHi() {
  console.log("Hello");
}

// second: Function Expression
const sayHi = function () {
  console.log("Hello");
};
```

### What are the differences between them?

1. function declaration => declared as a separated statement in the main code flow
   - can be called earlier than it is defined.
2. function expression => created inside an expression or inside another syntax construct with **assignment expression** `=`
   - can be used when the interpreter reaches the line

### Can we copy function?

Yes, a function is a value, so we can copy them!

```js
const anotherSayHi = sayHi;

ananotherSayHi(); // Hello
```

### Keep in mind

If you declare a function inside a function, you cannot call the inside function from outside of the `sayHi` function.

```js
function sayHello() {
  console.log("Hello!");
  // the inside function
  function anotherHello() {
    console.log("Hello from anotherHello");
  }
}

sayHello(); // Hello!
anotherHello(); // error, anotherHello is not defined.
```

Function declarations are their block scopes. If a function was declared within the curly bracket, the function only can be called inside the curly bracket of its parents

```js
function sayHello() {
  console.log("Hello!");
  // the inside function
  function anotherHello() {
    console.log("Hello from anotherHello");
  }
  // call it from sayHello's curly bracket
  anotherHello();
}

sayHello(); // Hello! and Hello from anotherHello
```

## What is Arrow Function

There is another simple and concise syntax for creating functions! And it is called `arrow function`. It is one of the ES6 features.

The basic:

```js
// regular function
function func() {
  return expression;
}
// arrow function
const func = () => expression;
```

Both functions work the same way and will return the same expression. The arrow function allows us to write without the `return` keyword.

```js
// regular function
const sum = function (a, b) {
  return a + b;
};
// arrow function
const sum = (a, b) => a + b;
```

Let's convert this function to arrow function!

```js
// regular function
function sayHello() {
  console.log("Hello!");
  function anotherHello() {
    console.log("Hello from anotherHello");
  }
  anotherHello();
}

// arrow function
const sayHello = () => {
  console.log("Hello!");
  const anotherHello = () => console.log("Hello from anotherHello");
  anotherHello();
};
```

## What is IIFE?

It stands for `Immediately-Invoked Function Expression`. How does it work? It runs immediately as soon as the function is defined and can also be referred to as a `self-executing anonymous function`.

```js
// regular function
(function () {
  // code to run
})();

// arrow function
(() => {
  // code to run
})();
```

Why do we write IIFE? It allows us to avoid polluting the global namespace.

# Thank you!

Thank you for reading my blog! 😊
