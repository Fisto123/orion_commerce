import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import productRouter from "./routes/product.js";
import orderRouter from "./routes/order.js";
import payStripeRouter from "./routes/stripe.js";
import mailRouter from "./routes/mail.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(cors());

/* ROUTES */
app.use("/api", productRouter);
app.use("/api", orderRouter);
app.use("/api/stripe", payStripeRouter);
app.use("/api", mailRouter);

/* ROUTES */

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

/* MONGOOSE SETUP */
