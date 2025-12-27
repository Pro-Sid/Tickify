import { Publisher, Subjects, TicketUpdatedEvent } from "@sss-practice/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
