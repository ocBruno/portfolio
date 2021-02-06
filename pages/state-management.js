import Head from "next/head"
import styled from "styled-components"

import { useThemeDispatch, useThemeState } from "../contexts/theme-context"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2.4rem;
  background: ${(props) =>
    props.theme === "dark" ? "rgb(110, 110, 110)" : "rgb(252, 252, 252)"};
`
const PageHeader = styled.header`
  color: ${(props) =>
    props.theme === "dark" ? "rgb(252, 252, 252)" : "rgb(110, 110, 110)"};
  margin-bottom: 1rem;
`

const ToggleThemeButton = styled.button`
  font-size: 11px;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 3px 9px;
  border-width: 1px;
  border-color: ${(props) =>
    props.theme === "dark" ? "rgb(252, 252, 252)" : "rgb(110, 110, 110)"};
  color: ${(props) =>
    props.theme === "dark" ? "rgb(252, 252, 252)" : "rgb(110, 110, 110)"};
  background: ${(props) =>
    props.theme === "dark" ? "rgb(110, 110, 110)" : "rgb(252, 252, 252)"};
`

export default function StateManagement() {
  const { theme } = useThemeState()
  const dispatch = useThemeDispatch()
  return (
    <PageContainer theme={theme}>
      <Head>
        <title>State management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader theme={theme}>Active theme: {theme}</PageHeader>
      <ToggleThemeButton
        theme={theme}
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      >
        Toggle theme
      </ToggleThemeButton>
    </PageContainer>
  )
}
