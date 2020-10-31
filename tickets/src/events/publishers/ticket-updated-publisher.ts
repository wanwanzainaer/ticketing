import { TicketUpdatedEvent, Subjects, Publisher } from '@hsctickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
