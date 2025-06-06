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

- In this example, the `ParentComponent` uses the `ChildComponent` and projects its content into it using `<ng-content>`. The `select` attribute allows you to specify which content to project based on a CSS selector.

## ngProjectAs

- **ngProjectAs** is an Angular directive that allows you to specify how a projected element should be treated in terms of its type and behavior. It is used in conjunction with the `ng-content` directive to control how content is projected into a component.

```typescript
import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule],
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
}

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-content select="h2"/>
    <h2>Child Component</h2>
    <ng-content select=".icon" ngProjectAs="span"/>
  `,
})
export class ChildComponent {
}
```

- In this example, the `ngProjectAs` directive is used to specify that the projected content with the class `icon` should be treated as a `<span>` element. This allows you to control how the projected content behaves and interacts with the component.

### ng-content if not selected content (NEW Feature)

- If the projected content is not selected by any `ng-content` directive, it will be rendered in the default slot of the component. The default slot is the area where content is projected if it does not match any specific selector.

```typescript

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [CommonModule],
})
export class ChildComponent {
}
```

if  you use the `ng-content` directive without any selector, it will match all content that is not selected by any other `ng-content` directive.

```html
<span> <ng-content /> </span>
<ng-content select="icon">
    <!-- if not selected content show +  -->
  <ng-content select="icon"> + </ng-content>
</ng-content>
```

### multiple ng-content define by coma (NEW Feature)

- You can use multiple `ng-content` directives in a component to project different types of content into different areas of the component. This allows you to create more complex and flexible components that can accept various types of content.

```typescript

@Component ({
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [CommonModule],
})


export class ChildComponent {
    title = 'Hello World!';
}
```

```html
<p>
    {{title}}
    <ng-content select="input, textarea" />
</p>
```
