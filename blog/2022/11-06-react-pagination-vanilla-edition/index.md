---
slug: react-pagination-vanilla-edition
title: React Pagination - Vanilla Edition
authors: victoria
tags: [react, pagination, learning]
description: "Learn how to create pagination in React without any external packages, including how to display 5 pages and buttons for forward or backward navigation, highlight the current page and keep it at the left side, and navigate through pages while keeping the current page in the middle. Live demo and code available."
image: "./react-pagination-vanilla-edition.webp"
hide_table_of_contents: false
---

![react pagination vanilla edition](./react-pagination-vanilla-edition.webp)

How to create pagination in React without using react-pagination or similar packages? 🤔

<!--truncate-->

## Intro

I was working on this REST countries API project. The total number of countries is 252. If I were to display all country cards at once, it should not take long to load. However, this is not ideal since the real-world apps will not have 252 data to display.

For example, Amazon has thousands of products to show online. If you were to display all of them at once. How long the loading will be? If it takes forever to loading, users would leave right away.

I decided to implement pagination. But I had no idea how to do it. I went to the best friend Google to search and find a way to create pagination without using package like react-pagination. To my surprised, I found a YouTube that shows you how to create pagination without react-pagination or similar packages, I put the link in the resources section.

## First Step

At first, I created pagination with JavaScript first to see how the functions implement. But why JavaScript? To be honest, I am not sure why I did this first. Suppose I was curious to see how it works with JavaScript. Also, React works almost the same way as JavaScript, minus the hooks part.

![chrome_uNOfaxZ70T](https://user-images.githubusercontent.com/35031228/179285865-d17c5340-1316-4301-9943-8b3d5a42af22.gif)

You can [see Live Site](https://victoriacheng15.github.io/pagination-changing-demo/) and [code here](https://github.com/victoriacheng15/pagination-changing-demo/blob/main/script.js) if you are curious to see how I wrote with JavaScript.

The goals are:

- Display 5 pages and buttons for forward or backward navigation
- currentPage should be highlighted and stay at left side
- Highlighted page should be:
  - stay at the middle once reach to the middle
  - stay at the middle as the page is navigating forward or backward
- Until the last page, highlight page will move to the right side

## Let's see how it is created with React

### Set up variables

```js
// the list contains all countries and this will tell us length
const { list } = useContext(CountriesContext);

// One page will display 12 countries
const [countriesPerPage] = useState(12);
// This is to tell us which page we are on
const [currentPage, setCurrentPage] = useState(1);
// Set up start and end page index
const [startPage, setStartPage] = useState(0);
const [endPage, setEndPage] = useState(5);

// This is to find last index of countries => 1 * 12 = 12
const idxOfLastCountries = currentPage * countriesPerPage;
// First index of the countries => 12 - 12 = 0
const idxOfFirstCountries = idxOfLastCountries - countriesPerPage;
// with known first and last index of countries,
// we can use slice() method
// this will display the first 12 countries from the list
const currentCountries = list.slice(idxOfFirstCountries, idxOfLastCountries);

// We need to know how many pages are there,
// list.length / 12 = 21
const totalPages = Math.ceil(list.length / countriesPerPage); // 21
// Create an arrays to hold 1 to 21 numbers
const pageNumbers = [...new Array(totalPages + 1).keys()].slice(1);
// We want to display first 5 pages, pageNumbers.slice(0, 5)
// This gives us [1, 2, 3, 4, 5]
const displayPages = pageNumbers.slice(startPage, endPage);
```

### Next button

```js
const handleNext = (page) => {
  // get displayPages length
  const FIVE = displayPages.length;
  // In order to make sure the page stays at the middle
  const condition = page <= Math.floor(FIVE / 2);
  if (condition) {
    // for the first 5 pages,
    // We will increase page by 1 when click next is happening
    setCurrentPage(page + 1);
    // we want it to stay at 0 and 5 for start index and end index
    setStartPage(0);
    setEndPage(5);
  } else {
    // This is to check where the page is now
    // If the page is greater than totalPage,
    // true => return totalPages which is 21, prevent page goes over
    // false => return page + 1
    // Same idea apply for startPage and endPage
    setCurrentPage(page >= totalPages ? totalPages : page + 1);
    // totalPage - 2 is to make sure the last 5 pages doesn't cut off and
    // keep display 5 pages
    setStartPage(page >= totalPages - 2 ? totalPages - 5 : startPage + 1);
    setEndPage(page >= totalPages ? totalPages : endPage + 1);
  }
};
```

The `page` parameter will take `currentPage` as the argument.

From the Pagination component:

```js
<Button typeBtn="paginationBtn" onClick={() => handleNext(currentPage)}>
  <RiArrowDropLeftLine />
</Button>
```

### Prev button

Once you figure out how the logic works for the forward navigation, backward navigation work similar way as the forward, but of course, go backward.

```js
const handlePrev = (page) => {
  // This condition is to make sure highlight
  // page will stay at the middle if navigate backward
  const condition = page > totalPages - 2;
  if (condition) {
    setCurrentPage(page - 1);
    // similar as above,
    // make sure both start and end pages start at their pages
    // page 17 for start
    // page 21 for end
    setStartPage(condition ? totalPages - 5 : startPage - 1);
    setEndPage(condition ? totalPages : endPage - 1);
  } else {
    // as usual, need to make sure it doesn't go below 1
    setCurrentPage(page <= 1 ? 1 : page - 1);
    setStartPage(startPage <= 0 ? 0 : startPage - 1);
    setEndPage(endPage <= 5 ? 5 : endPage - 1);
  }
};
```

### Demo in action

This is from the REST countries API project. As you can see, once the page reach to 3, and it will stay at the middle until the last page. It works the same way for backward navigation.

![chrome_EGlLnyLQtH](https://user-images.githubusercontent.com/35031228/200416148-7992f61a-930f-4631-bb93-8d4d9fe9f215.gif)

You also can play around with it at [the live site](https://fem-rest-countries-api-vc.vercel.app/) and see [code here](https://github.com/victoriacheng15/fem-rest-countries-api/blob/main/src/context/PaginationContext.jsx)

## Recap

Creating pagination with JavaScript and React is pretty fun. I did this without using packages for, um....an adventurous reason. I went through many trial and error to figure out how to write. I also needed to make sure pages doesn't go over and below the page 1 and the total pages. As well as, make sure the highlighted page stay at the middle during forward or backward navigation.

Of course, I was frustrated on why it didn't work sometimes and tried different ways to write logics. I went on a break and tried it with `totalPage - 2` for `setStartPage` and it worked magically. 😆

> Pro tip: as always, if frustrated, go take a break and then come back later. You would somehow fix/solve it.

## Resources

- [React JS Pagination With API | React pagination](https://www.youtube.com/watch?v=FHBXhBtA1Dg)

## Thank you!

Thank you for your time and reading this!
