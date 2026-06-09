import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import aiRoutes from "./routes/aiRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootEnvPath = path.resolve(__dirname, "../.env");
const serverEnvPath = path.resolve(__dirname, ".env");

dotenv.config({ path: rootEnvPath });
dotenv.config({ path: serverEnvPath });
console.log(`ℹ️ Loaded env files: ${rootEnvPath}, ${serverEnvPath}`);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/ai", aiRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
    path: req.path,
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err);
  res.status(500).json({
    success: false,
    error: err.message || "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`✅ AI Server running on http://localhost:${PORT}`);
  console.log(`📝 API Key configured: ${process.env.VITE_API_KEY_GEMINI ? "Yes ✓" : "No ✗"}`);
});

export default app;
