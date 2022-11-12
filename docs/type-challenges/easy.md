---
sidebar_position: 3
title: Easy
---

This contains a list of easy challenges.

## Pick

Implement the built-in `Pick<T, K>` generic without using it.

Constructs a type by picking the set of properties `K` from `T`.

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

<details>
<summary>Answer:</summary>

```ts
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

This is a bit confused. Think about how would you clone object with `for in` loop

```js
for (const key in user) {
  clone[key] = user[key];
}
```

[Reference](https://javascript.info/object-copy#cloning-and-merging-object-assign)

Now, look at how interface is constructed?
`title` is a key while `string` is value, which is `[P in K]: T[P]`

</details>