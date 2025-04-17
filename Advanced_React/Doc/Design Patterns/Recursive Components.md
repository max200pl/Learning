# Recursive Pattern in React

## Use Cases

1. Recursive Components
2. Tree Structures
3. Nested Lists
4. Hierarchical Data
5. Nested Routes
6. Nested Navigation
7. Nested Modals
8. Nested Forms

## Recursive Components

Recursive components are components that call themselves in their render method. This pattern is useful for rendering tree structures or nested data. For example, a recursive component can be used to render a tree of categories or a nested list of items.

``` javascript
import React from 'react';

const data = [
  {
    id: 1,
    name: 'Item 1',
    children: [
      {
        id: 2,
        name: 'Item 1.1',
        children: [
          { id: 3, name: 'Item 1.1.1' },
          { id: 4, name: 'Item 1.1.2' },
        ],
      },
      { id: 5, name: 'Item 1.2' },
    ],
  },
  { id: 6, name: 'Item 2' },
];

const RecursiveComponent = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.name}
          {item.children && item.children.length > 0 && (
            <RecursiveComponent data={item.children} />
          )}
        </li>
      ))}
    </ul>
  );
};


const App = () => {
  return (
    <div>
      <h1>Recursive Component Example</h1>
      <RecursiveComponent data={data} />
    </div>
  );
};



