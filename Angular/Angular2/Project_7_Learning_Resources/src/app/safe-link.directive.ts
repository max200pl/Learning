import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('myapp', { alias: 'appSafeLink' });

  private hostElement = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('SafeLinkDirective initialized');
  }

  onConfirmLeavePage(event: MouseEvent): void {
    const wantsToLeave =
      window.confirm('Are you sure you want to leave this page?') === true;

    if (wantsToLeave) {
      // EXAMPLE 1: Using the event target
      /*
        const address = (event.target as HTMLAnchorElement).href;
        (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
      */

      // EXAMPLE 2: Using the host element
      const address = this.hostElement.nativeElement.href;

      this.hostElement.nativeElement.href =
        address + '?from=' + this.queryParam();
      return;
    }

    event?.preventDefault();
  }
}
