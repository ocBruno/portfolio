import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "next/image"
import { useQuery } from "react-query"

import ThemedContainer from "../../themed/ThemedContainer"
import LoadingSpinner from "../../LoadingSpinner"
import ViewMoreIcon from "../../icons/ViewMoreIcon"

import { getTop3Articles } from "../../../helpers/queries/news/getTop3Articles"
import { lightShadow } from "../../../styles/styled"

const Top3ArticlesWrapper = styled(ThemedContainer)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 3rem;
`
const ArticleContainer = styled.div`
  display: flex;
  align-content: start;
  flex-direction: column;
  width: 30%;
  margin-top: 1rem;
  padding: 1rem;
  box-shadow: ${lightShadow};
  border-radius: 0.3rem;
`
const ImageWrapper = styled.div`
  width: 100%;
  height: 13rem;
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: 0.3rem;
`
const ArticleTitle = styled.header`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 0.3rem;
`
const ArticleInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const ArticleAuthor = styled.span`
  font-size: 11px;
`
const ArticleDate = styled.span`
  margin-bottom: 0.3rem;
  font-size: 11px;
`
const ArticleDescription = styled.main`
  margin-top: 1rem;
  font-size: 11px;
  margin-bottom: 1rem;
`
const ArticleViewMoreButton = styled.a`
  margin-left: auto;
  margin-top: auto;
`
const Top3ArticlesContainer = ({ articles, activeSection }) => {
  const { isLoading, isError, data, error } = useQuery(
    ["headlineArticle", activeSection],
    getTop3Articles,
    {
      initialData: articles,
    }
  )

  if (isLoading) {
    return <LoadingSpinner />
  }
  if (isError) {
    return <span>Whoops</span>
  }
  const top3Articles = data
  return (
    <Top3ArticlesWrapper>
      {top3Articles.map((article, articleIndex) => {
        return (
          <ArticleContainer key={`top-${articleIndex + 1}-article`}>
            <ImageWrapper>
              <Image
                alt={article.caption}
                src={article.multimedia[0].url}
                width={article.multimedia[0].width}
                height={article.multimedia[0].height}
              />
            </ImageWrapper>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleInfoContainer>
              <ArticleDate>
                {new Date(article.created_date).toDateString()}
              </ArticleDate>
              <ArticleAuthor>{article.byline}</ArticleAuthor>
            </ArticleInfoContainer>
            <ArticleDescription>{article.abstract}</ArticleDescription>
            <ArticleViewMoreButton href={article.url}>
              <ViewMoreIcon />
            </ArticleViewMoreButton>
          </ArticleContainer>
        )
      })}
    </Top3ArticlesWrapper>
  )
}

Top3ArticlesContainer.propTypes = {
  articles: PropTypes.array,
  activeSection: PropTypes.string,
}

export default Top3ArticlesContainer
