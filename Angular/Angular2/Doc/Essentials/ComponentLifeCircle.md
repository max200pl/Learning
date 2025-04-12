# Component Life Circle in Angular 2+

## Introduction

Angular 2+ components have a well-defined life cycle that allows developers to hook into key events during the component's creation, update, and destruction phases. Understanding this life cycle is crucial for managing resources, optimizing performance, and ensuring that your application behaves as expected.
This document provides an overview of the component life cycle in Angular 2+ and explains the various life cycle hooks available to developers.

## Life Cycle Phases

The life cycle of an Angular component can be divided into several phases:

1. **Creation**: The component is instantiated and initialized.
2. **Change Detection**: Angular checks for changes in the component's data and updates the view accordingly.
3. **Rending**: The component's view is rendered in the DOM.
4. **Destruction**: The component is removed from the DOM and cleaned up.

## Life Cycle Hooks

Angular provides several life cycle hooks that allow developers to tap into the different phases of a component's life cycle. These hooks are methods that can be implemented in your component class. The most commonly used life cycle hooks are:

### Hook `ngOnInit`

- **Description**: Called once the component is initialized. This is a good place to perform any setup that requires access to the component's inputs or services.
- **When to Use**: Use `ngOnInit` for initialization logic that requires access to the component's inputs or services. This is typically where you would fetch data from a service or perform any setup that depends on the component's inputs.

- **Example**:

```typescript
import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-example',
  template: '<p>Example component</p>'
})
export class ExampleComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }
}
```
