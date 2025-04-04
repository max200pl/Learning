# Decorators in Angular

## Overview

Decorators are a core concept in Angular that allow you to add metadata to classes, properties, and methods. They are used to define components, directives, services, and other Angular constructs. Decorators provide a way to configure the behavior of these constructs and enable Angular's dependency injection system.

## Common Decorators

- **@Component**: Used to define a component. It provides metadata such as the selector, template, styles, and providers.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `<h1>Hello, World!</h1>`,
  styles: [`h1 { color: blue; }`]
})
export class HelloWorldComponent {}
```

- **@Input**: Used to define an input property for a component. It allows data to be passed from a parent component to a child component.

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>{{ message }}</p>`
})
export class ChildComponent {
  @Input() message: string;
}
```

## Different between @Input and input

`@Input` is a decorator in Angular that allows you to define input properties for a component. It enables data binding between a parent component and a child component. The `input` function is used to create an input property in a component.
It is a new feature in Angular 16 that allows you to create input properties with additional features, such as required properties and default values.

## Decorators @Output

- **@Output**: Used to define an output property for a component. It allows a child component to emit events to a parent component.

```typescript
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="sendMessage()">Send Message</button>`
})
export class ChildComponent {
  @Output() messageSent = new EventEmitter<string>();

  sendMessage() {
    this.messageSent.emit('Hello from Child Component!');
  }
}
```
