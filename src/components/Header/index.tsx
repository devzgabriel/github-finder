import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { AppContext } from "../../context/AppContext";

import { Text, ExampleDiv } from "../../styles/global";
import { Header, HomeButton } from "./styles";

export default function Button() {
  const history = useHistory();

  const { state, dispatch } = useContext(AppContext);
  const { colors } = useContext(ThemeContext);

  function handleToggleTheme() {
    dispatch({ type: "UPDATE_THEME", payload: null });
  }

  function handleGoHome() {
    history.push("/");
  }

  return (
    <Header>
      <HomeButton onClick={handleGoHome}>Ir para Home</HomeButton>

      <ExampleDiv>
        <Text font="dark-text">Dark Mode</Text>
        <Switch
          onChange={handleToggleTheme}
          checked={state.theme === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onColor={colors.secundary}
          offColor={colors.primary}
          offHandleColor={colors.primary}
        />
      </ExampleDiv>
    </Header>
  );
}
