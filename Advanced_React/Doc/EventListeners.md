# Event Listeners in React

## What are Event Listeners?

Event listeners are functions that are called in response to specific events that occur in the browser, such as clicks, key presses, or mouse movements. In React, event listeners are typically added to components to handle user interactions.

## Different between Bubbled and Captured Events Table

| Event Phase | Description                                                                                   |
|-------------|-----------------------------------------------------------------------------------------------|
| Bubbling     | The event starts from the target element and bubbles up to the root of the DOM tree.          |
| Capturing    | The event starts from the root of the DOM tree and captures down to the target element.       |

## Example Captured in React

```jsx

import React from 'react';

function App() {
  const handleClick = (event) => {
    console.log('Button clicked!');
  };

  return (
    <div onClickCapture={() => console.log('Div clicked!')}>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

```

In this example, the `onClickCapture` event handler is attached to the `div` element. When the button is clicked, the event will first be captured by the `div` before it reaches the button. The console will log "Div clicked!" first, followed by "Button clicked!".

## Example Bubbling in React

```jsx

import React from 'react';

function App() {
  const handleClick = (event) => {
    console.log('Button clicked!');
  };

  return (
    <div onClick={() => console.log('Div clicked!')}>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
```

In this example, the `onClick` event handler is attached to the `div` element. When the button is clicked, the event will first be handled by the button, and then it will bubble up to the `div`. The console will log "Button clicked!" first, followed by "Div clicked!".
