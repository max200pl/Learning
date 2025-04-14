# Template in Angular

## What is a Template?

A template in Angular is a piece of HTML that defines the view for a component. It can include Angular-specific syntax, such as directives and bindings, to create dynamic and interactive user interfaces. Templates are used to define how the component's data should be displayed in the UI.

## Template Syntax

- `*ngIf` - Is a syntax sugar for `ngIf` directive. It is used to conditionally include or exclude a template based on the value of an expression. If the expression evaluates to true, the template is rendered; otherwise, it is not included in the DOM.

```html
<ng-template #myTemplate>
  <div>This is visible</div>
  <div>{{ item }}</div>
</ng-template>
```

## TemplateRef and ViewContainerRef

- `TemplateRef` - Represents an embedded template that can be used to create views dynamically. It is a reference to the template defined in the component's HTML.

- `ViewContainerRef` - Represents a container where one or more views can be created. It is used to insert views into the DOM dynamically.

- `.createEmbeddedView(this.templateRef)` - This method is used to create an embedded view from the `TemplateRef`. It takes the template reference as an argument and creates a new instance of the view.

```typescript
import { Component, TemplateRef, ViewChild , ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirective {
  private templateRef  =inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

    constructor() {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
}
```

```html
<ng-template #myTemplate let-item="item">
  <div>{{ item }}</div>
</ng-template>
```

```html
<p  *ngIf="isVisible">This is visible</p>
<p *ngIf="!isVisible">This is not visible</p>
```
