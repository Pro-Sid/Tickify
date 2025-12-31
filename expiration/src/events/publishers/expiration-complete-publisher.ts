import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@sss-practice/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
