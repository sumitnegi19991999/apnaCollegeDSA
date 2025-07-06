import express from "express";
import {
  updateProgress,
  getProgress,
} from "../controllers/progressController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", authMiddleware, updateProgress);
router.get("/", authMiddleware, getProgress);

export default router;
