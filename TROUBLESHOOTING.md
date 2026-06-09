# 🔧 Troubleshooting Guide

## ❌ Common Issues & Solutions

---

## 🤖 AI Assistant Issues

### Issue: "Modal doesn't open when clicking button"

**Diagnosis:**
- Check browser console for JavaScript errors
- Verify AIAssistant component is imported in App.jsx

**Solution:**
1. Clear cache: `Ctrl+Shift+Delete` (Chrome)
2. Check `src/App.jsx` line 5: `import AIAssistant from "./components/AIAssistant";`
3. Check `src/App.jsx` line 22: `<AIAssistant />`
4. Restart dev server: `npm run dev`

---

### Issue: "Chat not responding / stuck on 'Thinking...'"

**Diagnosis:**
- API key not configured
- Network request failing
- API quota exceeded

**Solutions:**

1. **Check API Key:**
```bash
# In terminal, check .env file
cat .env | grep VITE_API_KEY_GEMINI
```
If empty, add your key from https://ai.google.dev

2. **Check Network Request:**
- Open DevTools: `F12`
- Go to Network tab
- Click send message in AI modal
- Look for POST request to `/api/ai/chat`
- Check response status:
  - ✅ 200 = Success
  - ❌ 500 = API error
  - ❌ 401 = Invalid API key
  - ❌ 429 = Rate limited

3. **Check API Limit:**
- Visit https://ai.google.dev/pricing
- Check your usage quota
- If exceeded, wait or upgrade plan

4. **Restart Dev Server:**
```bash
npm run dev
```

---

### Issue: "API calls not reaching the server"

**For Development (localhost:5000):**
```bash
# Option 1: Use Vercel Functions (api/)
# No additional setup needed

# Option 2: Run local server (optional)
cd server
npm install
node server.js
```

**For Production (Vercel):**
- Verify API routes exist in `api/ai/chat.js` and `api/ai/analyze.js`
- Check Vercel deployment logs
- Verify `VITE_API_KEY_GEMINI` is set in Vercel dashboard

---

### Issue: "Wrong endpoint being called"

**Check which endpoint is used:**

In `src/components/AIModal.jsx`, line 35-40:
```javascript
const getApiEndpoint = () => {
  if (import.meta.env.DEV) {
    return "http://localhost:5000/api/ai/chat";
  }
  return "/api/ai/chat";
};
```

- ✅ During `npm run dev` → Uses localhost:5000
- ✅ During production → Uses relative path (/api/ai/chat)

---

### Issue: "CORS errors in console"

**Error Example:**
```
Access to XMLHttpRequest at 'http://localhost:5000' blocked by CORS policy
```

**Solution:**
Verify CORS headers in API response:

```bash
curl -X OPTIONS http://localhost:5000/api/ai/chat \
  -H "Origin: http://localhost:5173" \
  -v
```

Should see:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

---

### Issue: "Message history not showing"

**Diagnosis:**
- Messages stored in React state (session only)
- Closing modal clears history

**Expected Behavior:**
- ✅ Messages persist while modal is open
- ✅ Messages clear when modal closes
- ❌ Messages do NOT persist across page reloads (by design)

**If you want persistence:**
Add localStorage in `AIModal.jsx`:
```javascript
useEffect(() => {
  localStorage.setItem('aiMessages', JSON.stringify(messages));
}, [messages]);
```

---

## 🌓 Dark Mode Issues

### Issue: "Dark mode toggle not working"

**Diagnosis:**
- CSS not loaded
- localStorage issue
- Element not found

**Solution:**

1. **Check CSS file exists:**
```bash
ls -la src/components/styles/DarkMode.css
```

2. **Check component imported in Navbar:**
```javascript
// src/components/Navbar.jsx line 4
import DarkMode from "./DarkMode";

// Line 49
<DarkMode />
```

3. **Clear cache and reload:**
- Press `Ctrl+Shift+Delete`
- Press `F5` to hard reload

---

### Issue: "Dark mode doesn't persist after refresh"

**Diagnosis:**
- localStorage disabled
- Browser in private/incognito mode

**Solution:**

1. **Enable localStorage:**
```javascript
// Test in console
localStorage.setItem('test', 'value');
```

