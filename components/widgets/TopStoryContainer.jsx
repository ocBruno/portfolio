import React from "react"
import styled from "styled-components"
import { useQuery } from "react-query"

import { getTopArticle } from "../../helpers/queries/getTopArticle"
import ThemedContainer from "../themed/ThemedContainer"

const ArticlesContainer = styled(ThemedContainer)`
  overflow-y: scroll;
  height: 1000px;
  margin-top: 2.4rem;
  width: 100%;

  /* width */
  &::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: rgb(110, 110, 110);
  }
`

const TopStoryTitle = styled.h2`
  margin-bottom: 1rem;
`

const ArticleTitleLink = styled.a`
  display: flex;
  margin-bottom: 0.6rem;
  font-size: 12px;
  color: ${(props) =>
    props.theme.shade === "dark" ? "rgb(252, 252, 252)" : "rgb(0,0,0)"};

  font-family: Roboto;
  text-decoration: none;
`

const TopStory = () => {
  const { isLoading, isError, data, error } = useQuery(
    "topStory",
    getTopArticle
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
      <TopStoryTitle>
        Data fetched from NY times API using react-query
      </TopStoryTitle>
      {results.map((article, i) => (
        <ArticleTitleLink href={article.url} key={`article${i}`}>
          {article.title}
        </ArticleTitleLink>
      ))}
    </ArticlesContainer>
  )
}

TopStory.propTypes = {}

export default TopStory
