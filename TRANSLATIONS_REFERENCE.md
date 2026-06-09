# Translation Keys Reference

## New Translation Keys (Added for AI Assistant & Dark Mode)

### Dark Mode Keys
```json
{
  "dark_mode": "Toggle dark mode",
  "light_mode": "Toggle light mode"
}
```

### AI Assistant Keys
```json
{
  "assistant_title": "AI Assistant header title",
  "assistant_placeholder": "Input field placeholder",
  "assistant_send": "Send button label",
  "assistant_close": "Close button label",
  "assistant_loading": "Loading indicator text",
  "assistant_error": "Error message",
  "assistant_welcome": "Welcome message in empty chat"
}
```

## Complete Translation Coverage

### English (en/common.json)
✅ 9 new keys added
✅ Total keys: 56

### French (fr/common.json)
✅ 9 new keys added (French translations)
✅ Total keys: 56

### Haitian Creole (ht/common.json)
✅ 9 new keys added (Creole translations)
✅ Total keys: 56

## Usage in Components

### AIAssistant Component
```javascript
import { useTranslation } from "react-i18next";

const { t } = useTranslation();

// In JSX
<h2>{t("assistant_title")}</h2>
<input placeholder={t("assistant_placeholder")} />
```

### DarkMode Component
```javascript
title={isDark ? t("light_mode") : t("dark_mode")}
```

### AIModal Component
```javascript
title={t("assistant_title")}
placeholder={t("assistant_placeholder")}
span>{t("assistant_loading")}</span>
p>{t("assistant_welcome")}</p>
```

## Verifying Translations

To verify all keys are present:

```bash
# Check French translations
grep -o '"[^"]*":' src/locales/fr/common.json | wc -l

# Check English translations
grep -o '"[^"]*":' src/locales/en/common.json | wc -l

# Check Haitian Creole translations
grep -o '"[^"]*":' src/locales/ht/common.json | wc -l
```

All three files should have 56 keys.

## Language Switcher Integration

The LanguageSwitcher component in Navbar automatically:
- Changes language for all new keys
- Updates UI dynamically
- Saves language preference

## No Hard-Coded Text

✅ All user-visible text is internationalized:
- ✅ Modal titles
- ✅ Input placeholders
- ✅ Button labels
- ✅ Welcome messages
- ✅ Loading states
- ✅ Error messages
- ✅ Toggle labels

## Dynamic Translation Updates

When user changes language:
1. i18next detects change
2. All components with `useTranslation()` re-render
3. New translations applied immediately
4. No page refresh needed

---

**All 9 new keys are available in 3 languages (EN, FR, HT)**
