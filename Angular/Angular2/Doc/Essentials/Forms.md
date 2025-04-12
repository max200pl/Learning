# Forms with Angular

## Two-way Data Binding

Two-way data binding is a powerful feature in Angular that allows automatic synchronization of data between the model (component) and the view (template). This means that when the model changes, the view reflects those changes, and vice versa. In Angular, two-way data binding is achieved using the `[(ngModel)]` directive.

### Example

```html
<form>
  <!-- Input field bound to the user.name property -->
  <label for="name">Name:</label>
  <input type="text" id="name" [(ngModel)]="user.name" name="name">

  <!-- Displaying the value of user.name -->
  <p>Hello, {{ user.name }}!</p>
</form>
```

```ts
// Component definition
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  template: `
    <form>
      <!-- Input field bound to the user.name property -->
      <label for="name">Name:</label>
      <input type="text" id="name" [(ngModel)]="user.name" name="name">

      <!-- Displaying the value of user.name -->
      <p>Hello, {{ user.name }}!</p>
    </form>
  `,
})
export class UserFormComponent {
  // Model with a name property
  user = { name: '' };
}
```

### Explanation

1. **`[(ngModel)]`:**
   - This directive binds the input field to the `user.name` property.
   - Any changes in the input field automatically update `user.name`.
   - Similarly, any changes to `user.name` in the component are reflected in the input field.

2. **`{{ user.name }}`:**
   - This is interpolation, which displays the current value of `user.name` in the template.

3. **Result:**
   - When the user types into the input field, the text is immediately displayed in the paragraph below.

This simple example demonstrates how two-way data binding works in Angular and how it can be used to synchronize data between the UI and the component.

## Template variables `#`

Template variables are a powerful feature in Angular that allows you to reference DOM elements or Angular components within your templates. They provide a way to access properties and methods of the referenced element or component directly in the template.
Template variables are defined using the `#` symbol followed by a variable name.

### Explanation Template variables

1. **`#userForm="ngForm"`:**
   - This creates a template variable named `userForm` that references the `ngForm` directive applied to the form element.
   - The `ngForm` directive provides access to the form's state, including its validity and values.
   - You can use this variable to access properties and methods of the form, such as `userForm.valid`, `userForm.value`, etc.

2 . **`#titleInput`**:

- This creates a template variable named `titleInput` that references the input element.
- You can use this variable to access properties of the input element, such as its value or focus state.

## Example Template variables

```ts
// Component definition
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  template: `
    <form #userForm="ngForm" (ngSubmit)="onSubmit(titleInput)">
      <label for="name">Name:</label>
      <input #titleInput type="text" id="name" name="name" required>

      <button type="submit">Submit</button>
    </form>
  `,
})

export class UserFormComponent {
  // Method to handle form submission
  onSubmit(form: NgForm) {
    console.log('Form submitted:', form.value);
  }
}
```
