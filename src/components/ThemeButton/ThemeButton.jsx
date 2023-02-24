import React from "react";
import { useTheme } from "styled-components";

const ThemeButton = () => {
  const { toggleTheme, isDarkTheme } = useTheme();

  return (
    <ThemeButton onClick={toggleTheme}>
      Change to
      {isDarkTheme ? " Light Mode" : " Dark Mode"}
    </ThemeButton>
  );
};

export default ThemeButton;
