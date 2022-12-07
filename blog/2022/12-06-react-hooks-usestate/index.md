---
slug: react-hooks-usestate
title: React Hooks - useState
authors: victoria
tags: [react, react hooks]
hide_table_of_contents: false
---

![react-hooks-useState](./react-hooks-useState.webp)

<!--truncate-->

## What is useState?

What is `useState` hook? It is a feature in React that allow functional components to have states. It is called, inside a component, add one or more local states. The hook usually consists of 2 variables.

```js
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
```

The first variable `count` is the initial value. `setCount` is a function that update the initial value.

If you are confused or fairly new to React. Think this like JavaScript.

```js
const button = document.querySelector("button");
const countText = document.querySelector("p");

// count variable here is like the count from above
let count = 0;

// this is like the handleClick
function addValue() {
  count += 1;
  countText.textContent = count;
}

button.addEventListener("click", addValue);
```

## useState with different types

You can use for all types

- String: `const [name, setName] = useState("Victoria")`
- Boolean: `const [mode, setMode] = useState(false)`
- Array: `const [array, setArray] = useState([])`
- Object: `const [object, setObject] = useState([{ name: "Victoria", number: 123  }])`

## Bonus: TypeScript

In general, types should already inferred by TypeScript when:

- variable are initialized
- default values are set for parameters
- function return types are determined

When you are on the editor, hover the mouse to the array1 or object or any variables, there should be a popup window that says `const variable: type`

![image](https://user-images.githubusercontent.com/35031228/206090180-ac27305a-5cc7-4518-8ffa-fc510aeee0fb.png)

![image](https://user-images.githubusercontent.com/35031228/206090385-e1137ca8-cea1-493b-860e-7162330fa70d.png)

If type is to be determine, you should let TS know what type of this variable will be in the future.

## Update or change states

Remember, arrays are mutable in JavaScript and you should treat them as `immutable` when you store them in state. So avoid using `push`, `unshift`, `pop`, `shift`, `splice`, `reverse`, and `sort`. And in React, states are considered `read-only`, so you should copy the original state and then update value(s).

```js
const array = [1, 2, 3, 4, 5];
// do this first
const copied = [...array];

// update the array
```

```js
const object = { name: "Victoria", number: 123 };
// do this first
const copied = { ...object };

// update the object
```

## Something strange...? Maybe?

If you add `console.log(count)` in the `handleClick` function, and you notice that the console will log the previous value instead of the updated value. This may not be a dealbreaker for certain cases.

Let's say you want to have a button that add 1 and another button that add 3.

```js
function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  // function handleClick() {
  //   setCount((prev) => prev + 1);
  // }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>add 1</button>
      <button
        onClick={() => {
          handleClick();
          handleClick();
          handleClick();
        }}
      >
        add 3
      </button>
    </div>
  );
}
```

Let's see actions below!

Notice, it only adds 1 after clicked `add 3` with `setCount(count + 1)`.

![chrome_5OnfOyd21a](https://user-images.githubusercontent.com/35031228/206037427-f2d7bb11-36c0-4065-964d-792458259c4e.gif)

Notice, it adds 3 after clicked `add 3` with `setCount(prev => prev + 1)`

![chrome_0uooizbaEZ](https://user-images.githubusercontent.com/35031228/206037764-ddb487d9-cace-4429-a00a-1c79be1c4049.gif)

> Note: I should name the parameter better, like prevCount.

According to the docs, it is called `Updater` function (I didn't know the name for this). It takes the **previous count** 5 based on the GIF example and then return **next value**, which is 8.

Do you need to always write updater function? Maybe? But, I would say depend on the case, if you need to write updater in setState, then go ahead. I do not know which one is the best/better practice. I personally don't see any harms to write `setState` with or without the updater function.

## Personal story with updater function

When I was working on the rest-countries-api (the JS version), I was so confused why the pagination was not behaving the way I wanted it to be. At the time, I was not thinking about the updater function. So, I had to adjust the math with `totalPage` to make it behaves the way I wanted.

The JS version:

```js
const handleNext = (page) => {
  const FIVE = displayPages.length;
  const condition = page <= Math.floor(FIVE / 2);
  if (condition) {
    setCurrentPage(page + 1);
    setStartPage(0);
    setEndPage(5);
  } else {
    setCurrentPage(page >= totalPages ? totalPages : page + 1);
    // notice the totalPages - 2?? weird, right?
    setStartPage(page >= totalPages - 2 ? totalPages - 5 : startPage + 1);
    setEndPage(page >= totalPages ? totalPages : endPage + 1);
  }
};
```

If I have the `totalPage -5` instead of the magic number `2`, the GIF shows how it behaves.

![chrome_dWgiq9YfiD](https://user-images.githubusercontent.com/35031228/206044718-0fdc274b-58ee-47b5-8a1c-5e4c681d6847.gif)

Later, I decided to re-built the same app with TypeScript. While I was working on the app, I realized that I could have implement with the updater function. The math logic will sound right.

The TS version:

> Note: prev in this case is the prevPage.

```ts
const forward = () => {
  const FIVE = displayPages.length;
  const condition = currentPage <= Math.floor(FIVE / 2);
  if (condition) {
    setCurrentPage((prev) => prev + 1);
    setStart(0);
    setEnd(5);
  } else {
    setCurrentPage((prev) => (prev >= total ? total : prev + 1));
    // with updater function, I can write total - 5 and this makes sense to me
    setStart((prev) => (prev >= total - 5 ? total - 5 : start + 1));
    setEnd((prev) => (prev >= total ? total : end + 1));
  }
};
```

This time, it works flawlessly!

![chrome_VL2qIIcChD](https://user-images.githubusercontent.com/35031228/206045208-d23b9ca2-d1a7-4ca2-93ba-0da574aeb180.gif)

**Keep the updater function in your mind. If a state is behaving strange, you may need to write it!**

## Resources

- [React docs - useState](https://beta.reactjs.org/apis/react/useState)
- [React docs - Updating Arrays in state](https://beta.reactjs.org/learn/updating-arrays-in-state)
- [React docs - Updating Objects in State](https://beta.reactjs.org/learn/updating-objects-in-state)

## Thank you!

Thank you for your time and reading this!
