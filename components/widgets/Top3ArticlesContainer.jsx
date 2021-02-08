import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "next/image"
import { getTop3Articles } from "../../helpers/queries/getTop3Articles"
import { useQuery } from "react-query"
import LoadingSpinner from "../LoadingSpinner"
import ThemedContainer from "../themed/ThemedContainer"
import ViewMoreIcon from "../icons/ViewMoreIcon"

const Top3ArticlesWrapper = styled(ThemedContainer)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 3rem;
`
const ArticleContainer = styled.div`
  display: flex;
  align-content: start;
  flex-direction: column;
  width: 27%;
  margin-top: 3rem;
`
const ImageWrapper = styled.div`
  width: 100%;
  height: 13rem;
  overflow: hidden;
  margin-bottom: 1rem;
`
const ArticleTitle = styled.header`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 0.3rem;
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
`
const Top3ArticlesContainer = ({ article }) => {
  const { isLoading, isError, data, error } = useQuery(
    "headlineArticle",
    getTop3Articles,
    {
      initialData: article,
    }
  )

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    )
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
            <ArticleAuthor>{article.byline}</ArticleAuthor>
            <ArticleDescription>{article.abstract}</ArticleDescription>
            <ArticleLink href={article.url}>
              <ViewMoreIcon />
            </ArticleLink>
          </ArticleContainer>
        )
      })}
    </Top3ArticlesWrapper>
  )
}

Top3ArticlesContainer.propTypes = {
  article: PropTypes.object,
}

export default Top3ArticlesContainer
