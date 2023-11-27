import express, { Request, Response } from "express";
import component from "../Component/index";

const router = express.Router();

router.get("/", (_: Request, res: Response) => {
  res.status(200).json({ message: "SUCCESS" });
});

router.use("/api", component.Users.routes);
router.use("/api", component.Products.routes);

export default router;
