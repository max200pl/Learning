# Key in React

## What is Key in React?

Key is a special string attribute that you need to include when creating lists of elements in React. Keys help React identify which items have changed, are added, or are removed. This helps in optimizing the rendering process and improving performance.

## Why use Key in React?

Keys are important for the following reasons:

1. **Performance**: Keys help React identify which items have changed, are added, or are removed. This helps in optimizing the rendering process and improving performance.
2. **Uniqueness**: Keys should be unique among siblings. This helps React to differentiate between elements and manage their state effectively.
3. **Stability**: Keys help maintain the stability of the component's identity across re-renders. This is especially important when dealing with dynamic lists where items can be added, removed, or reordered.
4. **Avoiding unnecessary re-renders**: By using keys, React can avoid re-rendering components that have not changed, which can lead to better performance and a smoother user experience.
5. **Debugging**: Keys can help in debugging issues related to rendering and state management in React applications.
6. **Consistency**: Keys help maintain the consistency of the component's identity across re-renders, which is important for managing state and performance.

## Rules ReRendering

1. **Use a unique key for each element**: When rendering a list of elements, make sure to provide a unique key for each element. This can be done using the `key` prop.
2. **Avoid using indexes as keys**: Using indexes as keys can lead to issues with component state and performance. Instead, use a unique identifier for each element, such as an ID or a unique string.
3. **Use stable keys**: Keys should be stable and not change between renders. This helps React to maintain the identity of the component and avoid unnecessary re-renders.
4. **Use keys for dynamic lists**: When rendering dynamic lists, make sure to provide keys for each element to help React manage the state and performance effectively.

## ReRender Behavior

1. If wrapper changed form `<div>` to `<section>`, the key will be lost and the component will be re-rendered.
2. If the key is changed, the component will be re-rendered.

## Example of Key in React

```jsx
const App = () => {
    const [changeShirts, setChangeShirts] = useState(false);

    const shirts = ['red', 'blue', 'green', 'yellow'];
  return (
    <div>
    { changeShirts ? (
        <div>
            <span> Shirts count </span> <Counter/>
        <div/>
    ):
        <section>
            <span> Shoes count </span> <Counter/>
        <section/>
    }
    <input type="number"  key={changeShirts ? 1 : 2}  />
    <button onClick={() => setChangeShirts((s)=> !s )}>Change</button>
    </div>
  )
}
```
