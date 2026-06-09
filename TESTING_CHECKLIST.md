# ✅ Testing Checklist - Seeflix AI Assistant

Complete this checklist to verify all features work correctly.

## 🎯 Pre-Test Setup

- [ ] Install dependencies: `npm install`
- [ ] Create `.env` file with `VITE_API_KEY_GEMINI=your_key`
- [ ] Get API key from https://ai.google.dev
- [ ] Run `npm run build` to check for errors
- [ ] Run `npm run dev` to start dev server

---

## 🤖 AI Assistant Tests

### Floating Button
- [ ] Button appears bottom-right corner on all pages
- [ ] Button is visible even when scrolling
- [ ] Button doesn't hide behind other elements
- [ ] Hover effect works (scales up, shadow expands)
- [ ] Click opens modal
- [ ] Correct icon displayed (MessageCircle)

### Modal Appearance
- [ ] Modal opens smoothly (slide-up animation)
- [ ] Modal has gradient header (purple/violet)
- [ ] "X" close button visible and works
- [ ] Modal closes when X is clicked
- [ ] Modal closes when clicking outside (overlay)
- [ ] Modal is responsive:
  - [ ] Desktop: ~500px width, 600px height
  - [ ] Tablet: 95% width, 70vh height
  - [ ] Mobile: 100% width, 75vh height

### Chat Functionality
- [ ] Input field has correct placeholder
- [ ] Send button enabled when text is entered
- [ ] Send button disabled when input is empty
- [ ] Pressing Enter sends message
- [ ] User message appears in correct format (right-aligned, blue/purple)
- [ ] AI response appears (left-aligned, white/gray)
- [ ] Loading indicator shows while waiting for response
- [ ] Messages scroll to bottom automatically
- [ ] Message history persists during session

### Error Handling
- [ ] Check network tab for API calls
- [ ] API calls go to `/api/ai/chat` (or localhost:5000 for dev)
- [ ] If API fails, error message displays in red
- [ ] Error doesn't crash the app
- [ ] User can continue chatting after error

### Welcome Message
- [ ] Welcome message shows in empty chat
- [ ] Message is localized in current language
- [ ] Message disappears when first message sent

### Translations
- [ ] English: "Seeflix AI Assistant"
- [ ] French: "Assistant IA Seeflix"
- [ ] Haitian: "Asistan AI Seeflix"
- [ ] Button labels translated
- [ ] Placeholders translated
- [ ] Error messages translated

---

## 🌓 Dark Mode Tests

### Toggle Button
- [ ] Button appears in navbar next to language switcher
- [ ] Button shows Moon icon (light mode) or Sun icon (dark mode)
- [ ] Click toggles theme
- [ ] Hover effect works (scales, background changes)
- [ ] Icon rotates on hover

### Theme Application - Light Mode
- [ ] Background is white/light gray
- [ ] Text is dark/black
- [ ] Navigation bar is dark
- [ ] Cards have light backgrounds
- [ ] Buttons are visible and readable
- [ ] Modal has light theme
- [ ] Links are blue/purple

### Theme Application - Dark Mode
- [ ] Background is dark (almost black)
- [ ] Text is light/white
- [ ] Navigation bar is dark gray
- [ ] Cards are dark gray
- [ ] Buttons are visible and readable
- [ ] Modal has dark theme
- [ ] Links are lighter purple
- [ ] AI Assistant matches dark theme
- [ ] No elements become unreadable

### Persistence
- [ ] Toggle theme
- [ ] Refresh page
- [ ] Theme remains the same ✓
- [ ] Check localStorage for `seeflix-theme` key
- [ ] Close browser and reopen
- [ ] Theme is restored from localStorage

### System Preferences
- [ ] First time visit, check system dark mode preference
- [ ] On Windows: Settings > Colors > Dark/Light
- [ ] On Mac: System Preferences > General > Dark/Light
- [ ] Theme matches system on first visit

---

## 📱 Responsive Design Tests

Test on these viewport widths:

### 320px (Small Phone)
- [ ] All elements visible
- [ ] No horizontal scroll
- [ ] Button still in corner (smaller)
- [ ] Modal takes 100% width
- [ ] Text readable
- [ ] Touch targets are 44px+ (tap-friendly)

### 375px (iPhone)
- [ ] Same as 320px but more space
- [ ] Icons properly sized

### 425px (Large Phone)
- [ ] Input field visible and usable
- [ ] Send button easily clickable
- [ ] No text overflow

### 768px (Tablet)
- [ ] Modal ~95% width
- [ ] Modal height responsive
- [ ] All text readable
- [ ] Padding appropriate

### 1024px (Laptop)
- [ ] Modal ~500px width
- [ ] Modal 600px height
- [ ] Navigation bar properly laid out
- [ ] All spacing correct

