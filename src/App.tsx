import React from "react";
import AppContextProvider from "./contexts/AppContext";
import Routes from "./routes";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <AppContextProvider>
      <GlobalStyle />
      <Routes />
    </AppContextProvider>
  );
}

export default App;
