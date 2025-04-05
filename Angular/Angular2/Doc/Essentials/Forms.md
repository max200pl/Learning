# Forms with Angular

## Two-way data binding

Two-way data binding is a powerful feature in Angular that allows for automatic synchronization of data between the model and the view. This means that when the model changes, the view reflects those changes, and vice versa. In Angular, two-way data binding is typically achieved using the `[(ngModel)]` directive.

### Example of Two-way Data Binding

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" [(ngModel)]="user.name" name="name">
    <p>Hello, {{ user.name }}!</p>
</form>
```

In this example, the `[(ngModel)]` directive binds the input field to the `user.name` property in the component. Any changes made to the input field will automatically update the `user.name` property, and any changes to `user.name` in the component will update the input field.

```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  template: `
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" [(ngModel)]="user.name" name="name">
      <p>Hello, {{ user.name }}!</p>
    </form>
  `,
})
export class UserFormComponent {
  user = {
    name: ''
  };
}
```
