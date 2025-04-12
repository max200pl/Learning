import { Component } from '@angular/core';
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
export class NewTicketComponent {
  // Example of a simple ticket creation form
  /*   onSubmit(titleElement: HTMLInputElement) {
    console.dir(titleElement);
    console.log('Ticket submitted:' + titleElement.value);
    // Here you would typically send the ticket data to a server or perform some action
  }
 */

  onSubmit(title: string, ticketText: string) {}
}
