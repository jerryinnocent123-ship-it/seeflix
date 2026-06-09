import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.VITE_API_KEY_GEMINI;

export default async (req, res) => {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    if (!apiKey) {
      return res.status(500).json({
        success: false,
        error: "API key not configured",
      });
    }

    const { message, conversationHistory } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({
        success: false,
        error: "Message cannot be empty",
      });
    }

    const client = new GoogleGenerativeAI(apiKey);
    const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Format conversation history
    const history = (conversationHistory || []).map((msg) => ({
      role: msg.sender === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 1024,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;

    return res.status(200).json({
      success: true,
      response: response.text(),
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("❌ Chat API Error:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to process message",
    });
  }
};
