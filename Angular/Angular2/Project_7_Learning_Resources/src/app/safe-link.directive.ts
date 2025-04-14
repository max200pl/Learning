import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('myapp', { alias: 'appSafeLink' });

  constructor() {
    console.log('SafeLinkDirective initialized');
  }

  onConfirmLeavePage(event: MouseEvent): void {
    const wantsToLeave =
      window.confirm('Are you sure you want to leave this page?') === true;

    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href;

      (event.target as HTMLAnchorElement).href =
        address + '?from=' + this.queryParam();
      return;
    }

    event?.preventDefault();
  }
}
