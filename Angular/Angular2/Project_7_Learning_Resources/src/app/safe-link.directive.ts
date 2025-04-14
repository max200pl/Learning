import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLinkDirective initialized');
  }

  onConfirmLeavePage(event: MouseEvent): void {
    const wantsToLeave =
      window.confirm('Are you sure you want to leave this page?') === true;

    if (wantsToLeave) {
      return;
    }

    event?.preventDefault();
  }
}
