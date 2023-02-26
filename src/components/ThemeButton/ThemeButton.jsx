import React from "react";

// Styled  Components
import { ThemeBTN } from "./_Styled"

const ThemeButton = ({ toggleTheme, isDarkTheme }) => {

  return (
    <ThemeBTN onClick={toggleTheme}>
      Change to
      {isDarkTheme ? " Light Mode" : " Dark Mode"}
    </ThemeBTN>
  );
};

export default ThemeButton;
