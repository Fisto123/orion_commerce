import express from "express";
import { initializePayment } from "../controllers/stripe.js";

const router = express.Router();

router.post("/initialize-payment", initializePayment);
//router.get("/verify-payment", verifyPayment);

export default router;
