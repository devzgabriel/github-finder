import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { AppContext } from "./context/AppContext";
import Routes from "./routes";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

function App() {
  const {
    state: { theme },
  } = useContext(AppContext);

  const actualTheme = theme === "light" ? light : dark;

  return (
    <ThemeProvider theme={actualTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
