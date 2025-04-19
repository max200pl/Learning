# Hook.useTransition() in React

Короче говоря, у нас есть очень тяжелый список компонент который мы хотим отрендерить, и конгда он начинает рендерится то мы не можем вообще ни с чем взаимодействовать.
И вот чтобы это исправить мы можем использовать useTransition и обернуть в него наш тяжелый список компонент.

## What is useTransition?

The `useTransition` hook is a built-in React hook that allows you to manage the transition state of a component. It is useful for optimizing performance in applications where you want to prioritize user interactions over rendering updates.
It helps to separate the rendering of a component into two phases: the immediate phase and the transition phase. The immediate phase is for urgent updates, while the transition phase is for non-urgent updates that can be deferred until the browser is idle.

## Motivation for useTransition

The motivation for the `useTransition` hook is to improve performance in React applications by allowing you to manage the transition state of a component. This can help reduce the amount of work the browser has to do during rendering, leading to a smoother user experience.

## Example 1 of useTransition

```jsx
import React, { useState, useTransition } from 'react';

function App() {
  const [isPending, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    startTransition(() => {
      // Simulate a heavy computation
      const newList = Array.from({ length: 10000 }, (_, i) => i + 1);
      setList(newList);
    });
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      {isPending ? <p>Loading...</p> : <ul>{list.map((item) => <li key={item}>{item}</li>)}</ul>}
    </div>
  );
}
```
