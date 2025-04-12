import {
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  label = input<string>('label');

  private el = inject(ElementRef);

  //* Example 1: Old approach
  /*
      @ContentChild('input') private control?: ElementRef<
          HTMLInputElement | HTMLTextAreaElement
      >;
  */

  //* Example 2: New approach (Angular 17.3)
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input, textarea'
    );

  onClick() {
    console.log('Control clicked!');
    console.log(this.el);
    console.log(this.control());
  }
}
