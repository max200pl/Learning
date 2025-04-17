# Observer Pattern in React

## Use Cases

1. Communication between components without direct parent-child relationship
2. Event handling and state management
3. Decoupling components for better maintainability and reusability

## Example Use npm Package mitt

```javascript
import mitt from 'mitt';
import React, { useEffect } from 'react';

const App = () => {
    const emitter = mitt();

     return (
        <div>
            <ParentComponent  />
        </div>
    );
};


const ParentComponent = () => {
  return (
    <div>
       <Buttons emitter={emitter} />
        <Counter emitter={emitter} />
    </div>
  );
};

const Buttons = ({ emitter }) => {
    const onIncrement = () => {
        emitter.emit('increment', 1);
    };

    const onDecrement = () => {
        emitter.emit('decrement', 1);
    };

    return (
        <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        </div>
    );
};

const Counter = ({ emitter }) => {
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        const incrementHandler = (value) => {
            setCount((prevCount) => prevCount + 1);
        };

        const decrementHandler = (value) => {
            setCount((prevCount) => prevCount - 1);
        };

        emitter.on('increment', incrementHandler);
        emitter.on('decrement', decrementHandler);

        return () => {
            emitter.off('increment', incrementHandler);
            emitter.off('decrement', decrementHandler);
        };
    }, [emitter]);

    return <div>Counter: {count}</div>;
};
```
