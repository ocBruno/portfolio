import Head from "next/head"
import styled, { ThemeProvider } from "styled-components"
import { QueryClient, QueryClientProvider } from "react-query"

import TopStoryContainer from "../components/widgets/TopStoryContainer"
import SearchContainer from "../components/search/SearchContainer"
import MenuContainer from "../components/menu/MenuContainer"
import MenuIcon from "../components/icons/MenuIcon"
import { useState } from "react"
import ConfigurationsContainer from "../components/configurations/ConfigurationsContainer"
import { useThemeState } from "../contexts/theme-context"
import Container from "../components/themed/ThemedContainer"

const PageContainer = styled.div`
  display: flex;
`
const PageContentContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 2.4rem;
  padding-top: 2.4rem;
  width: 100vw;
  min-height: 100vh;
`
// initiate query client and pass to provider
// for queries to be accessible within children components
const queryClient = new QueryClient()

export default function ReactQuery() {
  const { theme } = useThemeState()
  console.log(theme)
  const [isMenuActive, setIsMenuActive] = useState(false)

  const [isConfigurationsActive, setIsConfigurationsActive] = useState(false)

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive)
  }

  const toggleConfigurations = () => {
    setIsConfigurationsActive(!isConfigurationsActive)
    if (isMenuActive) {
      toggleMenu()
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ shade: theme }}>
        <PageContainer>
          <Head>
            <title>Top global articles</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <MenuContainer
            toggleMenu={toggleMenu}
            toggleConfigurations={toggleConfigurations}
            isActive={isMenuActive}
          />
          <ConfigurationsContainer
            toggleConfigurations={toggleConfigurations}
            isActive={isConfigurationsActive}
          />
          <PageContentContainer>
            <SearchContainer />
            <MenuIcon onClick={() => toggleMenu()} />

            <TopStoryContainer />
          </PageContentContainer>
        </PageContainer>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
