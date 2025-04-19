# ReactRouter.lazy()

[Link Udemy](https://www.udemy.com/course/advanced-react/learn/lecture/40893146#overview)

## What is ReactRouter.lazy()?

`ReactRouter.lazy()` is a function that allows you to dynamically import components in a React application. It enables code splitting, which means that the application can load only the necessary code for the current view, improving performance and reducing the initial load time.

## Motivation for ReactRouter.lazy()

The motivation for using `ReactRouter.lazy()` is to optimize the loading of components in a React application. By splitting the code into smaller chunks, you can reduce the initial load time and improve the overall performance of your application. This is especially useful for large applications with many components that are not needed immediately on page load.

## Example 1 of ReactRouter.lazy()

```jsx
import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/lazy" component={LazyComponent} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
```

## Example 2 of ReactRouter.lazy()

```jsx
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/nav";
import { booksRoute } from "./components/books";
import delay from "./util/delay";
import { loader } from "./components/main-loader";

const Club = lazy(() => delay(import("./components/club"), 1000));
const Main = lazy(() => delay(import("./components/main"), 1000));

const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      { index: true, loader: loader, element: <Main /> },
      { path: "/books", ...booksRoute },
      { path: "/club", element: <Club /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


const Nav = () => {
    const {state } = useNavigation();
  return (
    <>
        <NavContainer>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/club">Club</NavLink>
            {state === "loading" && <LoadingIndicator />}
        </NavContainer>

        <Suspense fallback={<LoadingIndicator />}>
            <NavContainer>
                <Outlet />
            </NavContainer>
        </Suspense>
    </>
  );
};
```
