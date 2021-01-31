import React, { createContext, useReducer } from "react"
import PropTypes from "prop-types"

const ThemeStateContext = createContext()

const ThemeDispatchContext = createContext()

const initialState = {
  theme: "dark",
}

const stateReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return { theme: state.theme === "dark" ? "light" : "dark" }
    }
    default:
      return state
  }
}

function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(stateReducer, initialState)
  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  )
}

function useThemeState() {
  const context = React.useContext(ThemeStateContext)
  if (context === undefined) {
    throw new Error("useThemeState must be used within a ThemeProvider")
  }
  return context
}
function useThemeDispatch() {
  const context = React.useContext(ThemeDispatchContext)
  if (context === undefined) {
    throw new Error("useThemeDispatch must be used within a ThemeProvider")
  }
  return context
}

ThemeProvider.propTypes = {
  children: PropTypes.object,
}

export { ThemeProvider, useThemeDispatch, useThemeState }
