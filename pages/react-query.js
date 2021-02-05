import Head from "next/head"
import styled from "styled-components"
import { QueryClient, QueryClientProvider } from "react-query"

import TopStory from "../components/react-query/TopStory"
import SearchContainer from "../components/search/SearchContainer"
import MenuContainer from "../components/menu/MenuContainer"
import MenuIcon from "../components/icons/MenuIcon"
import { useState } from "react"

const PageContainer = styled.div`
  background: rgb(252, 252, 252);
  display: flex;
`
const PageContentContainer = styled.div`
  background: rgb(252, 252, 252);
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
  const [isMenuActive, setIsMenuActive] = useState(false)

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <PageContainer>
        <Head>
          <title>Top global articles</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MenuContainer toggleMenu={toggleMenu} isActive={isMenuActive} />
        <PageContentContainer>
          <MenuIcon onClick={() => toggleMenu()} />
          <SearchContainer />

          <TopStory />
        </PageContentContainer>
      </PageContainer>
    </QueryClientProvider>
  )
}
