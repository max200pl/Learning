# Hook.useDeferredValue() in React

## What is useDeferredValue?

The `useDeferredValue` hook is a built-in React hook that allows you to defer the rendering of a value until the browser is idle. It is useful for optimizing performance in applications where you want to prioritize user interactions over rendering updates.

## Motivation for useDeferredValue

The motivation for the `useDeferredValue` hook is to improve performance in React applications by allowing you to defer updates to non-urgent values, such as those that are not immediately visible to the user. This can help reduce the amount of work the browser has to do during rendering, leading to a smoother user experience.

## Example 1 of useDeferredValue

```jsx

import React, { useState, useDeferredValue } from 'react';


function App() {
  const [inputValue, setInputValue] = useState('');
  const deferredValue = useDeferredValue(inputValue);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
       <HeavyComponent value={deferredValue} />
    </div>
  );
}

function HeavyComponent({ value }) {
  // Simulate a heavy computation
  const computedValue = computeHeavyValue(value);

  return <div>{computedValue}</div>;
}

function computeHeavyValue(value) {
  // Simulate a heavy computation
  let result = 0;
  for (let i = 0; i < 1e6; i++) {
    result += value.length;
  }
  return result;
}
```
