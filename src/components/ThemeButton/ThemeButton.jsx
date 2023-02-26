import React from "react";

// Styled  Components
import { StyledThemeButton } from "./_Styled";

const ThemeButton = ({ toggleTheme, isDarkTheme }) => {
  return (
    <StyledThemeButton onClick={toggleTheme}>
      Change to
      {isDarkTheme ? " Light Mode" : " Dark Mode"}
    </StyledThemeButton>
  );
};

export default ThemeButton;
