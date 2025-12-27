import express, { Request, Response } from "express";
import {
  NotAuthorizedError,
  NotFoundError,
  requireAuth,
} from "@sss-practice/common";
import { Order } from "../models/orders";

const router = express.Router();

router.get(
  "/api/orders/:orderId",
  requireAuth,
  async (req: Request, res: Response) => {
    const orders = await Order.findById(req.params.orderId).populate("ticket");
    if (!orders) {
      throw new NotFoundError();
    }
    if (orders.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }
    res.status(200).send(orders);
  }
);

export { router as showOrderRouter };
