# Error Boundaries in React (Only for Rendering)

## What are Error Boundaries?

Error boundaries are a React feature that allows you to catch JavaScript errors in your component tree and display a fallback UI instead of crashing the entire application. They are typically used to handle errors in class components, but can also be used with functional components using hooks.
Error boundaries are implemented using the `componentDidCatch` lifecycle method and the `getDerivedStateFromError` static method.

## Use Cases

1. Handling errors in class components
2. Displaying fallback UI for broken components
3. Logging errors to an error reporting service
4. Preventing the entire application from crashing due to a single component error
5. Providing a better user experience by showing a fallback UI instead of a blank screen

## Example

```javascript
import React from 'react';

export class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error to an error reporting service
        console.error("Error caught in Error Boundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasErr) {
            return  this.props.fallback
        }

        return this.props.children;
    }
}

export class ComponentThatMayThrow extends React.Component {
    componentDidMount() {
        throw new Error('An error occurred!');
    }

    render() {
        return <div>This is a component that may throw an error.</div>;
    }
}


const App = () => {
    return (
        <div>
            <h1>Error Boundary Example</h1>
            <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
                <ComponentThatMayThrow />
            </ErrorBoundary>
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
            <App />
        </ErrorBoundary>
    </React.StrictMode>
);
```
