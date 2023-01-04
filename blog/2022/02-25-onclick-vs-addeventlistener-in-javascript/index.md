---
slug: onclick-vs-addeventlistener-in-javascript
title: onClick vs addEventListener in JavaScript
authors: victoria
tags: [javascript]
description: "onclick and addEventListener are event handlers in JavaScript that allow you to specify actions to take when an event occurs. onclick handles a single event and is compatible with all browsers, but addEventListener can handle multiple events and has more options, but is not compatible with older versions of Internet Explorer."
image: "./onclick-vs-addeventlistener-in-js.webp"
hide_table_of_contents: false
---

![onClick vs addEventListener in JavaScript](./onclick-vs-addeventlistener-in-js.webp)

<!--truncate-->

## onclick

**Archived blogs from [here](https://victoriacheng15.hashnode.dev/onclick-vs-addeventlistener-in-javascript)**

The onclick property is an event handler for processing click events on the specific element.

The syntax looks this

```js
element.onclick = makeChange;

function makeChange() {
  // do something
}

or;

element.onclick = function makeChange() {
  // do something
};
```

## addEventListener

> The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target. -- MDN

The syntax looks like this

```js
addEventListener(type, listener);
addEventListener(type, listener, options);
addEventListener(type, listener, useCapture);
```

As you can see, the `addEventListener` takes 3 arguments

- **type**: this is the event type, such as `click`, `keydown`, `mouseover` and so on.
- **listener**: it is usually the function that you had declared, such as change background colour, text colour, and many options

```js
function makeChange() {
  // do something
}

element.addEventListener("click", makeChange);
```

- **options**:

  1. _capture_: defaults to `false`, if true, it will capture all nested elements from the top of the DOM tree to the clicked element
  2. _once_: defaults to `false`, if true, the element only can be clicked once.
  3. _passive_: defaults to `false`, if true, the specific function will never call preventDefault()
  4. _signal_: the listener will be removed when the signal is given.

- **useCapture**: this is similar to the capture from options category.

## What are the differences between `capture` and `useCapture`

```html
<body>
  <div class="one">
    <div class="two">
      <div class="three"></div>
    </div>
  </div>
</body>
```

```js
function logText() {
  console.log(this.classList.value);
}
// capture
divs.forEach((div) => {
  div.addEventListener("click", logText, { capture: true });
});
// useCapture
divs.forEach((div) => {
  div.addEventListener("click", logText, { useCapture: true });
});
```

### Result table - the order of logging after clicked

| value   | capture             | useCapture          |
| ------- | ------------------- | ------------------- |
| `true`  | one -> two -> three | three -> two -> one |
| `false` | three -> two -> one | three -> two -> one |

%[https://codepen.io/victoriacheng15/pen/eYejyjr]

# Differences between addEventListener and onclick

| type              | addEventListener              | onclick               |
| ----------------- | ----------------------------- | --------------------- |
| number of event   | many events                   | single event          |
| event propagation | can control with 3rd argument | cant control          |
| compatibility     | Doesn't work on older IE      | works on all browsers |

## browser support

You can check this [Can I Use](https://caniuse.com/) site to see what browser version support certain property.

- [onclick](https://caniuse.com/?search=onclick)

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1645650000185/YOdNQ_WiR.png)

- [addEventLister](https://caniuse.com/?search=addeventlistener)

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1645649826103/R9qluuUoj.png)

sources:

- [MDN - onclick](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)
- [MDN - addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [JavaScript Info - bubbling and capturing](https://javascript.info/bubbling-and-capturing#capturing)
- [Difference between addEventListener and onclick in JavaScript](https://www.geeksforgeeks.org/difference-between-addeventlistener-and-onclick-in-javascript/)

# Recap

Both onclick and addEventlistener are supported on almost all browsers beside `Internet Explorer version 6 - 8`. But, which one to use? It boils down to what are you trying to achieve. Does it do one thing only, you may go with onclick for a short and simple way to write. However, addEventListener is recommended to use.

# Thank you!

Thank you for reading my blog! 😊
