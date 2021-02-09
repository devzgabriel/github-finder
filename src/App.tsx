import React from "react";
import AppContextProvider from "./contexts/AppContext";
import Routes from "./routes";

function App() {
  return (
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  );
}

export default App;
