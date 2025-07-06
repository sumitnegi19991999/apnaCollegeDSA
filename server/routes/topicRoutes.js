import express from "express";
import { getAllTopics, getTopicById } from "../controllers/topicController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", authMiddleware, getAllTopics);
router.get("/:topicId", authMiddleware, getTopicById);

export default router;
