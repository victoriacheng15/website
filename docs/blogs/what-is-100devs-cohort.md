---
sidebar_position: 1
title: 100Devs Cohort
---

# What is 100Devs Cohort?

**Archived blogs from [here](https://victoriacheng15.hashnode.dev/100devs-cohort)**

What is 100Devs? It is a cohort hosted by Leon and you can find more information [here](https://leonnoel.com/100devs/). In short, it is a free and remote 30 weeks cohort and focuses on the MERN (MongoDB, Express, React, and Node) stack.

> I want to help you become a software engineer for free. - Leon Noel

A bit background about myself, I have taught myself HTML and CSS prior to this cohort and I am grabbing this opportunity to review some basics.

> Note: this is my first blog. I am open to any suggestions/advice/feedback you may have. :-)

The cohort is going on for a little over a month. I am trying to summarize this as short as I can.

# Week 1

The Learning how to Learn is quite interesting since it is telling you how to utilize several different techniques such as diffuse and focus modes to help you to learn and retain information in as efficient ways as possible. I also learned about active recall, spaced repetition, and [Anki](https://apps.ankiweb.net/). In short, you write down questions and answers on Anki and then you review and recall the materials you have put down every specific amount of time (usually once per day). This allows your mind to retain information easily.

More information:

- [Learning how to Learn](https://www.coursera.org/learn/learning-how-to-learn), by Barbara Oakley
- [How to study for Exams](https://www.youtube.com/watch?v=ukLnPbIffxE), by Ali Abdaal
- [Spaced Repetition](https://www.youtube.com/watch?v=Z-zNHHpXoMM), by Ali Abdaal

# Week 2

We dived into navigation, form, input types, and CSS fundamentals.

- navigation

```html
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
  </ul>
</nav>
```

- form

```html
<form action="">
  <label for="name">name</label>
  <input type="text" name="name" value="John Doe" />
  <label for="email">email</label>
  <input type="email" name="email" value="example@email.com" />
</form>
```

- input types

There are several types of input. The most common ones are text, password, telephone, email, and buttons. [MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types) has an awesome resource on this. Also, MDN Docs will be your best friend!

- CSS fundamentals

What is CSS and how do you write it? CSS stands for Cascading Style Sheets and it allows you to create great and awesome looking for your website.

```css
h1 {
  color: red;
  font-size: 5em;
}
```

_h1 is the selector aka the HTML element that you are going to style._

_color is the property that will change the text color._

_red is the value._

- CSS Specificity

What is specificity? There are 3 types of selector, Type, Class, and ID.

- Type selector holds the value of **0-0-1**
- Class selector holds the value of **0-1-0**
- ID selector holds the value of **1-0-0**
- _!important_ will override all of above

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1644166544526/89ha8ahry.png)

# Week 3

We dived deeper into the Box model and FLOAT!

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1644166902966/Ev3TYFNdpL.png)

In short, it is basically the size of the content box with padding (green), border (yellow), and margin(brown).

Recreated this layout with float only!

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1644167035914/aspFkPdGN.png)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 90%;
  margin: 0 auto;
}

header,
section,
footer {
  border: 3px solid orange;
  background: lightgray;
  height: 100px;
}

section {
  float: left;
  height: 200px;
  width: 33.3333%;
}

.wider {
  width: 50%;
}

footer {
  clear: both;
}
```

# Week 4 and Week 5

The classes from both weeks are heavily focused on responsive CSS. It uses a media query to build a responsive layout that is suitable for mobile, tablet, and desktop screen sizes. We also covered the networking part but it will be on its own blog since the topic is very important and difficult to cover in one short and sweet summary.

```css
@media screen (min-width: 768px) {
  /* do something */
}
```

# Recap

We are deep diving into topics in order to build a good foundation and understanding of HTML and CSS. I am really looking forward to future classes!
