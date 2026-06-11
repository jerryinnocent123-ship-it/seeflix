import { useState, useRef, useEffect } from "react";
import { Send, X, Loader } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./styles/AIModal.css";

function AIModal({ onClose }) {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Get API endpoint based on environment
  const getApiEndpoint = () => {
    if (import.meta.env.DEV) {
      return "http://localhost:5000/api/ai/chat";
    }
    return "/api/ai/chat";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message to chat
    const userMessage = {
      id: Date.now(),
      sender: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(getApiEndpoint(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputValue,
          conversationHistory: messages.map((msg) => ({
            sender: msg.sender,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message, AI Assistant is currently unavailable.");
          console.log(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to get response");
      }

      // Add AI response to chat
      const aiMessage = {
        id: Date.now() + 1,
        sender: "ai",
        content: data.response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error("❌ Chat Error:", err);
      setError(
        err.message || t("assistant_error") || "Failed to send message"
      );

      // Add error message
      const errorMessage = {
        id: Date.now() + 1,
        sender: "ai",
        content: `❌ ${err.message || t("assistant_error") || "Error occurred"}`,
        timestamp: new Date(),
        isError: true,
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-modal-overlay" onClick={onClose}>
      <div className="ai-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="ai-modal-header">
          <h2>{t("assistant_title") || "AI Assistant"}</h2>
          <button
            className="ai-modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Messages */}
        <div className="ai-modal-messages">
          {messages.length === 0 && (
            <div className="ai-modal-welcome">
              <p>{t("assistant_welcome") || "Hello! How can I help you?"}</p>
            </div>
          )}

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`ai-message ${msg.sender} ${msg.isError ? "error" : ""}`}
            >
              <div className="ai-message-content">{msg.content}</div>
            </div>
          ))}

          {isLoading && (
            <div className="ai-message ai">
              <div className="ai-message-loading">
                <Loader size={20} className="spinner" />
                <span>{t("assistant_loading") || "Thinking..."}</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form className="ai-modal-form" onSubmit={handleSendMessage}>
          <input
            type="text"
            className="ai-modal-input"
            placeholder={
              t("assistant_placeholder") || "Ask me something..."
            }
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
          />
          <button
            type="submit"
            className="ai-modal-send-btn"
            disabled={isLoading || !inputValue.trim()}
            aria-label="Send message"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default AIModal;
