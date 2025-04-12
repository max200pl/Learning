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

### Hook `ngOnChanges`

- **Description**: Called when any data-bound input properties change. This is useful for responding to changes in input properties and updating the component accordingly.
- **When to Use**: Use `ngOnChanges` to respond to changes in input properties. This is typically where you would update the component's state or perform any calculations based on the new input values.
- **Example**:

```typescript

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<p>Example component</p>'
})
export class ExampleComponent implements OnChanges {
  @Input() inputData: any;
  processedData: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.inputData) {
      this.processedData = this.processInputData(this.inputData);
    }
  }

  processInputData(data: any) {
    // Process the input data
    return data;
  }
}
```

### Hook `ngOnDestroy`

- **Description**: Called just before the component is destroyed. This is a good place to clean up resources, unsubscribe from observables, and perform any necessary cleanup tasks.
- **When to Use**: Use `ngOnDestroy` to clean up resources and unsubscribe from observables. This is typically where you would unsubscribe from any subscriptions or detach event listeners to prevent memory leaks.

- **Example**:

```typescript
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<p>Example component</p>'
})
export class ExampleComponent implements OnDestroy {
  private subscription: Subscription;

  constructor(private dataService: DataService) {
    this.subscription = this.dataService.getData().subscribe(data => {
      // Handle data
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
```

### Hook `ngDoCheck`

- **Description**: Called during every change detection run. This allows you to implement custom change detection logic.
- **When to Use**: Use `ngDoCheck` for custom change detection logic that cannot be handled by Angular's default change detection. This is typically where you would implement performance optimizations or custom change detection strategies.
- **Example**:

```typescript
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<p>Example component</p>'
})
export class ExampleComponent implements DoCheck {
  data: any;

  constructor(private dataService: DataService) {}

  ngDoCheck() {
    // Custom change detection logic
    if (this.dataService.hasDataChanged()) {
      this.data = this.dataService.getData();
    }
  }
}
```

### Hook `ngAfterContentInit`

- **Description**: Called after the component's content (ng-content) has been projected into the view. This is useful for performing actions that depend on the component's content being fully initialized.
- **When to Use**: Use `ngAfterContentInit` for actions that depend on the component's content being fully initialized. This is typically where you would perform DOM manipulations or access child components.
- **Example**:

```typescript
import { Component, AfterContentInit } from '@angular/core';

@Component ({
  selector: 'app-example',
  template: '<ng-content></ng-content>'
})
export class ExampleComponent implements AfterContentInit {
  ngAfterContentInit() {
    // Perform actions after content initialization
  }
}
```

### Hook `ngAfterViewInit`

- **Description**: Called after the component's content and view have been initialized. This is useful for performing actions that depend on the component's view being fully initialized.
- **When to Use**: Use `ngAfterContentInit` and `ngAfterViewInit` for actions that depend on the component's content and view being fully initialized. This is typically where you would perform DOM manipulations or access child components.
- **Example**:

```typescript
import { Component, AfterContentInit, AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-example',
  template: '<p>Example component</p>'
})
export class ExampleComponent implements AfterContentInit, AfterViewInit, AfterViewChecked{
  @ViewChild(ChildComponent) childComponent: ChildComponent;

  ngAfterContentInit() {
    // Perform actions after content initialization
  }

  ngAfterViewInit() {
    // Perform actions after view initialization
    // When Angular has fully initialized the component's view and its child views
    // This is a good place to access child components and perform actions on them
    this.childComponent.doSomething();
  }

  ngAfterContentChecked() {
    // Perform actions after content check
    // This is called after the component's content has been checked by Angular's change detection
    // This is a good place to perform any additional checks or updates based on the content
  }
}
```
