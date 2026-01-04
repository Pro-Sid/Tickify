import { Subjects, PaymentCreatedEvent, Publisher } from "@sss-practice/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
