import express from "express";
import { getAllProducts } from "./ProductController";

const router = express.Router();

router.get("/", getAllProducts);

export default router;
