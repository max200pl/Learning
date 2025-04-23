# Debounce

Debouncing is a technique used in programming to limit the rate at which a function can fire. It ensures that a function is not called too frequently, which can be useful in scenarios like handling user input events, resizing windows, or making API calls.

## Motivation for Debouncing

The motivation for using debouncing is to improve performance and user experience by preventing excessive function calls. For example, when a user types in a search input, debouncing can be used to delay the API call until the user has stopped typing for a specified amount of time. This reduces the number of API calls and improves performance.

## Example function

```javascript
export const debounce = (fn, wait) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, wait);
  };
};
```

In this example, the `debounce` function takes a function `fn` and a wait time `wait` as arguments. It returns a new function that, when called, clears the previous timeout and sets a new timeout to call the original function after the specified wait time.

## Example of Debouncing in React

```javascript

import React, { useState, useEffect } from 'react';

import { debounce } from './debounce'; // Import the debounce function

const DebouncedInput = () => {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const debouncedHandleChange = useMemo(() => {
    return async debounce((newValue) => {
      await setDebouncedValue(newValue);
    }, 300); // Debounce the function with a 300ms delay
  }, []); // Only create the debounced function once

  useEffect(() => {
    debouncedHandleChange(value);
  }, [value]); // Call the debounced function when value changes

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