2. **Check saved preference:**
```javascript
// In console
localStorage.getItem('seeflix-theme')
```

Should return: `"dark"` or `"light"`

3. **For private/incognito mode:**
- localStorage doesn't work
- Add fallback to system preference (already in code)

---

### Issue: "Dark mode makes text unreadable"

**Check contrast ratios:**
- Open DevTools: `F12`
- Right-click element → Inspect
- Check if text has proper contrast

**Affected Elements to Check:**
- Form inputs
- Links
- Buttons
- Modal text

**Solution:**
Edit `src/components/styles/DarkMode.css` to adjust colors.

---

### Issue: "Only part of the app is dark"

**Diagnosis:**
- CSS variables not applied globally
- Component has inline styles
- CSS specificity issue

**Solution:**

1. **Verify CSS variables are in DarkMode.css:**
```css
:root[data-theme="dark"] {
  --bg-primary: #111827;
  --text-primary: #f3f4f6;
  /* etc */
}
```

2. **Check if old colors are overriding:**
```bash
grep -r "background: " src/components/styles/ | head -10
```

3. **Update specific component CSS:**
Add to component CSS:
```css
:root[data-theme="dark"] .your-component {
  background: var(--bg-primary);
  color: var(--text-primary);
}
```

---

## 📱 Responsive Design Issues

### Issue: "Horizontal scroll on mobile"

**Diagnosis:**
- Element wider than viewport
- Padding/margin too large
- Font size too big

**Check with DevTools:**
1. Open DevTools: `F12`
2. Toggle Device Toolbar: `Ctrl+Shift+M`
3. Select mobile device
4. Check for red overflow indicators

**Solution:**
1. Find overflowing element
2. Reduce width or padding
3. Use `max-width: 100vw` on body

---

### Issue: "Modal doesn't fit on small screens"

**Check viewport:**
```javascript
// In console
window.innerWidth // Should be ~320px on small phones
window.innerHeight
```

**Mobile CSS breakpoint in AIModal.css:**
```css
@media (max-width: 425px) {
  .ai-modal {
    height: 75vh;
    /* adjustments */
  }
}
```

If modal is still too tall, adjust `height` value.

---

### Issue: "Buttons too small to tap"

**WCAG guideline:** Tap targets should be at least 44x44 pixels

**Check button size:**
```bash
# In DevTools, inspect button
# Look for width/height in computed styles
```

**Increase size in CSS:**
```css
.button {
  min-width: 44px;
  min-height: 44px;
  padding: 12px 16px;
}
```

---

## 🌍 Translation Issues

### Issue: "Text shows key name instead of translation"

**Example:** `assistant_title` shows as `[object Object]`

**Diagnosis:**
- Key missing from locale file
- Wrong key name in component
- i18next not initialized

**Solution:**

1. **Verify key exists:**
```bash
grep "assistant_title" src/locales/en/common.json
```

Should show:
```json
"assistant_title": "Seeflix AI Assistant",
```

2. **Fix typo in component:**
```javascript
// Wrong
t("assitant_title") // typo

// Right
t("assistant_title")
```

3. **Restart dev server:**
```bash
npm run dev
```

---

### Issue: "Translation doesn't update when switching language"

**Diagnosis:**
- Component not using `useTranslation`
- Language change not detected

**Solution:**

1. **Verify component uses hook:**
```javascript
// Must be in component
const { t, i18n } = useTranslation();

// In JSX
{t("key_name")}
```

2. **Check LanguageSwitcher triggers update:**
```bash
# In DevTools console
i18n.changeLanguage('fr')
```

Should update all text immediately.

---

### Issue: "Only English shows, other languages don't load"

**Diagnosis:**
- Locale file not found
- File not imported in i18n.js
- JSON syntax error

**Solution:**

1. **Verify files exist:**
```bash
ls -la src/locales/en/common.json
ls -la src/locales/fr/common.json
ls -la src/locales/ht/common.json
```

2. **Check imports in `src/i18n.js`:**
```javascript
import translationFR from './locales/fr/common.json';
import translationEN from './locales/en/common.json';
import translationHT from './locales/ht/common.json';
```

