import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host: {
    '(click)': 'onLog()',
  },
  hostDirectives: [LogDirective],
})
export class LogDirective {
  private elementRef = inject(ElementRef);

  constructor() {}

  onLog(): void {
    console.log('LogDirective: Click event triggered!');
    console.log('Element:', this.elementRef.nativeElement);
  }
}
