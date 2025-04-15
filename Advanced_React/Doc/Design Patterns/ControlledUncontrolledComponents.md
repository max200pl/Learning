# Controlled Uncontrolled Components in React

## What are Controlled Components?

Controlled components are React components that do not maintain their own state. Instead, they rely on the parent component to manage their state. The parent component passes the current value and a callback function to update the value as props. This allows for a single source of truth for the component's state, making it easier to manage and debug.

## What are Uncontrolled Components?

Uncontrolled components are React components that maintain their own state. They use the DOM to manage their state, and the parent component does not have direct control over the component's value. This can lead to a more complex state management system, as the parent component may not always be aware of the current value of the uncontrolled component.
