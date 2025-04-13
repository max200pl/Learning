import { Component, input, output, signal } from '@angular/core';
import { Ticket } from './ticket.mode';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  close = output();
  detailsVisible = signal(false);

  onToggleDetails() {
    //Example of using signal to toggle details visibility
    // this.detailsVisible.set(!this.detailsVisible());

    // Example of using signal to toggle details visibility
    this.detailsVisible.update((prev) => !prev);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
