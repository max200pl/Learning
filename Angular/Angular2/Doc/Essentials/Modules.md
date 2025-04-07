# Angular Modules of Components

## Introduction

Angular modules are a way to group related components, directives, pipes, and services together. They help in organizing the application into cohesive blocks of functionality. Each Angular application has at least one module, the root module, which is typically named `AppModule`. Additional modules can be created to encapsulate specific features or functionalities.

## Standalone Components

- `standalone:true` is a property that can be set in the component decorator to indicate that the component is standalone.
- Standalone components can be used without being declared in an Angular module.
- They can import other standalone components, directives, and pipes directly.

### Example of a Standalone Component

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone-example',
  standalone: true,
  template: `
    <h1>Standalone Component Example</h1>
    <p>This component is standalone and does not require a module.</p>
  `,
})
export class StandaloneExampleComponent {}
```

## Creating a Module

To create a module in Angular, you can use the Angular CLI command `ng generate module <module-name>`. This will create a new module file with the specified name.
You can also create a module manually by creating a new TypeScript file and using the `NgModule` decorator.

### Example of a Module

- `@NgModule` is a decorator that marks a class as an Angular module.
- `BrowserModule` is a built-in module that is required for any Angular application running in a web browser.

```typescript

import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], // Components, directives, and pipes that belong to this module
  imports: [BrowserModule, HeaderComponent, UserComponent], // Other modules that this module depends on
  exports: [], // Components, directives, and pipes that can be used in other modules
  providers: [], // Services that are available in this module
})
export class MyModule {}
```

## Importing Modules `FormModule`

- `FormModule` is an Angular module that provides support for building reactive forms.

- It is part of the `@angular/forms` package and must be imported into your application module to use reactive forms.

### Example of Importing `FormModule`

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';

@NgModule({
  declarations: [AppComponent, MyFormComponent],
  imports: [BrowserModule, ReactiveFormsModule], // Importing ReactiveFormsModule
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


@Component({
  selector: 'app-my-form',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
      <label for="name">Name:</label>
      <input id="name" formControlName="name" />
      <button type="submit">Submit</button>
    </form>
  `,
})
export class MyFormComponent {
  myForm = this.fb.group({
    name: [''],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.myForm.value);
  }
}
```

## Conclusion

Angular modules are essential for organizing your application into cohesive blocks of functionality. They allow you to group related components, directives, pipes, and services together, making it easier to manage and maintain your code. Standalone components provide a way to create reusable components without the need for a module, while importing modules like `FormModule` enables you to use powerful features like reactive forms in your application.
