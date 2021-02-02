import Head from "next/head"
import styled from "styled-components"
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query"
import TopStory from "../components/react-query/TopStory"

const PageContainer = styled.div`
  min-height: 100vh;
  background: rgb(252, 252, 252);
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const queryClient = new QueryClient()

export default function ReactQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageContainer>
        <Head>
          <title>Ny Times News</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TopStory />
      </PageContainer>
    </QueryClientProvider>
  )
}
