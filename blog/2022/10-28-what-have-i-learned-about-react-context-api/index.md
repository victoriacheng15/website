---
slug: what-have-i-learned-about-react-context-api
title: What have I learned about React Context API?
authors: victoria
tags: [react, learning]
hide_table_of_contents: false
---

![react context api](./react-context.webp)

<!--truncate-->

## Context API

I have a project "REST Countries API with color theme switcher" from Frontend Mentor that I was not working on it for a while. Originally, I didn't use `Context API` and in fact, I was planning to finish this without the API. Until I watched this video [React JavaScript Framework for Beginners – Project-Based Course](https://www.youtube.com/watch?v=u6gSSpfsoOQ&t=6808s) from FreeCodeCamp. I figured I should try to implement the API in the project.

Also, check out the [live site](https://fem-rest-countries-api-vc.vercel.app/) for what it does before moving on.

## Let's start on the topic:

It is better to see the codebase in action and why the API is awesome! Without the API, props will have to pass down from component to components. There can be more layers of components. I often had to go and back forth between files while working on this project. I think this could be really difficult to debug the app when you have to figure where the props originally came from. Let's think about this, if the app is large with thousands of component and passing props down through the tree root alike structure.....? I think you get the idea.

Let's start on what the file looks like before.

### Before `useContext`

```js
function Main() {
  // this is from the useFetchCountries.jsx where I set up for data, loading and list
  const { countries, loading, list, setList } = useFetchCountries();
  // this is for the search bar where the users will type to search
  const [searchTerm, setSearchTerm] = useState("");
  // this is for select region, like America, Asia, etc
  const [selectRegion, setSelectRegion] = useState("");
  // this is for the pagintation that will display 12 countries each page
  const [countriesPerPage] = useState(12);
  // this is to show the current page, e.g. page 1, page 2..etc
  const [currentPage, setCurrentPage] = useState(1);

  // a function to filter countries based on the search value
  const handleSearch = (searchValue) => {
    const value = searchValue.toLowerCase();
    setSearchTerm(value);
    const searchFiltered = countries.filter(({ name }) => {
      const countryName = name.official.toLowerCase();
      return countryName.includes(value);
    });
    setList(searchFiltered);
  };

  // a function to filter countries based on its region
  const handleSelect = (selectValue) => {
    setSelectRegion(selectValue);
    const selectFiltered = countries.filter(({ region }) =>
      region.includes(selectValue)
    );

    setList(selectFiltered);
  };

  // set up 12 countries display on each page
  // and they go into pagination component
  const idxOfLastCountries = currentPage * countriesPerPage; // 1 * 12 = 12
  const idxOfFirstCountries = idxOfLastCountries - countriesPerPage; // 12 - 12 = 1
  const currentCountries = list.slice(idxOfFirstCountries, idxOfLastCountries);

  return (
    <main className="">
      <div className="">
        <Form
          searchValue={searchTerm}
          onChangeSearch={(e) => handleSearch(e.target.value)}
          optionValue={selectRegion}
          onChangeSelect={(e) => handleSelect(e.target.value)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Countries countries={currentCountries} loading={loading} />
            }
          />
        </Routes>
        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={list.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </main>
  );
}
```

This is the whole code for the `Main` component. It does look messy. We also need to pass down props to `Form`, `Countries` and `Pagination` components. How can I organize the code better? This is where the API comes in.

_A picture worth a thousand words!_

```mermaid
flowchart TB

main(Main) ==> | searchTerm, handleSeatch, SelectRegion, and handleSelect| form(Form)
form(Form) ==> | searchTerm and handleSearch | search(Search)
form(Form) ==> | selectRegion and handleSelect | dropdown(Dropdown)
```
<!-- 
![react-props-passing-down](https://user-images.githubusercontent.com/35031228/197290382-fec0a809-44bf-49d6-a0bc-609b301c05da.png) -->

As the illustration and code show, `searchTerm`, `selectRegion`, `handleSearch`, and `handleSelect` were defined in the `Main` component. For the `Search` and `Select` to work, they will have to get props from `Main`.

Now, let's imagine this. If there are more components below `Search` or `Select`? You would pass props down more levels. If you find yourself pass down props from component to component and to more components down. This is `prop drilling`.

```mermaid
flowchart TB

main(Main) ==> form(Form)
form(Form) ==> search(Search)
search(Search) ==> more(More??)
search(Search) ==> more2(More??)
form(Form) ==> dropdown(Dropdown)
dropdown(Dropdown) ==> more3(More??)
dropdown(Dropdown) ==> more4(More??)
```

Is `prop drilling` a bad thing? Probably! As the app grows and more components added, there will be more layers of component to pass down. It may get to the point where you need to take the time to find where props originally came from. Also, if there are bugs somewhere in between components, you may need to investigate them to find the root cause. This also requires time.

Now, let's see what it looks like after used the API!

### After `useContext`

```js
function Countries() {
  const { loading } = useContext(CountriesContext);
  const { currentCountries } = useContext(PaginationContext);

  if (loading) return <Spinner />;

  return (
    <>
      <Form />
      <section className="">
        // this is a grid that display country cards which is the homepage
      </section>
      <Pagination />
    </>
  );
}
```

> Note: the `Main` component become a homepage that will display country cards, detailed country informaiton page, and 404 error page. `Countries` componenet is under `page` folder.

As you can see, there are no more functions or `useState` hooks from the `before` code block. They are all moved to `CountriesContext.jsx`.

First, `createContext` need to be imported.

```js
// define the context that you will need to call it with `useContext` hook
const CountriesContext = createContext();

export function CountriesProvider({ children }) {
  // from useFetchCountries.jsx under hook folder
  const { countries, loading, list, setList } = useFetchCountries();
  // these lovely useState hooks for search and select
  const [searchTerm, setSearchTerm] = useState("");
  const [selectRegion, setSelectRegion] = useState("");

  const handleSearch = (searchValue) => {
    // the code is deinfed above
  };

  const handleSelect = (selectValue) => {
    // the code is deinfed above
  };

  return (
    // remember the line of code that was created with `createContext`?
    // you put all functions and useState hooks that will be used by other components
    <CountriesContext.Provider
      value={{
        loading,
        list,
        searchTerm,
        selectRegion,
        handleSearch,
        handleSelect,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

export default CountriesContext;
```

Let's see the code from before and after with `Form` component. Notice the `after` code doesn't take any props like the `before` code? This is the advantage of `Context API`.

_Before_

```js
<Form
  searchValue={searchTerm}
  onChangeSearch={(e) => handleSearch(e.target.value)}
  optionValue={selectRegion}
  onChangeSelect={(e) => handleSelect(e.target.value)}
/>
```

_After_

```js
// wow no props to pass down!!!
<Form />
```

First, go to the `SearchBar` component that need one or more values from the `CountriesContext.jsx`.

```js
function SearchBar() {
  // remember the `CountriesContext` that was created in the context file?
  // you only call the value that you need for this component
  // searchTerm, handleSearch in this case and then pass them to value and onChange below
  const { searchTerm, handleSearch } = useContext(CountriesContext);

  return (
    <div className="">
      <IoSearchSharp className="" />
      <input
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className=""
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}
```

Yay, no more props pass down!

_Summary_
Imagine the context file as a main warehouse that holds everything. If a store needs a specific thing, and they will call the warehouse and let them know the store needs `thing A` or more things. And the warehouse will deliver these things that they need. In short, the `SearchBar` component needs `searchTerm` and `handleSearch` to do its job, so they call the `CountriesContext.jsx` for the 2 values that it requires.

#### Links

Feel free to look around and see the differences between both versions with or without `useContext`

- [Code before useContext](https://github.com/victoriacheng15/fem-rest-countries-api/blob/c59f8d73045adb4409d4dce531dfaa2c67c7ae96/src/componments/main/Main.jsx)

- [Code after useContext](https://github.com/victoriacheng15/fem-rest-countries-api/blob/main/src/componments/Main/index.jsx)

- Overall code
  - [fem-rest-countries-api](https://github.com/victoriacheng15/fem-rest-countries-api)

## Recap

The `Context API` allows you to define functions and hooks in the context file. You can organize functions and hooks based on its purpose. e.g `CountriesContext` for fetch country data, search and select functions or `PaginationContext` for all pagination related.

Advantages:

- all functions and hooks are in one file
- keep component files clean
- components can take props from the Context API instead of passing down props

## Resources

- [React Docs - useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
  - read this before and was somewhat understand the idea of useContext
- [React JavaScript Framework for Beginners – Project-Based Course](https://www.youtube.com/watch?v=u6gSSpfsoOQ&t=6808s)
  - This is where I actually understand about `Context API`, highly recommend following along and try to implement it in your project(s)!
- [Prop Drilling by Kent C. Dodds](https://kentcdodds.com/blog/prop-drilling)

## Thank you!

Thank you for your time and reading this!
