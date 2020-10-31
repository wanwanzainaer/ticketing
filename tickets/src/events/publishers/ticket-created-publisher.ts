import { Publisher, Subjects, TicketCreatedEvent } from '@hsctickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
