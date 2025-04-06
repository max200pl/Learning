# Angular Pipes

Pipes are a powerful feature in Angular that allow you to transform data for display in templates. They can be used to format strings, numbers, dates, and more. Pipes can be built-in or custom.

## DatePipe

The `DatePipe` is a built-in Angular pipe that formats dates in a variety of ways. It can be used in templates and components to display dates in a user-friendly format.
It is part of the `CommonModule` and is available in all Angular applications by default.

### Example Usage

```typescript
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-example',
  template: `
    <p>Default Date: {{ currentDate | date }}</p>
    <p>Short Date: {{ currentDate | date:'short' }}</p>
    <p>Medium Date: {{ currentDate | date:'medium' }}</p>
    <p>Long Date: {{ currentDate | date:'long' }}</p>
    <p>Full Date: {{ currentDate | date:'fullDate' }}</p>
    <p>Custom Format: {{ currentDate | date:'yyyy-MM-dd HH:mm:ss Z' }}</p>
  `,
})
export class DateExampleComponent {
  currentDate: Date = new Date();
}
```
