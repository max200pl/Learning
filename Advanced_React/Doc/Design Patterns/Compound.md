
# Compound Pattern in React

When we talk about the compound pattern in React, we are referring to a design pattern that allows us to create components that can work together as a single unit. This pattern is often used to create reusable components that can be composed together to create more complex components.
This pattern is useful for creating components that have a clear relationship with each other and can be used together to create a more complex UI.

```javascript

import React from 'react';

const context = React.createContext(null);

const header = ({children}) => {
    const {test} = React.useContext(context);

  return (
    <header>
      {children}
    </header>
  );
};

const Footer = ({children}) => {
  return (
    <footer>
      {children}
    </footer>
  );
};

const Body = ({children}) => {
  return (
    <div className="card-body">
      {children}
    </div>
  );
};

const Card = ({children}) => {
  return <CardContext.Provider value={context}>
        <div className="card">
            {children}
        </div>
  </CardContext.Provider>;
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
```

```javascript

import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div className="App">
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Body>Body</Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    </div>
  );
};
```
