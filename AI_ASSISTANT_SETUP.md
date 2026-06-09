# 🤖 Seeflix AI Assistant Setup Guide

## Overview

This document explains the new AI Assistant features added to Seeflix:
- **AI Assistant**: Powered by Google Gemini API
- **Dark Mode**: System-wide dark theme
- **Responsive Design**: Optimized for all devices

---

## 🚀 Quick Start

### 1. Environment Setup

Add your Gemini API key to `.env`:

```bash
VITE_API_KEY_GEMINI=your_gemini_api_key_here
```

Get your API key from: https://ai.google.dev

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

---

## 📁 New Project Structure

```
seeflix/
├── api/
│   └── ai/
│       ├── chat.js          # Vercel Function: Chat endpoint
│       └── analyze.js       # Vercel Function: Analysis endpoint
│
├── server/                  # Optional local server
│   ├── services/
│   │   └── geminiService.js
│   ├── controllers/
│   │   └── aiController.js
│   ├── routes/
│   │   └── aiRoutes.js
│   └── server.js
│
├── src/
│   ├── components/
│   │   ├── AIAssistant.jsx  # Floating button
│   │   ├── AIModal.jsx      # Chat modal
│   │   ├── DarkMode.jsx     # Theme toggle
│   │   └── styles/
│   │       ├── AIAssistant.css
│   │       ├── AIModal.css
│   │       └── DarkMode.css
│   │
│   └── locales/
│       ├── en/common.json
│       ├── fr/common.json
│       └── ht/common.json
```

---

## 🧠 AI Assistant Features

### Floating Button
- Located bottom-right corner
- Always visible and accessible
- Gradient purple design
- Opens AI modal when clicked

### AI Modal
- Full conversation history
- Message input field
- Loading indicator
- Error handling
- Responsive on all screen sizes
- Supports multiple languages

### Backend (Vercel Functions)

**Chat Endpoint**: `POST /api/ai/chat`
```json
{
  "message": "Show me action movies",
  "conversationHistory": [
    {
      "sender": "user",
      "content": "Hi"
    }
  ]
}
```

**Response**:
```json
{
  "success": true,
  "response": "I'll help you find action movies...",
  "timestamp": "2026-06-09T10:00:00Z"
}
```

**Analyze Endpoint**: `POST /api/ai/analyze`
```json
{
  "message": "I want funny movies"
}
```

**Response**:
```json
{
  "success": true,
  "analysis": {
    "intent": "recommendation",
    "type": "movie",
    "genres": ["comedy"],
    "query": "funny movies"
  }
}
```

---

## 🌓 Dark Mode Features

### Toggle Button
- Located in navbar next to language switcher
- Sun/Moon icons
- Smooth transitions
- Saves preference to localStorage

### Supported Elements
- ✅ Background colors
- ✅ Text colors
- ✅ Cards and containers
- ✅ Forms and inputs
- ✅ Buttons and links
- ✅ Modals and overlays
- ✅ AI Assistant components
- ✅ Navigation bar

### Manual Usage
```javascript
// Toggle dark mode programmatically
const html = document.documentElement;
html.setAttribute("data-theme", "dark");

// Or remove for light mode
html.removeAttribute("data-theme");
```

---

## 🌍 Internationalization

### New Translation Keys

**English** (`en/common.json`):
```json
{
  "dark_mode": "Dark mode",
  "light_mode": "Light mode",
  "assistant_title": "Seeflix AI Assistant",
  "assistant_placeholder": "Ask me a question about movies...",
  "assistant_loading": "Thinking...",
  "assistant_error": "An error occurred",
  "assistant_welcome": "Hello! I'm your Seeflix AI Assistant..."
}
```

**French** (`fr/common.json`):
```json
{
  "dark_mode": "Mode sombre",
  "light_mode": "Mode clair",
  "assistant_title": "Assistant IA Seeflix",
  "assistant_placeholder": "Posez-moi une question sur les films...",
  "assistant_loading": "Je réfléchis...",
  "assistant_error": "Une erreur s'est produite",
  "assistant_welcome": "Bonjour ! Je suis votre assistant IA Seeflix..."
}
```

**Haitian Creole** (`ht/common.json`):
```json
{
  "dark_mode": "Mòd fomèn",
  "light_mode": "Mòd klè",
  "assistant_title": "Asistan AI Seeflix",
  "assistant_placeholder": "Poze m yon kesyon sou fim yo...",
  "assistant_loading": "M ap panse...",
  "assistant_error": "Yon erè ensidan",
  "assistant_welcome": "Bonjou! Mwen se asistan AI Seeflix ou..."
}
```

---

## 📱 Responsive Breakpoints

All new components are tested on:
- 📞 **320px** - Small phones
- 📱 **375px** - Standard phones
- 📱 **425px** - Large phones
- 💻 **768px** - Tablets
- 🖥️ **1024px** - Laptops
- 🖥️ **1440px** - Desktops

**Features**:
- ✅ No horizontal overflow
- ✅ No elements cut off
- ✅ Touch-friendly buttons
- ✅ Optimized spacing
- ✅ Readable text sizes

---

## 🔧 Local Development (Optional)

To run the server locally for testing:

```bash
cd server
npm install
node server.js
```

The server will start on `http://localhost:5000`

**Note**: For Vercel production, this is not needed.

---

## 🚀 Deployment (Vercel)

1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variable: `VITE_API_KEY_GEMINI`
4. Deploy!

The app will automatically use:
- `api/ai/chat` for chat messages
- `api/ai/analyze` for request analysis
- Dark mode with localStorage persistence
- All translations for selected language

---

## ✅ Verification Checklist

Before deploying:

```bash
# Run linter
npm run lint

# Build for production
npm run build

# Check for errors
npm run build 2>&1 | grep -i error
```

**Expected Results**:
- ✅ No ESLint errors
- ✅ Build completes successfully
- ✅ All imports resolve
- ✅ No console errors
- ✅ Responsive design works

---

## 🐛 Troubleshooting

### AI Assistant not responding
- Check that `VITE_API_KEY_GEMINI` is set
- Verify API key is valid in Google AI Studio
- Check network tab for failed requests

### Dark mode not persisting
- Check if localStorage is enabled
- Try clearing browser cache
- Check if data-theme attribute is being set

### Build errors
- Delete `node_modules` and `.npm`
- Run `npm install` again
- Clear Vite cache

---

## 📝 Notes

- The AI Assistant uses Gemini 1.5 Flash model
- Conversations are not stored on server
- Each chat session is independent
- Dark mode preference is saved locally
- All UI text is internationalized

---

## 🔗 Resources

- Gemini API Docs: https://ai.google.dev/docs
- React i18next: https://react.i18next.com/
- Lucide Icons: https://lucide.dev/
- Vercel Docs: https://vercel.com/docs

---

**Version**: 1.0.0  
**Last Updated**: 2026-06-09
