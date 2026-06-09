import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenerativeAI } from "@google/generative-ai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });
dotenv.config({ path: path.resolve(__dirname, ".env") });

const apiKey = process.env.VITE_API_KEY_GEMINI || process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("❌ Gemini API key is not set. Expected VITE_API_KEY_GEMINI or GEMINI_API_KEY in environment variables.");
}

const client = new GoogleGenerativeAI(apiKey);

/**
 * Send a message to Gemini and get a response
 * @param {string} userMessage - The user's message
 * @param {Array} conversationHistory - Previous messages for context
 * @returns {Promise<string>} - The AI response
 */
export const sendMessageToGemini = async (userMessage, conversationHistory = []) => {
  try {
    if (!apiKey) {
      throw new Error("API key is not configured");
    }

    const model = client.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Format conversation history for Gemini
    const history = conversationHistory.map((msg) => ({
      role: msg.sender === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    // Create the message with context
    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 1024,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("❌ Gemini Service Error:", error);
    throw new Error(
      error.message || "Failed to get response from Gemini AI"
    );
  }
};

/**
 * Analyze user request for movie/show recommendations
 * @param {string} userMessage - The user's message
 * @returns {Promise<Object>} - Analysis with genre and type
 */
export const analyzeUserRequest = async (userMessage) => {
  try {
    const model = client.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `Analyze this user request and extract information about what they're looking for.
    Return a JSON object with these fields:
    - intent: "search" or "recommendation" or "info"
    - type: "movie" or "show" or "both"
    - genres: array of genres (e.g., ["action", "thriller"])
    - query: the main search term
    
    User request: "${userMessage}"
    
    Return ONLY valid JSON, no other text.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Extract JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }

    return {
      intent: "info",
      type: "both",
      genres: [],
      query: userMessage,
    };
  } catch (error) {
    console.error("❌ Analysis Error:", error);
    return {
      intent: "info",
      type: "both",
      genres: [],
      query: userMessage,
    };
  }
};

export default {
  sendMessageToGemini,
  analyzeUserRequest,
};
