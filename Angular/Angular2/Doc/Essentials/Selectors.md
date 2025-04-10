# Components selectors in Angular

## Table of contents

- [Components selectors in Angular](#components-selectors-in-angular)
  - [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Types of selectors](#types-of-selectors)
  - [Conclusion](#conclusion)

## Introduction

In Angular, components are the building blocks of the application. Each component has a selector that defines how it can be used in HTML templates. The selector is a string that tells Angular how to identify the component in the DOM. There are several types of selectors that can be used in Angular components, each with its own syntax and use cases.

## Types of selectors

In Angular, there are four main types of selectors that can be used in components:

1. **Element selector**: This selector is used to create a custom HTML element that represents the component. It is defined using the `selector` property in the component's metadata. The syntax for an element selector is as follows:

    ```typescript
    import { Component } from '@angular/core';

    @Component({
    selector: 'app-my-component',
    template: `<h1>Hello, World!</h1>`,
    })
    export class MyComponent {}
    ```

    In this example, the selector `app-my-component` can be used in HTML templates like this:

    ```html
    <app-my-component></app-my-component>
    ```

2. **Attribute selector**: This selector is used to create a custom attribute that can be added to existing HTML elements. It is defined using the `selector` property in the component's metadata with the `[]` syntax. The syntax for an attribute selector is as follows:

    ```typescript
    import { Component } from '@angular/core';

    @Component({
    selector: '[app-my-component]',
    template: `<h1>Hello, World!</h1>`,
    })
    export class MyComponent {}

    @Component({
    selector: 'button[appMyComponent]',
    template: `<h1>Hello, World!</h1>`,
    })
    export class MyComponent {}
    ```

    In this example, the selector `[app-my-component]` can be used in HTML templates like this:

    ```html
    <div app-my-component></div>
    <button appMyComponent></button>
    ```

3. **Class selector**: This selector is used to create a custom class that can be added to existing HTML elements. It is defined using the `selector` property in the component's metadata with the `.` syntax. The syntax for a class selector is as follows:

    ```typescript
    import { Component } from '@angular/core';

    @Component({
    selector: '.my-component',
    template: `<h1>Hello, World!</h1>`,
    })
    export class MyComponent {}
    ```

    In this example, the selector `.my-component` can be used in HTML templates like this:

    ```html
    <div class="my-component"></div>
    ```

4. **Custom element selector**: This selector is used to create a custom HTML element that represents the component. It is defined using the `selector` property in the component's metadata with the `custom-element` syntax. The syntax for a custom element selector is as follows:

    ```typescript
    import { Component } from '@angular/core';

    @Component({
    selector: 'my-component',
    template: `<h1>Hello, World!</h1>`,
    })
    export class MyComponent {}
    ```

    In this example, the selector `my-component` can be used in HTML templates like this:

    ```html
    <my-component></my-component>
    ```

## Conclusion

In conclusion, Angular provides several types of selectors that can be used to create custom components. Each selector has its own syntax and use cases, allowing developers to choose the most appropriate one for their needs. By understanding how to use these selectors, developers can create reusable and modular components that can be easily integrated into their applications.
