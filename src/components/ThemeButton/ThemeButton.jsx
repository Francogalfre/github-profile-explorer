import React from "react";

// Styled  Components
import { Switch, Input, ButtonTheme, Icon } from "./Styled";

// Icons
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"

const ThemeButton = ({ toggleTheme, isDarkTheme }) => {
  return (
    <>
      <ButtonTheme>
        <Icon><BsFillSunFill /></Icon>

        <div>
          <Input type="checkbox" id="btn-switch" onChange={toggleTheme} checked={isDarkTheme ? true : false} />
          <Switch className="switch" htmlFor="btn-switch" ></Switch>
        </div>

        <Icon><BsFillMoonFill /></Icon>
      </ButtonTheme>

    </>
  );
};

export default ThemeButton;
