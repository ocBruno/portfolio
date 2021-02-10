import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "next/image"
import { useQuery } from "react-query"

import ThemedContainer from "../../themed/ThemedContainer"
import LoadingSpinner from "../../LoadingSpinner"
import ViewMoreIcon from "../../icons/ViewMoreIcon"

import { getTop3Articles } from "../../../helpers/queries/news/getTop3Articles"
import { devices, lightShadow } from "../../../styles/styled"

const Top3ArticlesWrapper = styled(ThemedContainer)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  margin-bottom: 60px;
  @media ${devices.laptop} {
    flex-direction: row;
  }
`
const ArticleContainer = styled.div`
  display: flex;
  align-content: start;
  flex-direction: column;
  width: 100%;
  margin-top: 12px;
  padding: 12px;
  box-shadow: ${lightShadow};
  border-radius: 9px;
  @media ${devices.laptop} {
    width: 30%;
  }
`
const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 12px;
  border-radius: 9px;
  @media ${devices.laptop} {
    height: 230px;
  }
`
const ArticleTitle = styled.header`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 12px;
  @media ${devices.laptop} {
    margin-bottom: 9px;
    font-size: 13px;
  }
`
const ArticleInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const ArticleAuthor = styled.span`
  font-size: 14px;
  @media ${devices.laptop} {
    font-size: 11px;
  }
`
const ArticleDate = styled.span`
  margin-bottom: 9px;
  font-size: 14px;
  @media ${devices.laptop} {
    font-size: 11px;
  }
`
const ArticleDescription = styled.main`
  margin-top: 12px;
  font-size: 15px;
  margin-bottom: 12px;
  @media ${devices.laptop} {
    font-size: 11px;
  }
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
