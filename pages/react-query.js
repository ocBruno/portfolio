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

import { useThemeState } from "../contexts/theme-context"

import { NY_TIMES_API_KEY } from "../helpers/nytimes"
import { getHeadlineArticle } from "../helpers/queries/getHeadlineArticle"
import HeadlineArticleContainer from "../components/widgets/HeadlineArticleContainer"
import ThemedContainer from "../components/themed/ThemedContainer"

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
const NavbarContainer = styled(ThemedContainer)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 5rem;
  z-index: 1;
`
export async function getStaticProps() {
  // for headline news fetch TopArticles for world

  const headlineArticle = await getHeadlineArticle()
  return {
    props: { headlineArticle },
  }
}

// initiate query client and pass to provider
// for queries to be accessible within children components
const queryClient = new QueryClient()

function ReactQuery({ headlineArticle }) {
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
            <HeadlineArticleContainer article={headlineArticle} />
            <TopArticlesContainer />
          </PageContentContainer>
        </PageContainer>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
ReactQuery.propTypes = {
  headlineArticle: PropTypes.object,
}
export default ReactQuery
