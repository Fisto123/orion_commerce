import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, max: 11 },
    address: { type: String, required: true, max: 11 },
    orderId: { type: String, required: true },
    shippingFee: { type: Number },
    phone: { type: Number, required: true },
    cartItems: { type: [], required: true },
    cartTotalAmount: { type: Number, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.model("order", orderSchema);

export default Order;
