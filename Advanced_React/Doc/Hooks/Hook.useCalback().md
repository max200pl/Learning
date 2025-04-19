# Hook .useCallback() in React

## What is useCallback?

The `useCallback` hook is a built-in React hook that returns a memoized version of a callback function. It is used to optimize performance by preventing unnecessary re-creations of functions during re-renders.

## Motivation for useCallback

The motivation for the `useCallback` hook is to improve performance in React applications by avoiding unnecessary re-renders of components that depend on callback functions. When a component re-renders, all functions defined inside it are recreated. This can lead to performance issues, especially when passing these functions as props to child components or using them in dependencies of other hooks.

## Motivation for useCallback as Ref

The motivation for using `useCallback` as a ref is to ensure that the same function reference is used across re-renders, preventing unnecessary updates to child components that depend on that function.

### Example 1 of useCallback as Ref

#### Problem

If need set a current focus on a improve but input not mounted yet, the ref will be null?

```jsx
import React, { useCallback, useRef } from 'react';


function App() {
  const [showInput, setShowInput] = React.useState(false);
    const realInputRef = useRef();

  const inputRef = useCallback((input) => {
    realInputRef.current = input; // Store the input reference in a mutable ref object
    if(input === null) return // If the input is unmounted, do nothing
    input.focus() // Focus the input when it is mounted
  }, []);

  return (
    <div>
        <button onClick={() => setShowInput((prev) => !prev)}>Toggle Input</button>
        {showInput && (
          <input
            ref={inputRef}
            type="text"
            ref={inputRef}
          />
        )}
    </div>
  );
}

```
