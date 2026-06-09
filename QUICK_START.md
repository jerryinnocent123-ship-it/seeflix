# 🚀 Quick Start Guide

## ⚡ 5-Minute Setup

### 1️⃣ Get API Key (2 min)
```bash
# Visit: https://ai.google.dev
# Click "Get API Key"
# Create/select project
# Copy your API key
```

### 2️⃣ Configure Environment (1 min)
```bash
# In project root, create .env file
echo "VITE_API_KEY_GEMINI=your_key_here" > .env
```

### 3️⃣ Install Dependencies (1 min)
```bash
npm install
```

### 4️⃣ Start Development (1 min)
```bash
npm run dev
# Open http://localhost:5173
```

### 5️⃣ Test Features (1 min)
- ✅ Click purple button (bottom-right)
- ✅ Send message to AI
- ✅ Toggle dark mode (navbar)
- ✅ Switch language (navbar)

---

## 📂 File Structure

```
seeflix/
│
├── 📄 .env                          ← Add your API key here
├── 📄 .env.example                  ← Template for .env
├── 📄 package.json                  ← Dependencies (@google/generative-ai added)
│
├── 🗂️ src/
│   ├── 📄 App.jsx                   ← AIAssistant added
│   │
│   ├── 🗂️ components/
│   │   ├── AIAssistant.jsx          ✨ NEW - Floating button
│   │   ├── AIModal.jsx              ✨ NEW - Chat modal
│   │   ├── DarkMode.jsx             ✨ NEW - Theme toggle
│   │   ├── Navbar.jsx               ✏️ MODIFIED - Added DarkMode
│   │   └── styles/
│   │       ├── AIAssistant.css      ✨ NEW
│   │       ├── AIModal.css          ✨ NEW
│   │       ├── DarkMode.css         ✨ NEW
│   │       └── nav.css              ✏️ MODIFIED
│   │
│   └── 🗂️ locales/
│       ├── en/common.json           ✏️ MODIFIED (+9 keys)
│       ├── fr/common.json           ✏️ MODIFIED (+9 keys)
│       └── ht/common.json           ✏️ MODIFIED (+9 keys)
│
├── 🗂️ api/                          ← Vercel Serverless Functions
│   └── ai/
│       ├── chat.js                  ✨ NEW - Chat endpoint
│       └── analyze.js               ✨ NEW - Analysis endpoint
│
├── 🗂️ server/                       ← Local development server (optional)
│   ├── server.js
│   ├── services/geminiService.js
│   ├── controllers/aiController.js
│   └── routes/aiRoutes.js
│
└── 📚 Documentation/
    ├── AI_ASSISTANT_SETUP.md        ← Complete setup guide
    ├── IMPLEMENTATION_SUMMARY.md    ← What was added
    ├── TRANSLATIONS_REFERENCE.md    ← Translation keys
    ├── TESTING_CHECKLIST.md         ← Test plan
    ├── TROUBLESHOOTING.md           ← Common issues
    └── QUICK_START.md               ← This file
```

---

## 🎮 Features Overview

### 🤖 AI Assistant
```
[Floating Button]  →  [Click] →  [Modal Opens]
(purple, bottom-right)        (gradient header)
                                    ↓
                            [Chat Interface]
                            • Message history
                            • Input field
                            • Loading indicator
                            • Error handling
```

**How it works:**
1. User clicks floating button
2. Modal opens with smooth animation
3. User types message
4. Message sent to `/api/ai/chat`
5. AI response displayed
6. Conversation continues

### 🌓 Dark Mode
```
[Toggle Button] → [Moon/Sun Icon]
(in navbar)        (animated rotation)
                        ↓
              [Theme switches]
              ↓           ↓
            Light      Dark
            mode       mode
              ↓           ↓
          [Saved to localStorage]
          [Restored on page load]
```

**Affected elements:**
- Background colors
- Text colors
- Cards and containers
- Forms and inputs
- All modals
- Navigation
- Links and buttons

---

## 🔧 Common Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Linting
npm run lint             # Check for errors
npm run lint -- --fix    # Auto-fix errors

# Dependencies
npm install              # Install packages
npm update               # Update packages
```

---

## 📞 API Endpoints

### Chat
```
POST /api/ai/chat
Content-Type: application/json

