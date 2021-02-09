import React from "react"
import PropTypes from "prop-types"
import { useQuery } from "react-query"

import LoadingSpinner from "../LoadingSpinner"
import { getArticlesStream } from "../../helpers/queries/getArticlesStream"
import styled from "styled-components"

const LatestPublishedArticleContainer = styled.div`
  width: 11rem;
`
const ArticleTitle = styled.div`
  font-size: 11px;
  margin-bottom: 3px;
`
const ArticleDate = styled.div`
  font-size: 10px;
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
