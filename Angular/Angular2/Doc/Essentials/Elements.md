# Angular Elements

## Overview

## ng-content

- **ng-content** is a directive that allows you to project content into a component. It enables you to create reusable components that can accept dynamic content from their parent components.

```typescript
import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h1>Parent Component</h1>
    <app-child>
        <h2>Header Content</h2>
        <p>Some content for the child component.</p>
        <span class="icon">Icon Content</span>
    </app-child>
  `,
})
export class ParentComponent {
  // Parent component logic goes here
}

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-content/>
    <h2>Child Component</h2>
    <ng-content select=".icon"/>
  `,
})
export class ChildComponent {
  // Child component logic goes here
}
```
