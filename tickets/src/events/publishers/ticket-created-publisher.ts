import { Publisher, Subjects, TicketCreatedEvent } from "@sss-practice/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
