# Props in React

## Using Element Props in React

Problem: Need to change the button to a link while customizing the `<Button/>` component.

### Example Custom Button from Scratch

```javascript
import React from 'react';

import './Button.css';

const Button = ({As = "button", children, onClick, className, ...otherProps }) => {
  return (
    <As {...otherProps} className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

const App = () => {
  return (
    <div className="App">
      <Button onClick={() => alert('Hello!')} className="primary" As="a" href="#">
        Click Me
      </Button>

        <Button onClick={() => alert('Hello!')} className="secondary" As="span">
            Click Me
        </Button>
    </div>
  );
};

