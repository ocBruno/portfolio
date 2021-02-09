import Head from "next/head"
import PropTypes from "prop-types"
import { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import { QueryClient, QueryClientProvider } from "react-query"

import Container from "../components/themed/ThemedContainer"
import SearchContainer from "../components/search/SearchContainer"
import MenuContainer from "../components/menu/MenuContainer"
import MenuIcon from "../components/icons/MenuIcon"
import ConfigurationsContainer from "../components/configurations/ConfigurationsContainer"
import TopArticlesContainer from "../components/widgets/TopArticlesContainer"
import Top3ArticlesContainer from "../components/widgets/Top3ArticlesContainer"
import ThemedContainer from "../components/themed/ThemedContainer"

import { useThemeState } from "../contexts/theme-context"
import { getTop3Articles } from "../helpers/queries/getTop3Articles"

import { lightShadow } from "../styles/styled"
import NyTimesIcon from "../components/icons/NyTimesIcon"
import LatestPublishedArticleContainer from "../components/widgets/LatestPublishedArticleContainer"
import LocalWeatherContainer from "../components/widgets/LocalWeatherContainer"
import { getLocalWeather } from "../helpers/queries/getLocalWeather"
import { getArticlesStream } from "../helpers/queries/getArticlesStream"

const PageContainer = styled(Container)`
  display: flex;
  width: 100vw;
  min-height: 100vh;
`
const PageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5.1rem;
  padding-right: 5.1rem;
  padding-top: 2.4rem;
`
const NavbarContainer = styled(ThemedContainer)`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 5rem;
  z-index: 1;
  box-shadow: ${lightShadow};
`
const PageTopRowContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  width: 100%;
  justify-content: space-between;
  svg {
    width: 30%;
  }
`
const PageTopRowHeader = styled.h2`
  width: 30%;
  border-bottom: 1px solid black;
`
export async function getStaticProps() {
  // for headline news fetch TopArticles for world

  const top3Articles = await getTop3Articles()
  const articlesStream = await getArticlesStream()
  return {
    props: { top3Articles, articlesStream },
  }
}

// initiate query client and pass to provider
// for queries to be accessible within children components
const queryClient = new QueryClient()

function ReactQuery({ top3Articles, localWeather, articlesStream }) {
  const { theme } = useThemeState()
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
            <title>React Query</title>
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
            <NavbarContainer>
              <MenuIcon onClick={() => toggleMenu()} />
              <SearchContainer />
            </NavbarContainer>
            <PageTopRowContainer>
              <LocalWeatherContainer />
              <NyTimesIcon />
              <LatestPublishedArticleContainer
                articlesStream={articlesStream}
              />
            </PageTopRowContainer>
            <Top3ArticlesContainer articles={top3Articles} />
            <TopArticlesContainer />
          </PageContentContainer>
        </PageContainer>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
ReactQuery.propTypes = {
  top3Articles: PropTypes.array,
  localWeather: PropTypes.object,
  articlesStream: PropTypes.object,
}
export default ReactQuery
