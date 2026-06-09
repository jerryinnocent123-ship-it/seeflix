import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import AIModal from "./AIModal";
import "./styles/AIAssistant.css";

function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="ai-assistant-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Assistant"
        title="AI Assistant"
      >
        <MessageCircle size={24} />
      </button>

      {isOpen && <AIModal onClose={() => setIsOpen(false)} />}
    </>
  );
}

export default AIAssistant;
