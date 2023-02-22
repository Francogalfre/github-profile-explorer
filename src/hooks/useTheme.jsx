import React, { useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("dark");

  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return { isDarkTheme, toggleTheme };
}


