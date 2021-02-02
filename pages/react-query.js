import Head from "next/head"
import styled from "styled-components"
import { QueryClient, QueryClientProvider } from "react-query"

import TopStory from "../components/react-query/TopStory"

const PageContainer = styled.div`
  background: rgb(252, 252, 252);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
// initiate query client and pass to provider
// for queries to be accessible within children components
const queryClient = new QueryClient()

export default function ReactQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageContainer>
        <Head>
          <title>Top global articles</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TopStory />
      </PageContainer>
    </QueryClientProvider>
  )
}
