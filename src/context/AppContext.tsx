import React, { createContext, useReducer, ReactNode } from 'react'

import AppReducer, { initialState } from './AppReducer'

export const AppContext = createContext(null as any)

export default function AppContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
