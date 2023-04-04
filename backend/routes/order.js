import express from "express";
import { createOrder } from "../controllers/order.js";

const router = express.Router();

router.post("/order/createOrder", createOrder);

export default router;
