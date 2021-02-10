import Head from "next/head"
import PropTypes from "prop-types"
import { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import { QueryClient, QueryClientProvider } from "react-query"

import ThemedContainer from "../components/themed/ThemedContainer"
import MenuContainer from "../components/menu/MenuContainer"
import ConfigurationsContainer from "../components/configurations/ConfigurationsContainer"
import TopArticlesContainer from "../components/widgets/news/TopArticlesContainer"
import Top3ArticlesContainer from "../components/widgets/news/Top3ArticlesContainer"

import { useThemeState } from "../contexts/theme-context"
import { getTop3Articles } from "../helpers/queries/news/getTop3Articles"

import NyTimesIcon from "../components/icons/NyTimesIcon"
import LatestPublishedArticleContainer from "../components/widgets/news/LatestPublishedArticleContainer"
import LocalWeatherContainer from "../components/widgets/weather/LocalWeatherContainer"
import { getArticlesStream } from "../helpers/queries/news/getArticlesStream"
import NavbarContainer from "../components/navbar/NavbarContainer"
import { sections } from "../helpers/constants"
import SectionsContainer from "../components/widgets/news/SectionsContainer"
import { getTopArticles } from "../helpers/queries/news/getTopArticles"
import { devices } from "../styles/styled"

const PageContainer = styled(ThemedContainer)`
  display: flex;
  min-height: 100vh;
`
const PageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 63px;

  @media ${devices.laptop} {
    padding-left: 90px;
    padding-right: 90px;
    padding-top: 90px;
  }
`

const PageTopRowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  svg {
    width: 90%;
  }
  @media ${devices.laptop} {
    svg {
      width: 30%;
    }
    justify-content: space-between;
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

function NyTimes({ top3Articles, topArticles, articlesStream }) {
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
            <title>Ny Times</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
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
NyTimes.propTypes = {
  top3Articles: PropTypes.array,
  topArticles: PropTypes.object,
  articlesStream: PropTypes.object,
}
export default NyTimes
