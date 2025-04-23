# Hook.useMemo() in React

## What is useMemo?

The `useMemo` hook is a built-in React hook that allows you to memoize the result of a function. It is used to optimize performance by preventing unnecessary calculations during re-renders. The `useMemo` hook takes two arguments: a function that returns a value and an array of dependencies. If the dependencies change, the function is re-evaluated; otherwise, the cached value is returned.

## Motivation for useMemo

The motivation for the `useMemo` hook is to improve performance in React applications by avoiding unnecessary calculations during re-renders. When a component re-renders, all calculations inside it are re-evaluated. This can lead to performance issues, especially when dealing with expensive calculations or large data sets. By using `useMemo`, you can cache the result of a calculation and only re-evaluate it when the dependencies change.

## Example 1 of useMemo not working

```jsx
import React, { useMemo, useState } from 'react';

const Component = ({ value }) => {
  const memoizedValue = useMemo(() => {
    console.log('Calculating...');
    return value * 2;
  }, [value]);

  return <div>{memoizedValue}</div>;
};

export  default memo(Component, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value;
});
```

In this example, the `useMemo` hook is used to memoize the result of a calculation. However, the `memo` function is used to prevent re-renders when the `value` prop does not change. This means that even if the `value` prop changes, the component will not re-render unless the `value` prop changes.

## Example 2 of useMemo working with Component

```jsx
import React, { useMemo, useState } from 'react';

const Component = ({ value }) => {
  const header = useMemo(() => {
        return <Header />;
  }, [value]);

  return (
    <div>
      {header}
      <div>{value}</div>
    </div>
  );
};
```
