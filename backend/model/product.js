import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    inStock: { type: Number, required: true },
    category: {
      type: String,
      enum: [
        "electronics",
        "lifestyle",
        "grocery",
        "drinks",
        "gadgets",
        "beeauty",
      ],
      required: true,
    },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: Array, required: true },
    images: { type: Array },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
