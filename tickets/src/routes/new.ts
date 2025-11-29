import { requireAuth } from "@sss-practice/common";
import express, { Request, Response } from "express";

const router = express.Router();

router.post(
  "/api/tickets",
  requireAuth,
  async (req: Request, res: Response) => {
    res.sendStatus(200);
  }
);
export { router as createTicketRouter };
