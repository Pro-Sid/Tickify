import { Publisher, Subjects, OrderCreatedEvent } from "@sss-practice/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
