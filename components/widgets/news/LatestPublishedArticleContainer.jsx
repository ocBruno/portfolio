import React from "react"
import PropTypes from "prop-types"
import { useQuery } from "react-query"

import LoadingSpinner from "../../LoadingSpinner"
import { getArticlesStream } from "../../../helpers/queries/news/getArticlesStream"
import styled from "styled-components"
import { devices } from "../../../styles/styled"

const LatestPublishedArticleContainer = styled.div`
  width: 200px;
  display: none;
  flex-direction: column;
  justify-content: center;
  @media ${devices.laptop} {
    display: flex;
    width: 100px;
  }
`
const ArticleTitle = styled.div`
  margin-bottom: 3px;
  font-size: 19px;
  @media ${devices.laptop} {
    font-size: 11px;
  }
`
const ArticleDate = styled.div`
  font-size: 18px;
  @media ${devices.laptop} {
    font-size: 11px;
  }
`

const ArticleStreamContainer = ({ articlesStream }) => {
  const { isLoading, isError, data, error } = useQuery(
    ["articleStream"],
    getArticlesStream,
    {
      initialData: articlesStream,
    }
  )

  if (isLoading) {
    return <LoadingSpinner />
  }
  if (isError) {
    return <span>Whoops</span>
  }

  // latest published article is first of articles stream
  const latestPublishedArticle = data.results[0]

  return (
    <LatestPublishedArticleContainer>
      <ArticleTitle>{latestPublishedArticle.title}</ArticleTitle>
      <ArticleDate>
        {new Date(latestPublishedArticle.published_date).toLocaleTimeString()}
      </ArticleDate>
    </LatestPublishedArticleContainer>
  )
}

ArticleStreamContainer.propTypes = {
  articlesStream: PropTypes.object,
}

export default ArticleStreamContainer
