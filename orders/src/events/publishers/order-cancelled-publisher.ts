import { Publisher, Subjects, OrderCancelledEvent } from "@sss-practice/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
