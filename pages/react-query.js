import Head from "next/head"
import PropTypes from "prop-types"
import { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import { QueryClient, QueryClientProvider } from "react-query"

import ThemedContainer from "../components/themed/ThemedContainer"
import MenuContainer from "../components/menu/MenuContainer"
import ConfigurationsContainer from "../components/configurations/ConfigurationsContainer"
import TopArticlesContainer from "../components/widgets/TopArticlesContainer"
import Top3ArticlesContainer from "../components/widgets/Top3ArticlesContainer"

import { useThemeState } from "../contexts/theme-context"
import { getTop3Articles } from "../helpers/queries/getTop3Articles"

import NyTimesIcon from "../components/icons/NyTimesIcon"
import LatestPublishedArticleContainer from "../components/widgets/LatestPublishedArticleContainer"
import LocalWeatherContainer from "../components/widgets/LocalWeatherContainer"
import { getArticlesStream } from "../helpers/queries/getArticlesStream"
import NavbarContainer from "../components/navbar/NavbarContainer"
import { sections } from "../helpers/constants"
import SectionsContainer from "../components/widgets/SectionsContainer"
import { getTopArticles } from "../helpers/queries/getTopArticles"

const PageContainer = styled(ThemedContainer)`
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
  padding-top: 5.1rem;
`

const PageTopRowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  svg {
    width: 30%;
  }
`

export async function getStaticProps() {
  const top3Articles = await getTop3Articles()
  const topArticles = await getTopArticles()

  const articlesStream = await getArticlesStream()

  return {
    props: { top3Articles, topArticles, articlesStream },
  }
}

// initiate query client and pass to provider
// for queries to be accessible within children components
const queryClient = new QueryClient()

function ReactQuery({ top3Articles, topArticles, articlesStream }) {
  const { theme } = useThemeState()
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [activeSection, setActiveSection] = useState(sections.world)
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
          <NavbarContainer toggleMenu={toggleMenu} />
          <PageContentContainer>
            <SectionsContainer
              setActiveSection={setActiveSection}
              sections={sections}
              activeSection={activeSection}
            />
            <PageTopRowContainer>
              <LocalWeatherContainer />
              <NyTimesIcon />
              <LatestPublishedArticleContainer
                articlesStream={articlesStream}
              />
            </PageTopRowContainer>
            <Top3ArticlesContainer
              activeSection={activeSection}
              articles={top3Articles}
            />
            <TopArticlesContainer
              topArticles={topArticles}
              activeSection={activeSection}
            />
          </PageContentContainer>
        </PageContainer>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
ReactQuery.propTypes = {
  top3Articles: PropTypes.array,
  topArticles: PropTypes.object,
  articlesStream: PropTypes.object,
}
export default ReactQuery
