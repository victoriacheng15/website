---
sidebar_position: 10
title: Tailwind CSS - Beginner Edition
---

## What is Tailwind CSS?

**Archived blogs from [here](https://victoriacheng15.hashnode.dev/tailwind-css-beginner-edition)**

It is an awesome CSS framework that allows you styling your website or apps quickly without switching HTML (or JSX for react) and CSS files back and forth. You write Tailwind CSS like how you would write "inline" style for CSS, but you write the class names like below.

```html
<h1 class="text-3xl font-bold underline">Hello from Tailwind CSS</h1>
```

> A utility-first CSS Framework packed with classes like flex, pt-4, text center and rotate-90 that can be composed to build any design, directly in your markup.

I personally love Tailwind CSS for a couple of reasons. First, I don't have to spend time to think what class name this specific element should be. This speeds up the development cycle! Second, I am able to stay on HTML file instead of back and forth between HTML and CSS files. Tailwind CSS is also very customizable. You decide all the properties and values by yourself.

Note: I have not learned other frameworks like Bootstrap, Bulma, etc. So I can't really say which one is the best framework. However, there are ALWAYS pros and cons for each framework.

## Prerequisites for learning Tailwind CSS

- Basic HTML
- Basic CSS
- Screen media queries

There are few ways to get start:

- Install with npm package (required nodejs), refer to [The get started with Tailwind CSS guide](https://tailwindcss.com/docs/installation)
- Use CDN
- [Tailwind CSS playground](https://play.tailwindcss.com/)
- Codepen
  - Click the gear icon
  - Go to "Add external stylesheets/pens"
  - Add Tailwind CSS in the search bar

Anyway, let's see the differences between them!

# Vanilla CSS vs Tailwind CSS

In general, CSS has a selector like `section`, `.class`, `#id`, etc, declaration block, property and value.

Vanilla CSS

```css
section {
  width: 90%;
  background: lightgreen;
}
```

Tailwind CSS

```html
<section class="w-11/12 bg-green-500">
  write something awesome here for your website
</section>
```

## Width

Width has a size system, and they are range from 0 to 96.

- w-1 => 4px or 0.25 rem
- w-2 => 8px or 0.5rem
- w-3 => 12px or 0.75rem
- w-4 => 16px or 1rem
- so on...

Notice that the measurement is increasing by 0.25rem every time the size goes up by 1. It is somewhat easy to remember, but as the size goes up bigger, the step is increased by 2 instead of 1. This cane tough to remember, but don't worry!

Let's say, the element width is `80px`, you can do this way, `80px * 0.25` and you get `20`, which is `w-20`

Let's see another example, if the element width is `256px`, `256 * 0.25`, and you get `64`, which is `w-64`

Hope this helps you with the number system.

There is also a fraction system. This system is pretty simple. If you need the 25% width, the fraction is `1/4`, which is `w-1/4`. If you need 75% width, the fraction is `3/4`, which is `w-3/4`

The CSS way:

```css
.this-is-the-css-way {
  width: 75%;
}

.this-is-the-css-way-2 {
  width: 90%;
}

.this-is-the-css-way-3 {
  width: 100vw;
}

.this-is-the-css-way-4 {
  width: min-content;
}
```

The Tailwind way:

```html
<section class="w-3/4">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, nostrum.
</section>

<section class="w-11/12">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, nostrum.
</section>

<section class="w-screen">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, nostrum.
</section>

<section class="w-min">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, nostrum.
</section>
```

This number system is also applying to padding and margin.

`p-4` is 1rem on all 4 sides. If you want a specific side, it will be `p{t|r|b|l}-{size}`. If you want top and bottom/left and right, it will be `p{x|y}-{size}`. Replace p with m for margin

## Background

The background system contains numbers range from 50 to 900 (light to dark). Tailwind CSS offers a colour system for you to pick, red, green, blue, orange, yellow, etc. This allows you to spend less time on deciding which colour you want for the site. 😃

The CSS way:

```css
.this-is-the-css-way {
  /* use either rgba() or hsla() or your prefer style */
  background: red;
}

.this-is-the-css-way-2 {
  background: linear-gradient(to left, blue, lightblue);
}
```

The Tailwind way:

```html
<section class="bg-blue-500">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, nostrum.
</section>

<section class="bg-gradient-to-l from-blue-600 to-blue-300">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, nostrum.
</section>
```

Prefer different colour? You only need to replace `blue` with a colour you like from the system.

## Font

For the font, the class name usually start with `text-{something}`, however, there are some that doesn't start with `text`.

The CSS way:

```css
h1 {
  font-size: 3rem;
  font-weight: 700;
  color: orange;
  text-align: center;
  text-transform: uppercase;
}
```

The Tailwind way:

```html
<h1 class="text-xl font-bold text-orange-600 text-center uppercase">
  Hey, Tailwind CSS is awesome
</h1>
```

## Flex/grid

The box alignment for this is a bit tricky. Hope the table below shows you the differences between both of them.

|        Vanilla CSS         |      Tailwind CSS      |
| :------------------------: | :--------------------: |
| `justify-content: center;` |    `justify-center`    |
|  `justify-items: center;`  | `justify-items-center` |
|  `justify-self: center;`   | `justify-self-center`  |
|  `align-content: center;`  |    `content-center`    |
|   `align-items: center;`   |     `items-center`     |
|   `align-self: center;`    |     `self-center`      |
|  `place-content: center;`  | `place-content-center` |
|   `place-items: center;`   |  `place-items-center`  |
|   `place-self: center;`    |  `place-self-center`   |

If you need different alignment, you just replace `center` with `flex-end` or `stretch` or whichever value you need for the page.

The CSS way:

```css
section {
  display: flex;
  justify-content: center;
  align-items: center;
}

section {
  display: grid;
  grid-template-columns: repeat(2, min(0, 1fr));
}
```

The Tailwind way:

```html
<section class="flex justify-center items-center">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, nostrum.
</section>

<section class="grid grid-cols-2">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, nostrum.
</section>
```

## Media queries

I love this, and it makes it so simple to implement media queries for your websites. Tailwind CSS offers default breakpoints

| breakpoint | width  |
| :--------: | :----: |
|     sm     | 640px  |
|     md     | 768px  |
|     lg     | 1024px |
|     xl     | 1280px |
|    2xl     | 1536px |

The CSS way:

```css
h1 {
  font-size: 3rem;
  font-weight: 700;
  color: orange;
}

@media only screen and (max-width: 640px) {
  h1 {
    color: orange;
  }
}
```

The Tailwind way:

```html
<h1 class="text-xl font-bold text-orange-600 sm:text-blue-600">
  Hey, Tailwind CSS is awesome
</h1>
```

# Systems

Tailwind CSS uses certain systems for several properties in general.

- The 0 to 96 system

This tends to use for width, height, gap, padding, and margin.

- The 50 to 900 system

This tends to use for colour like background, box-shadow, and font colour

- The 0 to 100 system

This is based on the percentage and tends to use for opacity.

## Extras

One downside is that you may not able to build pixel perfect layout, however Tailwind CSS offers using [arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values). This allows you to use "one" off size or colour for the element by wrapping the value with [ ].

Examples:

```html
<div class="top-[117px]">
  <!-- ... -->
</div>

<div class="bg-[#bada55] text-[22px] before:content-['Festivus']">
  <!-- ... -->
</div>
```

Another downside, it makes HTML more bloated with all class names. You probably fee like "wow, so many class names". But don't worry, Tailwind CSS allows you to [use CSS and @layer](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer) to wrapping class names into a group based on your projects needed.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn {
    @apply all the class names you need for this element;
  }

  .card {
    @apply all the class names you need for this element;
  }
}
```

# Resources

As always, if not sure how to write certain properties, you can always look up on the Tailwind CSS docs.

[Tailwind CSS official site](https://tailwindcss.com/)

[Cheat sheet](https://nerdcave.com/tailwind-cheat-sheet)

# Thank you!

Thank you for your time and reading. I hope this helps you. Please feel free to let me know if you have any questions or feedback. 😀
