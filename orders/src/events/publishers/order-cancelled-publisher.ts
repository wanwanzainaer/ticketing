import { OrderCancelledEvent, Publisher, Subjects } from '@hsctickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
