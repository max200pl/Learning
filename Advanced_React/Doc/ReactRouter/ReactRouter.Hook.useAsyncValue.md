# ReactRouter.Hook.useAsyncValue

[Link Udemy](https://www.udemy.com/course/advanced-react/learn/lecture/40893146#overview)

## What is useAsyncValue?

The `useAsyncValue` hook is a built-in React Router hook that allows you to manage the loading state of asynchronous data in your components. It is useful for optimizing performance in applications where you want to prioritize user interactions over rendering updates.

## Motivation for useAsyncValue

The motivation for the `useAsyncValue` hook is to improve performance in React applications by allowing you to manage the loading state of asynchronous data in your components. This can help reduce the amount of work the browser has to do during rendering, leading to a smoother user experience.

## Example 1 of useAsyncValue

```jsx
import React, { useState, useEffect } from 'react';
import { useAsyncValue } from 'react-router';


 const Books = () => {
  const { bookCountPromise, authorsPromise } = useLoaderData();

  return (
    <div>
      <MainHeading>Books</MainHeading>
      <p>
        <h1>Available Books:</h1>
        <Suspense fallback="Fetching...">
          <Await resolve={bookCountPromise}>
            {(data) => <strong>{data}</strong>}
          </Await>
        </Suspense>
      </p>
      <p>
        <h1>Authors:</h1>
        <Suspense fallback="Fetching...">
          <Await resolve={authorsPromise}>
            <Authors />
          </Await>
        </Suspense>
      </p>
    </div>
  );
};

const Authors = () => {
  const authors = useAsyncValue();
  return <strong>{authors}</strong>;
};

function loader() {
  const bookCountPromise = delay(10, 1000);
  const authorsPromise = delay("Codelicks", 2000);

  return defer({
    bookCountPromise,
    authorsPromise,
  });
}

export const booksRoute = { element: <Books />, loader };
```
