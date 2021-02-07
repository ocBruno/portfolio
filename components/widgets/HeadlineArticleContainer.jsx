import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "next/image"
import { getHeadlineArticle } from "../../helpers/queries/getHeadlineArticle"
import { useQuery } from "react-query"
import LoadingSpinner from "../LoadingSpinner"

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
const HeadlineArticleContainer = ({ article }) => {
  const { isLoading, isError, data, error } = useQuery(
    "headlineArticle",
    getHeadlineArticle,
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
  const articleData = data
  return (
    <ArticleContainer>
      <ImageWrapper></ImageWrapper>
      <ArticleTitle>{articleData.title}</ArticleTitle>
      <ArticleAuthor>{articleData.byline}</ArticleAuthor>
      <ArticleDescription>{articleData.abstract}</ArticleDescription>
      <ArticleLink href={articleData.url}>View more</ArticleLink>
    </ArticleContainer>
  )
}

HeadlineArticleContainer.propTypes = {
  article: PropTypes.object,
}

export default HeadlineArticleContainer
