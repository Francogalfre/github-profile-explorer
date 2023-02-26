import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem('Theme') || 'dark');

  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  useEffect(() => {
    localStorage.setItem('Theme', theme)
  }, [theme])

  return { isDarkTheme, toggleTheme };
}