{
  "message": "Show me action movies",
  "conversationHistory": [
    {"sender": "user", "content": "Hi"},
    {"sender": "ai", "content": "Hello!"}
  ]
}

Response:
{
  "success": true,
  "response": "Here are some action movies...",
  "timestamp": "2026-06-09T10:00:00Z"
}
```

### Analyze
```
POST /api/ai/analyze
Content-Type: application/json

{
  "message": "I want funny movies"
}

Response:
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

## 🌍 Language Codes

| Code | Language | Component | Status |
|------|----------|-----------|--------|
| en | English | All | ✅ |
| fr | French | All | ✅ |
| es | Spanish | Existing only | ⚠️ |
| ht | Haitian Creole | All | ✅ |

**Note:** Spanish translations not updated. Only EN, FR, HT have new keys.

---

## 🎨 Color Scheme

### Light Mode (Default)
- Background: White/Light Gray
- Text: Dark/Black
- Primary: Purple/Gradient
- Accent: Orange (#BA4F15)

### Dark Mode
- Background: #111827 (almost black)
- Text: #f3f4f6 (light gray)
- Primary: #5a67d8 (lighter purple)
- Accent: #667eea (light purple)

---

## 📱 Responsive Sizes

| Size | Device | Modal Width | Modal Height |
|------|--------|-------------|--------------|
| 320px | Small Phone | 100% | 75vh |
| 375px | iPhone | 100% | 75vh |
| 425px | Large Phone | 100% | 75vh |
| 768px | Tablet | 95% | 70vh |
| 1024px | Laptop | 500px | 600px |
| 1440px | Desktop | 500px | 600px |

---

## ✅ Deployment Checklist

### Before Vercel Deploy
```bash
☐ npm install
☐ npm run lint
☐ npm run build
☐ npm run preview
☐ Test all features locally
☐ Check mobile responsive
☐ Verify translations
```

### Vercel Dashboard Setup
```
☐ New Project → Connect GitHub repo
☐ Build Command: npm run build
☐ Output Directory: dist
☐ Environment Variables:
  - VITE_API_KEY_GEMINI = your_key
☐ Deploy
```

### Post-Deployment
```
☐ Test on production URL
☐ Verify API calls work
☐ Check dark mode
☐ Test all languages
☐ Run Lighthouse audit
```

---

## 🆘 Quick Troubleshooting

| Issue | Fix |
|-------|-----|
| Modal doesn't open | Check browser console, reload page |
| AI not responding | Verify API key in .env |
| Dark mode doesn't work | Clear cache (Ctrl+Shift+Delete) |
| Build fails | `rm -rf node_modules && npm install` |
| Vercel deploy fails | Check build logs, verify env vars |
| Text in wrong language | Check i18n.js imports |

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| [AI_ASSISTANT_SETUP.md](AI_ASSISTANT_SETUP.md) | Complete setup & features |
| [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) | What was built |
| [TESTING_CHECKLIST.md](TESTING_CHECKLIST.md) | Comprehensive test plan |
| [TROUBLESHOOTING.md](TROUBLESHOOTING.md) | Common issues & solutions |
| [TRANSLATIONS_REFERENCE.md](TRANSLATIONS_REFERENCE.md) | i18n keys reference |

---

## 🎯 Next Steps

1. ✅ **Get API Key** - https://ai.google.dev
2. ✅ **Add to .env** - `VITE_API_KEY_GEMINI=...`
3. ✅ **Run `npm install`** - Install dependencies
4. ✅ **Run `npm run dev`** - Start development
5. ✅ **Test features** - Click button, toggle dark mode
6. ✅ **Deploy to Vercel** - When ready for production

---

## 💡 Pro Tips

- 🎨 Customize colors in `/src/components/styles/DarkMode.css`
- 🌍 Update translations in `/src/locales/*/common.json`
- 📱 Test responsive design with DevTools: `F12` → `Ctrl+Shift+M`
- 🔍 Debug API in DevTools Network tab: `F12` → Network
- 📊 Check performance: DevTools → Lighthouse

---

**Ready to go!** 🚀

Start with: `npm install && npm run dev`

For more info, see [AI_ASSISTANT_SETUP.md](AI_ASSISTANT_SETUP.md)
