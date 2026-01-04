import {
  ExpirationCompleteEvent,
  Listener,
  OrderStatus,
  Subjects,
} from "@sss-practice/common";

import { queueGroupName } from "./queue-group-name";
import { Message } from "node-nats-streaming";
import { Order } from "../../models/orders";
import { OrderCancelledPublisher } from "../publishers/order-cancelled-publisher";

export class ExpirationCompleteListener extends Listener<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
  queueGroupName = queueGroupName;

  async onMessage(data: ExpirationCompleteEvent["data"], msg: Message) {
    const orderId = await Order.findById(data.orderId).populate("ticket");
    if (!orderId) {
      throw new Error("Order not found");
    }
    if (orderId.status === OrderStatus.Complete) {
      return msg.ack();
    }
    orderId.set({ status: OrderStatus.Cancelled });
    await orderId.save();
    await new OrderCancelledPublisher(this.client).publish({
      id: orderId.id,
      version: orderId.version,
      ticket: {
        id: orderId.ticket.id,
      },
    });
    msg.ack();
  }
}