### 1440px (Desktop/4K)
- [ ] Elements scale appropriately
- [ ] Not overly stretched
- [ ] Padding balanced

---

## 🌍 Internationalization Tests

### Language Switching
- [ ] Open language switcher in navbar
- [ ] Switch to English
  - [ ] All new keys in English
  - [ ] Modal title: "Seeflix AI Assistant"
- [ ] Switch to French
  - [ ] All new keys in French
  - [ ] Modal title: "Assistant IA Seeflix"
- [ ] Switch to Haitian Creole
  - [ ] All new keys in Creole
  - [ ] Modal title: "Asistan AI Seeflix"

### Missing Translations Check
- [ ] No `undefined` text in UI
- [ ] No placeholder text like "key_name"
- [ ] All labels properly translated

---

## 🎨 Design & UX Tests

### Animations
- [ ] Floating button: smooth hover/click
- [ ] Modal: smooth slide-up entrance
- [ ] Messages: smooth fade-in
- [ ] Theme toggle: smooth rotation
- [ ] No jittery animations
- [ ] Animations respect `prefers-reduced-motion`

### Colors
- [ ] Gradient colors render correctly
- [ ] Sufficient contrast for readability (WCAG AA)
- [ ] Dark mode doesn't have color conflicts
- [ ] Error messages stand out (red)

### Accessibility
- [ ] All buttons have `aria-label`
- [ ] Modal can be closed with ESC key (optional)
- [ ] Tab navigation works
- [ ] Focus states visible
- [ ] Semantic HTML used

---

## 🔗 API Integration Tests

### Chat Endpoint
```bash
curl -X POST http://localhost:5000/api/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello", "conversationHistory": []}'
```
- [ ] Returns 200 status
- [ ] Response has `success: true`
- [ ] Response has `response` field
- [ ] Response has `timestamp` field

### Analyze Endpoint
```bash
curl -X POST http://localhost:5000/api/ai/analyze \
  -H "Content-Type: application/json" \
  -d '{"message": "Show me action movies"}'
```
- [ ] Returns 200 status
- [ ] Response has `success: true`
- [ ] Response has `analysis` object
- [ ] Analysis has `intent`, `type`, `genres`, `query`

### Error Handling
- [ ] Empty message returns 400
- [ ] Missing API key returns 500
- [ ] Invalid request returns 405
- [ ] Errors have descriptive messages

---

## 🏗️ Build & Deployment Tests

### Development
- [ ] `npm run dev` starts without errors
- [ ] No console errors or warnings
- [ ] Hot reload works (edit component, saves automatically)
- [ ] All features work in dev mode

### Build
- [ ] `npm run build` completes successfully
- [ ] No build errors
- [ ] Output in `dist/` folder
- [ ] Build size reasonable

### Production Preview
- [ ] `npm run preview` shows production build
- [ ] All features work
- [ ] No errors in console
- [ ] Performance is good

### Vercel Deployment
- [ ] Push to GitHub
- [ ] Connect to Vercel
- [ ] Add `VITE_API_KEY_GEMINI` env var
- [ ] Deploy succeeds
- [ ] App loads on production URL
- [ ] AI Assistant works
- [ ] Dark mode works
- [ ] All translations work

---

## 📊 Performance Tests

### Lighthouse
- [ ] Run Chrome DevTools > Lighthouse
- [ ] Performance score > 85
- [ ] Accessibility score > 90
- [ ] Best Practices score > 85
- [ ] SEO score > 85

### Bundle Size
- [ ] Main JS bundle < 500KB
- [ ] CSS < 100KB
- [ ] Images optimized
- [ ] No unused dependencies

### Network
- [ ] API response time < 3s
- [ ] Modal opens instantly
- [ ] Smooth scrolling (60 FPS)

---

## 🔐 Security Tests

### API Key
- [ ] Key not exposed in frontend code
- [ ] Key only in server/api functions
- [ ] Key in .env (not in git)
- [ ] .gitignore includes .env

### CORS
- [ ] API endpoints have proper CORS headers
- [ ] Frontend can call API
- [ ] No cross-origin errors

### Input Validation
- [ ] Empty messages rejected
- [ ] XSS prevention (text sanitized)
- [ ] No injection vulnerabilities

---

## ✅ Final Verification

- [ ] No console errors
- [ ] No console warnings (except expected ones)
- [ ] All buttons clickable
- [ ] All links working
- [ ] All images loading
- [ ] localStorage working
- [ ] No memory leaks
- [ ] Functionality preserved (movies, trailers, etc.)

---

## 📋 Sign-Off

- [ ] All tests passed
- [ ] Ready for production
- [ ] Documentation complete
- [ ] Team notified

**Date**: ___________  
**Tester**: ___________  
**Status**: ✅ Ready to Ship

---

**Notes:**
(Add any issues or observations here)

```
_____________________________________________
_____________________________________________
_____________________________________________
```
