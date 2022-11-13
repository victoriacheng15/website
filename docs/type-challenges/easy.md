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

**Note:**

I was doing the `Tuple to Object` challenge, I found out that you can use [mapped types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html) to declare type(s) based on index, which is why I updated this note.

</details>

## Readonly

Implement the built-in `Readonly<T>` generic without using it.

Constructs a type with all properties of `T` set to readonly, meaning the properties of the constructed type cannot be reassigned.

```ts
interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello";
// Error: cannot reassign a readonly property
todo.description = "barFoo";
// Error: cannot reassign a readonly property
```

<details>
<summary>Answer:</summary>

```ts
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

**Note:**

The `keyof` operator takes an object type and produces a string or numeric literal union of its keys.

More on `keyof` operator [here](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)

Check this [mapped types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html) as well

</details>
