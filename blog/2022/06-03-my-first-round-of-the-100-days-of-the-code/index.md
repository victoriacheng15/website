---
slug: my-first-round-of-the-100-days-of-the-code
title: My First Round of the 100 Days of the Code
authors: victoria
tags: [100 days of code]
hide_table_of_contents: false
---

![my first round of the 100 days of the code](./my-first-round-of-the-100-days-of-the-code.webp)

<!--truncate-->

## The end of 100 days of code - Round 1

**Archived blogs from [here](https://victoriacheng15.hashnode.dev/my-first-round-of-the-100-days-of-code)**

My 100th day was ended on May 31st, 2022! The goal of this was learning JavaScript and maybe HTML/CSS as well, but with JavaScript as the main focus. As the title suggested, this was my first round. I was not sure If I can make it to the end. At least, I was trying to stay consistency and kept this up daily as much as I can. Later, I realized that this doesn't have to be consecutive 100 days. 😂

Why did I start this? I saw a lot of people are doing this on Twitter. I figured out why not. Furthermore, I decided to start this for learning and keep myself accountability purpose.

Anyway, let's see what I have gained from the round 1

## What Have I learned?

### JavaScript

Prior to the 100 days of code, my JavaScript skill was so-so to my standard. I decided to start codewars and tried to solve 1 problem a day, but I didn't put it in the log until day 20. 😅 Once I got comfortable with codewars and JavaScript, I decided to solve 3 to 5 problems a day. These problems allow me to go through almost all array methods, Object methods, etc. Codewars is an awesome place since it allows you to see other people's solutions once you solved the problem.

The steps I took to solve the problem:

- Think few approaches
- Write pseudocode
- Not sure how to? Google is your best friend
- Try to understand the solution you found
- write the function

Few interesting things I learned from codewars and google search:

- pass Number or Boolean or String with map() or any array methods

Let's say you want to convert all numbers to string

```js
const array = [1, 2, 3, 4, 5];

// usual way
array.map((num) => String(num));

array.map(String); // ['1', '2', '3', '4', '5']

// if you want to convert string to number
array.map(Number); // [1, 2, 3, 4, 5]
```

Or get true value from the array

```js
const array = [true, false, null, true, true];

array.filter(Boolean); // [true, true, true]
```

There are more methods that you can pass in array methods, depend on what are you trying to do. Gotta to play around with them for fun! 😉

- `[2] * 1` will convert the array to 2 or any number in the array 🤯. What if the array has more than 1 value? `[2,3] * 1` will return `NaN`.

### Others

While I was learning JavaScript, I also added a few data structures and algorithms (DSA) lessons, just because why not! 😆 It is something I do for practising my thinking process while solve problems. I have not fully understood some of DSA, so it is something that I will continue to working on. Maybe for round 2!

I also learned the difference between merging vs rebasing. I tried this with one of my repos to see how it works and what are the differences.

- Merge method: this will keep everything
- Rebase method: this will keep history one linear

### Consistency

Keep consistency is really hard and not easy to do. I almost couldn't continue. And then I thought of a way to combat this. I set minimum amount to-do for daily. Maybe 2 or 3 things that you would like to complete every day. Once you meet the minimum amount, and feel adventurous, add a few more things that need to do for the day. So the way, you would feel **"yay, I completed a couple of things"** instead of **"oh no, I didn't complete anything for the day"**.

Note: be sure that they are something small that you can complete in 30 minute to an hour time frame. Don't need to overwhelm or go hard on yourself.

### Break

As I mentioned at the beginning, I thought this needs to be consecutive 100 days. But it doesn't have to be! I didn't take any break after day 90. 😂 I could have taken some breaks in between. This is a lesson for me. Definitely to take breaks whenever you need it, otherwise your body will make you to take it.

## Recap

100 Days of Code is worth to do it. You are not only learning or improving the language you decide on. You can also learn how to do a few things.

- Manage your time better
- Figure out what pattern works well for you
- Keep consistency
- Know when to take a break
- _insert something that you learned on your 100 days of code journey!_

I kept [the so detailed or not so detailed log](https://github.com/victoriacheng15/100daysofcode/blob/main/r1-log.md) on GitHub with resources that I used to learn.

## Thank you!

Thank you for your time and reading this! Feel free to share your thoughts in the comment below, and follow me on [@viktoriacheng15](https://twitter.com/viktoriacheng15)
