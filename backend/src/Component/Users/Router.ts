import express from "express";
import { registerUsers, loginUsers } from "./UserController";

const router = express.Router();

router.get("/login", loginUsers);
router.post("/register", registerUsers);

export default router;
