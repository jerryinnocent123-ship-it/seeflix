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

    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({
        success: false,
        error: "Message cannot be empty",
      });
    }

    const client = new GoogleGenerativeAI(apiKey);
    const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Analyze this user request and extract information about what they're looking for.
    Return a JSON object with these fields:
    - intent: "search" or "recommendation" or "info"
    - type: "movie" or "show" or "both"
    - genres: array of genres (e.g., ["action", "thriller"])
    - query: the main search term
    
    User request: "${message}"
    
    Return ONLY valid JSON, no other text.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Extract JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const analysis = jsonMatch
      ? JSON.parse(jsonMatch[0])
      : {
          intent: "info",
          type: "both",
          genres: [],
          query: message,
        };

    return res.status(200).json({
      success: true,
      analysis: analysis,
    });
  } catch (error) {
    console.error("❌ Analyze API Error:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to analyze request",
    });
  }
};
