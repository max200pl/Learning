# Directives in React

## What are Directives?

Directives are "enhancements" for elements in the DOM. They are used to extend the capabilities of HTML elements and provide additional functionality. In React, directives are not a built-in feature like in Vue.js, but similar functionality can be achieved using props and state management.

Directives are special tokens in the markup that tell the library to do something to a DOM element (or a component instance). They are prefixed with `v-` to indicate that they are special attributes provided by Vue.

## Common Directives

### Attribute Directives

### Structural Directives

- `*ngIf`: Conditionally includes a template based on the value of an expression. If the expression evaluates to true, the template is rendered; otherwise, it is not included in the DOM.
        Example:
            ```html
                <div *ngIf="isVisible">This is visible</div>
            ```
- `*ngFor`: Iterates over a collection and renders a template for each item in the collection. It is similar to a loop in programming languages.

### Built-in Directives

### Custom Directives
