# Throttling in React

Throttling is a technique used to limit the number of times a function can be called over a period of time. In React, this is particularly useful for optimizing performance in scenarios where a function is triggered frequently, such as during scrolling or resizing events.

## Motivation for Throttling

The motivation for using throttling in React is to improve performance by reducing the number of times a function is executed. This can help prevent performance issues, especially when dealing with high-frequency events like scrolling or resizing.

## Example of Throttling

```jsx

import React, { useState, useEffect } from 'react';

import { throttle } from 'lodash';

const ThrottledComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = throttle(() => {
    setScrollPosition(window.scrollY);
  }, 100); // Throttle the scroll event to every 100ms

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div>Scroll Position: {scrollPosition}</div>;
};

```

In this example, the `handleScroll` function is throttled to execute every 100 milliseconds. This means that even if the user scrolls rapidly, the function will only be called at most once every 100 milliseconds, reducing the number of state updates and improving performance.

## Example 2

```javascript
export const throttle = (fn, wait) => {
  let timerId;
  let inThrottle;
  let lastTime;
  return (...args) => {
    if (!inThrottle) {
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn(...args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};
```

In this example, the `throttle` function is a custom implementation that limits the execution of the provided function (`fn`) to once every specified `wait` milliseconds. It uses a timer to control the execution and ensures that the function is not called more frequently than the specified interval.

## Conclusion

Throttling is a powerful technique for optimizing performance in React applications. By limiting the frequency of function calls, you can reduce the number of state updates and improve the overall responsiveness of your application. Using libraries like Lodash can simplify the implementation of throttling, but you can also create your own custom throttling function as shown in the examples above.
