import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { AppContext } from "../../context/AppContext";

import { Text, ThemeSwitcher } from "../../styles/global";

import { Header, HomeButton } from "./styles";

export default function Button() {
  const { state, dispatch } = useContext(AppContext);
  const { colors } = useContext(ThemeContext);

  function handleToggleTheme() {
    dispatch({ type: "UPDATE_THEME", payload: null });
  }

  return (
    <Header>
      <HomeButton>Ir para Home</HomeButton>

      <ThemeSwitcher>
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
      </ThemeSwitcher>
    </Header>
  );
}
