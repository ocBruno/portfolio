import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "next/image"
import { getHeadlineArticle } from "../../helpers/queries/getHeadlineArticle"
import { useQuery } from "react-query"
import LoadingSpinner from "../LoadingSpinner"
import ThemedContainer from "../themed/ThemedContainer"
import ViewMoreIcon from "../icons/ViewMoreIcon"

const ArticleContainer = styled(ThemedContainer)`
  display: flex;
  align-content: start;
  flex-direction: column;
  width: 27rem;
  margin-left: 3rem;
  margin-top: 3rem;
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
      <ImageWrapper>
        <Image
          alt={articleData.caption}
          src={articleData.multimedia[0].url}
          width={articleData.multimedia[0].width}
          height={articleData.multimedia[0].height}
        />
      </ImageWrapper>
      <ArticleTitle>{articleData.title}</ArticleTitle>
      <ArticleAuthor>{articleData.byline}</ArticleAuthor>
      <ArticleDescription>{articleData.abstract}</ArticleDescription>
      <ArticleLink href={articleData.url}>
        <ViewMoreIcon />
      </ArticleLink>
    </ArticleContainer>
  )
}

HeadlineArticleContainer.propTypes = {
  article: PropTypes.object,
}

export default HeadlineArticleContainer
