import React from "react"
import styled from "styled-components"
import { useQuery } from "react-query"

import { getTopArticles } from "../../helpers/queries/getTopArticles"
import ThemedContainer from "../themed/ThemedContainer"

const ArticlesContainer = styled(ThemedContainer)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2.4rem;
  width: 100%;
`
const ArticleContainer = styled.div`
  margin: 2rem 2.7rem;
  padding: 1rem;
  width: 155px;
  border: 1px solid #ececec;
  border-radius: 3px;
  box-shadow: 2px 2px 2px #ececec;
`

const ArticleCoverImage = styled.img`
  width: 80px;
  margin-bottom: 9px;
`
const ArticleTitleLink = styled.a`
  display: flex;
  line-height: 1.3;
  font-size: 11px;
  margin-bottom: 6px;
  font-family: Roboto;
  text-decoration: none;
`
const ArticleByline = styled.a`
  display: flex;
  line-height: 1.3;
  font-size: 10px;

  font-family: Roboto;
  text-decoration: none;
`

const TopArticlesContainer = () => {
  const { isLoading, isError, data, error } = useQuery(
    "topArticles",
    getTopArticles
  )

  if (isLoading) {
    return <span>Loading</span>
  }
  if (isError) {
    return <span>Whoops</span>
  }

  const results = data.results
  return (
    <ArticlesContainer>
      {results.map((article, i) => {
        const thumbnail = article.multimedia[1].url

        return (
          <ArticleContainer key={`article${i}`}>
            <ArticleCoverImage src={thumbnail} />
            <ArticleTitleLink href={article.url}>
              {article.title}
            </ArticleTitleLink>
            <ArticleByline href={article.url}>{article.byline}</ArticleByline>
          </ArticleContainer>
        )
      })}
    </ArticlesContainer>
  )
}

TopArticlesContainer.propTypes = {}

export default TopArticlesContainer
