import express from "express";
import {
  createProduct,
  getProdCategory,
  getProduct,
  getProductById,
  getReccomendedProducts,
  searchProduct,
} from "../controllers/product.js";

const router = express.Router();

router.post("/product/createProduct", createProduct);
router.get("/product/getProduct", getProduct);
router.get("/product/getProductId/:id", getProductById);
router.get("/product/getProductCat", getProdCategory);
router.get("/product/getReccomendedProducts", getReccomendedProducts);
router.get("/product/searchProduct", searchProduct);

export default router;
