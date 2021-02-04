import React, { useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import { useQuery, useQueryClient } from "react-query"

import { searchArticles } from "../../helpers/queries/searchArticles"

import SearchResults from "./SearchResults"

const SearchInput = styled.input``
const SearchResultsContainer = styled.div`
  overflow-y: scroll;
  height: 1000px;
  padding: 2.4rem;
  width: 100%;
`

const SearchContainerTitle = styled.h2`
  margin-bottom: 1rem;
`

const SearchContainer = () => {
  // access query client and invalidate query example

  const [isFetchResultsPending, setIsFetchResultsPending] = useState(false)

  // Invalidate and refetch queries after mutation
  // const mutation = useMutation(getSearchContainer, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries("todos")
  //   },
  // })
  const initialBlankQueryValue = ""

  const [activeQueryValue, setActiveQueryValue] = useState(
    initialBlankQueryValue
  )

  const updateSearchArticles = (query) => {
    setActiveQueryValue(query)
    console.log("updating")
  }

  // const debouncedUpdateSearchArticles = useCallback(
  //   debounce(updateSearchArticles, 500),
  //   []
  // )

  const handleSearchQueryChange = (e) => {
    const query = e.target.value

    setActiveQueryValue(query)
    // debouncedUpdateSearchArticles(query)
  }

  useEffect(() => {
    if (activeQueryValue !== initialBlankQueryValue) {
      const userTypingTimeout = setTimeout(() => {
        setIsFetchResultsPending(true)
        console.log("finished typing fetching")
      }, 1000)
      return () => {
        clearTimeout(userTypingTimeout)
      }
    }
  }, [activeQueryValue])

  if (!isFetchResultsPending) {
    return (
      <SearchResultsContainer>
        <SearchInput onChange={handleSearchQueryChange} />
      </SearchResultsContainer>
    )
  } else {
    return (
      <SearchResultsContainer>
        <SearchInput onChange={handleSearchQueryChange} />
        <SearchResults activeQueryValue={activeQueryValue} />
      </SearchResultsContainer>
    )
  }
}

SearchContainer.propTypes = {}

export default SearchContainer
