# Styles in Angular

Angular provides a powerful way to style your components using CSS. You can apply styles globally or locally to specific components. Here’s a breakdown of how to manage styles in Angular applications.

## Encapsulated Styles

Angular components can have their own styles that are encapsulated within the component. This means that the styles defined in a component's CSS file will not affect other components. To use encapsulated styles, you can define them in the component's decorator.

```typescript

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'] // Local styles
})
export class ExampleComponent {
  // Component logic
}
```

In the example above, the styles defined in `example.component.css` will only apply to the `ExampleComponent`. This is achieved through Angular's ViewEncapsulation feature, which can be configured in the component decorator.

### ViewEncapsulation Options

Angular provides three encapsulation strategies:

- `ViewEncapsulation.Emulated`: This is the default option. It emulates native Shadow DOM behavior by scoping styles to the component.
- `ViewEncapsulation.None`: This option does not encapsulate styles. Styles defined in the component will affect the entire application.

- `ViewEncapsulation.ShadowDom`: This option uses the native Shadow DOM API to encapsulate styles. It is only available in browsers that support Shadow DOM.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  encapsulation: ViewEncapsulation.None // No encapsulation
})
export class ExampleComponent {
  // Component logic
}
```

```html

<!-- example.component.html -->

<div class="example">
    <h1>Example Component</h1>
    <ng-content></ng-content>
</div>
