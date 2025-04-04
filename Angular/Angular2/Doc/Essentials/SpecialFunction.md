# SpecialFunction in Angular

## Overview

Special functions in Angular are functions that are used to perform specific tasks or operations within the framework. These functions can be used to manipulate data, handle events, and interact with the Angular application lifecycle.

## Common Special Functions

- **input from @angular/core** is a decorator that allows you to define input properties for a component. It enables data binding between a parent component and a child component.

```typescript
import { Component, input } from '@angular/core';


@Component({
  selector: 'app-parent',
  template: `<app-child [avatar]="userAvatar"></app-child>`
})
export class ParentComponent {
    userAvatar: string = 'https://example.com/avatar.png'; // Avatar URL to be passed to the child component
}

@Component({
  selector: 'app-child',
  template: `<p>{{ message }}</p>`
})
export class ChildComponent {
    avatar = input<string>() // !Read only Input property to receive data from the parent component
    message: string = 'Hello, World!'; // Default message
    name = input.required<string>() // !Read only Required input property
}
```
