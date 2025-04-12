import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  viewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  //* Example 1: of a simple ticket creation form
  /*
    onSubmit(titleElement: HTMLInputElement) {
      console.dir(titleElement);
      console.log('Ticket submitted:' + titleElement.value);
      // Here you would typically send the ticket data to a server or perform some action
    }
 */

  //* EXAMPLE 2: Using Angular Forms
  /*
    onSubmit(title: string, ticketText: string, form: HTMLFormElement) {
      console.log('Ticket submitted:', { title, ticketText });
      // Here you would typically send the ticket data to a server or perform some action

      // Reset the form after submission
      form.reset();
    }
  */

  //* EXAMPLE 3: Using Angular Forms with ViewChild
  @ViewChild('form') form?: ElementRef<HTMLFormElement>; // #form

  ngAfterViewInit(): void {
    // This method is called after the view has been initialized
    // You can perform any additional setup here if needed

    console.log('NewTicketComponent view initialized');
    // For example, you can access child components or DOM elements here
    console.log(this.form?.nativeElement); // This will log the form element reference
  }

  onSubmit(title: string, ticketText: string) {
    console.log('Ticket submitted:', { title, ticketText });
    // Here you would typically send the ticket data to a server or perform some action

    // Reset the form after submission
    this.form?.nativeElement.reset();
  }

  //* EXAMPLE 4: (New From 17.3) Using Angular Forms with viewChild and ElementRef
  /*
    private form = viewChild.required<HTMLFormElement>('form');

    onSubmit(title: string, ticketText: string) {
      console.log('Ticket submitted:', { title, ticketText });
      // Here you would typically send the ticket data to a server or perform some action

      // Reset the form after submission
      this.form()?.reset();
    }
  */
}
