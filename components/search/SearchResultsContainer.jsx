import React from "react"
import PropTypes from "prop-types"
import { searchArticles } from "../../helpers/queries/searchArticles"
import { useQuery } from "react-query"
import styled from "styled-components"

import LoadingSpinner from "../LoadingSpinner"
import ThemedScrollableContainer from "../themed/ThemedScrollableContainer"

const SearchResultsArticles = styled(ThemedScrollableContainer)``
const EmptyResultsMessageContainer = styled.div``
const EmptyResultsMessage = styled.h2``

const ArticleTitleLink = styled.a`
  display: flex;
  margin-bottom: 0.6rem;
  font-size: 12px;
  font-family: Roboto;
  text-decoration: none;
`

const SearchResultsContainer = ({
  activeQueryValue,
  isFetchResultsPending,
}) => {
  if (isFetchResultsPending === false) {
    return <></>
  }
  const { isLoading, isError, data, error } = useQuery(
    ["searchedArticles", activeQueryValue],
    searchArticles
  )

  if (isLoading) {
    return <LoadingSpinner />
  }
  if (isError) {
    return <span>Whoops</span>
  }
  const results = data.response.docs
  return (
    <SearchResultsArticles>
      {results.length > 0 ? (
        results.map((article, i) => (
          <ArticleTitleLink href={article.web_url} key={`article${i}`}>
            {article.abstract}
          </ArticleTitleLink>
        ))
      ) : (
        <EmptyResultsMessageContainer>
          <EmptyResultsMessage>Whoops, nothing found</EmptyResultsMessage>
        </EmptyResultsMessageContainer>
      )}
    </SearchResultsArticles>
  )
}

SearchResultsContainer.propTypes = {
  activeQueryValue: PropTypes.string,
  isFetchResultsPending: PropTypes.bool,
}

export default SearchResultsContainer
