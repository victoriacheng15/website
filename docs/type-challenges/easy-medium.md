---
sidebar_position: 2
title: Easy to Medium
---

This page contains a list of easy to medium Type Challenges.

## Easy

### Pick

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

### Readonly

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

### Tuple to Object

Give an array, transform into an object type and the key/value must in the given array.

For example:

```ts
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type result = TupleToObject<typeof tuple>;
// expected
// { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```

<details>
<summary>Answer:</summary>

```ts
type TupleToObject<T extends readonly (string | number)[]> = {
  [K in T[number]]: K;
};
```

**Note:**

[TupleToObject Walkthrough](https://nickangeli.com/posts/typescript-type-challenge-tupletoobject-walkthrough/)

[Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html) - for how to map through object with its type

</details>

### First of Array

Implement a generic `First<T>` that takes an Array `T` and returns its first element's type.

For example:

```js
type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
```

<details>
<summary>Answer:</summary>

```ts
type First<T extends any[]> = T extends [] ? never : T[0];
```

**Note:**

First try with `T[0]` and this got all beside the `First<[]>`

Can use [indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)

</details>

### Length of Tuple

For given a tuple, you need to create a generic `Length`, pick the length of the tuple

For example:

```ts
type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5
```

<details>
<summary>Answer:</summary>

```ts
type Length<T extends readonly any[]> = T["length"];
```

**Note:**

`T["Length"]` will give the length of the array

</details>

### Exclude

Implement the built-in `Exclude<T, U>`

For example:

```ts
type Result = MyExclude<"a" | "b" | "c", "a">;
// 'b' | 'c'
```

<details>
<summary>Answer:</summary>

```ts
type MyExclude<T, U> = T extends U ? never : T;
```

**Note:**

[Exclude<UnionType, ExcludedMembers>](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers)

[Exclude Walkthrough](https://nickangeli.com/posts/typescript-type-challenge-exclude-walkthrough/)

</details>

### Await

If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?

For example: if we have `Promise<ExampleType>` how to get ExampleType?

For example:

```js
type ExampleType = Promise<string>;

type Result = MyAwaited<ExampleType>; // string
```

<details>
<summary>Answer:</summary>

```ts
type MyAwaited<T> = T extends Promise<infer val>
  ? MyAwaited<val>
  : T extends { then: (onfulfilled: (arg: infer args) => any) => any }
  ? args
  : T;
```

**Note:**

[Inferring Within Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)

</details>

### If

Implement the util type `If<C, T, F>` which accepts condition `C`, a truthy value `T`, and a falsy value `F`. `C` is expected to be either `true` or `false` while `T` and `F` can be any type.

For example:

```ts
type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
```

<details>
<summary>Answer:</summary>

```ts
type If<C, T, F> = C extends true ? T : C extends false ? F : error;
```

**Note:**

[Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)

</details>

### Concat

Implement the JavaScript `Array.concat` function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order

For example:

```ts
type Result = Concat<[1], [2]>; // expected to be [1, 2]
```

<details>
<summary>Answer:</summary>

```ts
type specificTypes = string | boolean | number;
type Concat<T extends specificTypes[], U extends specificTypes[]> = [
  ...T,
  ...U
];
```

</details>

### Includes

Implement the JavaScript `Array.includes` function in the type system. A type takes the two arguments. The output should be a boolean `true` or `false`.

For example:

```ts
type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">;
// expected to be `false`
```

<details>
<summary>Answer:</summary>

```ts
type Includes<T extends readonly unknown[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;
```

**Note:**

[Includes Walkthrough](https://nickangeli.com/posts/typescript-type-challenge-includes-walkthrough/)

</details>

### Push

Implement the generic version of `Array.push`

For example:

```ts
type Result = Push<[1, 2], "3">; // [1, 2, '3']
```

<details>
<summary>Answer:</summary>

```ts
type Push<T extends unknown[], U> = [...T, U];
```

</details>

## Medium
