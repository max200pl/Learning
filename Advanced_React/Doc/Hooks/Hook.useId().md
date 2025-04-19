# Hook useId in React

## What is useId?

The `useId` hook is a built-in React hook that generates unique IDs for components. It is particularly useful for accessibility purposes, such as associating labels with form elements or ensuring that IDs are unique across the application.

## Motivation for useId

The motivation for the `useId` hook is to provide a simple and efficient way to generate unique IDs for components without the need for external libraries or complex logic.

## Example 1 Two input elements with the same ID

```jsx
import React, { useId } from 'react';


function Form () {
  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}-name`}>Name:</label>
      <input type="text" id={`${id}-name`} />
      <label htmlFor={`${id}-email`}>Email:</label>
      <input type="email" id={`${id}-email`} />
    </div>
  );
}

function App() {

  return (
    <div>
        <Form  />
        <Form   />
    </div>
  );
}
```

## Example 2 of useId

This helps improve accessibility and ensures that IDs are consistent across server-side rendering and client-side rendering.

```jsx
import React, { useId } from 'react';


function App() {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Name:</label>
      <input type="text" id={id} />
    </div>
  );
}

```

In this example, the `useId` hook generates a unique ID that is used for both the label and the input element. This ensures that the label is correctly associated with the input field, improving accessibility for screen readers and other assistive technologies.
