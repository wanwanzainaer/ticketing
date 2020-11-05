import { Publisher, OrderCreatedEvent, Subjects } from '@hsctickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
