import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket/ticket.mode';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; text: string }) {
    const ticket: Ticket = {
      id: this.tickets.length + 1,
      title: ticketData.title,
      request: ticketData.text,
      status: 'open',
    };

    this.tickets.push(ticket);
    console.log('Ticket added:', ticket);
  }

  onCloseTicket(ticketId: number) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === ticketId) {
        return { ...ticket, status: 'closed' };
      } else {
        return ticket;
      }
    });
  }
}
