import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { StyledThemeButton } from "./_Styled"

const ThemeButton = ({ toggleTheme, isDarkTheme }) => {

  return (
    <StyledThemeButton onClick={toggleTheme}>
      Change to
      {isDarkTheme ? " Light Mode" : " Dark Mode"}
    </StyledThemeButton>
  );
};

export default ThemeButton;
