---
slug: react-hooks-usereducer
title: React Hooks - useReducer
authors: victoria
tags: [react, react hooks]
description: "Learn how to use the useReducer hook in React to manage complex state changes and fetch data from an API. useReducer is a powerful tool similar to useState, but more flexible and able to handle multiple sub-values. The useReducer hook takes 2 arguments: a reducer function and an initial state. It returns an array with 2 values: the current state and a dispatch function, which is used to trigger an action and update the state."
image: "./react-hooks-usereducer.webp"
hide_table_of_contents: false
---

![react hooks useReducer](./react-hooks-usereducer.webp)

Learning useReducer: A Step-by-Step Guide

<!--truncate-->

## What is useReducer Hook?

It is a hook that allows you to manage states in your components. It is similar to `useState` but more powerful and flexible since you can manage complex state changes that may involve multiple sub-values.

The `useReducer` takes 2 arguments: a reducer function and an initial state.

- The **reducer function** takes the `current state` and an `action` and then returns the `new state` based on the action type.
- The **useReducer hook** returns an array with 2 values, the `current state` and `a dispatch function`. The dispatch function is used to trigger an action and update the state.

```js
import { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("unknown action");
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
```

In the example, the useReducer hook is used to manage the state of a counter component.

The state is `initialState` that holds the count and the value is 0. The dispatch function contains 2 actions, `increment` and `decrement`. The count value depends on the dispatch action type.

I think the easier way to think is

- if this is `increment` (type), and the state (result) will be added 1 to the count
- if this is `decrement` (type). and the state (result) will be subtracted 1 to the count

Highly recommended check out [switch from MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) to get familiar with the statement!

## Fetch Data from API

Let's see how do you fetch data with `useState` and `useReducer`

### useState

```js
import { useState, useEffect } from "react";

const useFetchApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://jsonplaceholder.typicode.com/todos";
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchApi;
```

### What is a spread operator?

Before we move on to the next section, when you update the state in React, it is recommended to copy the object before modify with the spread operator and keep the original state original!

![chrome_o1W1YRUjtO](https://user-images.githubusercontent.com/35031228/208515994-4a4d6960-326a-462b-8139-7f0a1816161f.gif)

- `...state` copy everything from `state` to `updatedState`
- `count: 5` will update the count to `5` from `0`
- `greet:  "hello"` will update the greet to `"Hi"` from `"hello"`

### useReducer

```js
import { useEffect, useReducer } from "react";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const FETCH_SUCCESS = "fetch_success";
const FETCH_ERROR = "fetch_error";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const useFetchApi = () => {
  const [{ data, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  // you could write like this
  // const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://jsonplaceholder.typicode.com/todos";
      try {
        const res = await fetch(url);
        const data = await res.json();
        // if you write state, this needs to be state.data
        dispatch({ type: FETCH_SUCCESS, payload: data });
      } catch (error) {
        // same as above, need to be state.error
        dispatch({ type: FETCH_ERROR, payload: error });
      }
    };

    fetchData();
  }, []);

  // return state
  return { data, loading, error };
};

export default useFetchApi;
```

- If `fetch success (type)`, you shall get `payload: data and loading: false` as a result
- If `fetch error (type)`, you shall get `payload: error and loading: false` as a result

Lastly, go to the component file and call the `useFetchApi()`.

```js
import useFetchApi from "./hooks/useFetchApi";

function App() {
  //I prefer destructuring,
  // so I don't have to write "state." over and over! :D
	const { data, loading, error } = useFetchApi();

	if(loading) return <h2>Loading...</h2>
	if(error) return <h2>Whoops, Something has gone wrong...!</h2>

	return (
    // render the page with lovely data!
	);
}

export default App;
```

Overall, the useReducer hook is a great tool for managing the state of a React application. By using this hook, you can easily update and access to state of the application with minimal code.

I also searched for reasons why use `useReducer` instead of `useState` for curiosity. I found this article _3 Reasons to useReducer() over useState()_ and one of the reasons is _next state depends on the previous_. This makes sense.

The `initialState` is an object, so if you update one of the properties, the property value will change. Next time, you update one of the properties, it will always be based on the previous value.

Remember the `updater` function from [React Hooks - useState](https://victoriacheng15.vercel.app/blog/react-hooks-usestate#something-strange-maybe) blog? If the state depends on the previous value, you would need to write `setCount(prevCount => prevCount + 1)` for example, otherwise, the state value may behave strangely.

In the end, both `useReducer` and `useState` hooks have their pros and cons. Choose the ones that work well or the best for the app!

## Resources

- [React Docs - useReducer](https://beta.reactjs.org/apis/react/useReducer#usereducer)
- [MDN docs - switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [MDN docs - spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [3 Reasons to useReducer() over useState()](<https://dev.to/spukas/3-reasons-to-usereducer-over-usestate-43ad#:%7E:text=useReducer()%20is%20an%20alternative,understand%20for%20you%20and%20colleagues>)

## Thank you!

Thank you for your time and for reading this!
