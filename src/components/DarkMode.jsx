import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./styles/DarkMode.css";

function DarkMode() {
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("seeflix-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDark(shouldBeDark);
    applyTheme(shouldBeDark);
  }, []);

  const applyTheme = (dark) => {
    const html = document.documentElement;
    if (dark) {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("seeflix-theme", "dark");
    } else {
      html.removeAttribute("data-theme");
      localStorage.setItem("seeflix-theme", "light");
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    applyTheme(newTheme);
  };

  return (
    <button
      className="dark-mode-btn"
      onClick={toggleTheme}
      title={isDark ? t("light_mode") : t("dark_mode")}
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

export default DarkMode;
