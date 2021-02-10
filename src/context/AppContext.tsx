import React, { createContext, useReducer } from "react";

import AppReducer, { initialState } from "./AppReducer";

export const AppContext = createContext(null as any);

export default function AppContextProvider({ children }: any) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