3. **Verify JSON syntax:**
```bash
npm install -g jsonlint
jsonlint src/locales/fr/common.json
```

---

## 🚀 Build & Deployment Issues

### Issue: "Build fails with error"

**Step 1: Clear cache**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Step 2: Check specific error**
```bash
npm run build 2>&1 | grep -i error
```

**Common errors:**

**"Cannot find module '@google/generative-ai'"**
```bash
npm install @google/generative-ai
```

**"Import statement outside a module"**
- Verify `package.json` has `"type": "module"`

**"ESLint error"**
```bash
npm run lint -- --fix
npm run build
```

---

### Issue: "Vercel deployment fails"

**Check Vercel build logs:**
1. Go to https://vercel.com
2. Select project
3. Click "Deployments"
4. Click failed deployment
5. View build logs

**Common fixes:**

1. **Missing environment variable:**
   - Add `VITE_API_KEY_GEMINI` in Vercel dashboard
   - Redeploy

2. **API Key invalid:**
   - Get new key from https://ai.google.dev
   - Update in Vercel dashboard

3. **Node version mismatch:**
   - Specify Node version in `vercel.json`

---

### Issue: "App works locally but not on Vercel"

**Diagnosis:**
- API endpoint mismatch
- Environment variables not set
- Feature not supported on Vercel

**Solution:**

1. **Check API endpoint:**
```javascript
// Should use relative path on Vercel
return "/api/ai/chat"; // Not http://localhost:5000
```

2. **Verify env var is set:**
```bash
# In Vercel dashboard
Settings → Environment Variables
VITE_API_KEY_GEMINI = your_key
```

3. **Check API route exists:**
```bash
# File should exist
api/ai/chat.js
api/ai/analyze.js
```

---

### Issue: "Rate limited on Vercel"

**Symptom:** API returns 429 (Too Many Requests)

**Cause:** Gemini API quota exceeded

**Solution:**

1. **Check usage:**
- Visit https://ai.google.dev/pricing
- View current usage

2. **Upgrade plan:**
- Switch to paid plan
- Or wait until quota resets

3. **Implement rate limiting:**
```javascript
// Add delay between requests
await new Promise(resolve => setTimeout(resolve, 1000));
```

---

## 🔐 Security Issues

### Issue: "API key exposed in code"

**Check for exposures:**
```bash
grep -r "sk-" src/
```

Should find nothing. Key should only be in `.env`

**If exposed:**
1. Regenerate key immediately at https://ai.google.dev
2. Revoke old key
3. Commit `.env` to `.gitignore`

---

### Issue: ".env file uploaded to GitHub"

**Check git history:**
```bash
git log --all --oneline -- .env
```

**Fix:**

1. **Regenerate API key** (old one might be compromised)

2. **Remove from git:**
```bash
git rm --cached .env
echo ".env" >> .gitignore
git add .gitignore
git commit -m "Remove .env from version control"
git push
```

3. **BFG Repo-Cleaner (advanced):**
```bash
brew install bfg
bfg --delete-files .env
git reflog expire --expire=now --all && git gc --prune=now --aggressive
git push --force
```

---

## 🆘 Still Having Issues?

### Debug Mode

1. **Enable verbose logging:**
```javascript
// In AIModal.jsx
console.log('API Endpoint:', getApiEndpoint());
console.log('Message:', inputValue);
console.log('History:', messages);
```

2. **Check DevTools:**
- Open: `F12`
- Go to Console tab
- Look for error messages
- Check Network tab for API calls

3. **Inspect elements:**
- Right-click element
- Select "Inspect"
- Check computed styles
- Check HTML attributes

---

### Get Help

1. **Check documentation:**
   - [AI_ASSISTANT_SETUP.md](AI_ASSISTANT_SETUP.md)
   - [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)

2. **Check component source:**
   - `src/components/AIAssistant.jsx`
   - `src/components/AIModal.jsx`
   - `src/components/DarkMode.jsx`

3. **API Documentation:**
   - Gemini: https://ai.google.dev/docs
   - React: https://react.dev
   - i18next: https://react.i18next.com

---

**Last Updated:** 2026-06-09  
**Version:** 1.0.0
