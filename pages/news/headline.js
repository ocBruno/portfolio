import Head from "next/head"
import styled from "styled-components"

import { NY_TIMES_API_KEY } from "../../helpers/nytimes"

const PageContainer = styled.div`
  min-height: 100vh;
  background: rgb(252, 252, 252);
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export async function getStaticProps() {
  // for headline news fetch topstories for world
  const section = "world"
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${NY_TIMES_API_KEY}`
  )
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}
export default function headline({ data }) {
  console.log(data)
  return (
    <PageContainer>
      <Head>
        <title>Urgent News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </PageContainer>
  )
}
