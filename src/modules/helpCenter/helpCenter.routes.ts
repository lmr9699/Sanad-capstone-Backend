import { Router } from "express";
import { sendHelpMessage, getConversationHistory } from "./helpCenter.controller";
import { authenticate } from "../../middlewares/auth.middleware";
import aiRoutes from "../../modules/helpCenter/ai.routes";

const router = Router();

// All help center routes require authentication
router.use(authenticate);

// POST /api/helpCenter/message - Send a message to AI assistant (dummy implementation)
// router.post("/message", sendHelpMessage);

// POST /api/helpCenter/assistant - Send a message to AI assistant (OpenRouter AI)
router.use("/", aiRoutes);

// GET /api/helpCenter/history - Get conversation history (optional)
router.get("/history", getConversationHistory);

export default router;
