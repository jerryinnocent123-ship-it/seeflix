import { sendMessageToGemini, analyzeUserRequest } from "../services/geminiService.js";

export const handleChatMessage = async (req, res) => {
  try {
    const { message, conversationHistory } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({
        success: false,
        error: "Message cannot be empty",
      });
    }

    const response = await sendMessageToGemini(message, conversationHistory || []);

    return res.status(200).json({
      success: true,
      response: response,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("❌ Chat Controller Error:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to process message",
    });
  }
};


export const analyzeRequest = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({
        success: false,
        error: "Message cannot be empty",
      });
    }

    const analysis = await analyzeUserRequest(message);

    return res.status(200).json({
      success: true,
      analysis: analysis,
    });
  } catch (error) {
    console.error("❌ Analysis Controller Error:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to analyze request",
    });
  }
};

export default {
  handleChatMessage,
  analyzeRequest,
};
