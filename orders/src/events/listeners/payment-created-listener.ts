import {
  Subjects,
  Listener,
  PaymentCreatedEvent,
  OrderStatus,
} from "@sss-practice/common";
import { queueGroupName } from "./queue-group-name";
import { Order } from "../../models/orders";

export class PaymentCreatedListener extends Listener<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
  queueGroupName = queueGroupName;
  async onMessage(data: PaymentCreatedEvent["data"], msg: any) {
    const { id, orderId, stripeId } = data;
    const order = await Order.findById(orderId);
    if (!order) {
      throw new Error("Order not found");
    }
    order.set({ status: OrderStatus.Complete });
    await order.save();
    msg.ack();
  }
}
