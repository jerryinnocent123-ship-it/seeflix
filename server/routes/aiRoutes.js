import express from "express";
import { handleChatMessage, analyzeRequest } from "../controllers/aiController.js";

const router = express.Router();

router.post("/chat", handleChatMessage);
router.post("/analyze", analyzeRequest);

export default router;
