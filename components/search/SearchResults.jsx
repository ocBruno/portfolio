import React from "react"
import PropTypes from "prop-types"
import { searchArticles } from "../../helpers/queries/searchArticles"
import { useQuery } from "react-query"
import styled from "styled-components"

import LoadingSpinner from "../LoadingSpinner"

const SearchResultsArticles = styled.div``
const EmptyResultsMessageContainer = styled.div``
const EmptyResultsMessage = styled.h2``

const ArticleTitleLink = styled.a`
  display: flex;
  margin-bottom: 0.6rem;
  color: rgb(30, 30, 30);
  font-size: 12px;
  font-family: Roboto;
  text-decoration: none;
`

const SearchResults = ({ activeQueryValue, isFetchResultsPending }) => {
  if (isFetchResultsPending === false) {
    return <></>
  }
  const { isLoading, isError, data, error } = useQuery(
    ["searchArticles", activeQueryValue],
    searchArticles
  )

  console.log(isLoading, isError, data, error)

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

SearchResults.propTypes = {}

export default SearchResults
