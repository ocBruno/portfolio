import Head from "next/head"
import styled from "styled-components"
import Image from "next/image"

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

const ArticleContainer = styled.main`
  display: flex;
  align-content: start;
  flex-direction: column;
  width: 27rem;
  margin-bottom: auto;
`
const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`
const ArticleTitle = styled.header`
  font-size: 13px;
  font-weight: 600;
`
const ArticleAuthor = styled.div`
  font-size: 11px;
`
const ArticleDescription = styled.main`
  margin-top: 1rem;
  font-size: 11px;
  margin-bottom: 1rem;
`
const ArticleLink = styled.a`
  margin-left: auto;
  &::after {
    color: rgb(110, 110, 110);
    content: "⇨ ";
    margin-left: 9px;
  }
`
const CopyrightFooter = styled.footer`
  font-size: 11px;
`

export async function getStaticProps() {
  // for headline news fetch TopArticles for world
  const section = "world"
  const res = await fetch(
    `https://api.nytimes.com/svc/TopArticles/v2/${section}.json?api-key=${NY_TIMES_API_KEY}`
  )
  const articles = await res.json()

  if (!articles) {
    return {
      notFound: true,
    }
  }
  const headlineArticle = articles.results[0]
  return {
    props: { headlineArticle, copyright: articles.copyright },
  }
}

export default function headline({ headlineArticle, copyright }) {
  return (
    <PageContainer>
      <Head>
        <title>Headline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticleContainer>
        <ImageWrapper>
          <Image
            alt={headlineArticle.caption}
            src={headlineArticle.multimedia[0].url}
            width={headlineArticle.multimedia[0].width}
            height={headlineArticle.multimedia[0].height}
          />
        </ImageWrapper>
        <ArticleTitle>{headlineArticle.title}</ArticleTitle>
        <ArticleAuthor>{headlineArticle.byline}</ArticleAuthor>
        <ArticleDescription>{headlineArticle.abstract}</ArticleDescription>
        <ArticleLink href={headlineArticle.url}>View more</ArticleLink>
      </ArticleContainer>
      <CopyrightFooter>{copyright}</CopyrightFooter>
    </PageContainer>
  )
}
