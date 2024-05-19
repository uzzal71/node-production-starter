import express from "express";
import { authMiddleware } from "../middlewares/AuthMiddleware";
import auth from "./auth";
import profile from "./profile";
import verify from "./verify";

const router = express.Router();

router.use("/auth", auth);
router.use("/verify", authMiddleware, verify);
router.use("/profile", authMiddleware, profile);

export default router;
