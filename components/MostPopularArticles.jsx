import React, { useCallback, useState } from "react"
import styled from "styled-components"
import debounce from "lodash.debounce"
import { matchSorter } from "match-sorter"

import LoadingSpinner from "./LoadingSpinner.jsx"
import ImageArticle from "./ImageArticle.jsx"
import TextArticle from "./TextArticle.jsx"

import { apiStates, useApi } from "../hooks/useApi.jsx"

import DropdownSelect from "./Dropdown.jsx"

const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const ArticlesRow = styled.h2`
  width: 60rem;
  margin-bottom: 1.2rem;
  font-size: 18px;
`
const FilterInputsContainer = styled.div`
  display: flex;
  width: 60rem;
  margin-bottom: 2rem;
`
const CategorySelect = styled(DropdownSelect)`
  width: 130px;
`
const TimespanSelect = styled(DropdownSelect)`
  width: 71px;
`
const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
`
const SearchInputLabel = styled.span`
  font-size: 12px;
  margin-right: 12px;
  font-weight: 600;
`
const SearchInput = styled.input``
// MOST POPULAR ARTICLES FILTER OPTIONS
// string names mapped to equivalents

//  past 1, 7, or 14 days
export const API_MAPPED_TIMESPANS = {
  Daily: 1,
  Weekly: 7,
  Monthly: 30,
}

// if article was shared, emailed, or viewed
export const API_MAPPED_CATEGORIES = {
  Emailed: "emailed",
  Viewed: "viewed",
  "Shared on Facebook": "shared",
}

export const CATEGORY_VALUES = Object.keys(API_MAPPED_CATEGORIES)
export const TIMESPAN_VALUES = Object.keys(API_MAPPED_TIMESPANS)

const MostPopularArticles = () => {
  /**
   *  place corresponding key from NY TIMES APIs
   * Most Popular API
   * named
   * NEXT_PUBLIC_NY_MOST_SHARED_API_KEY
   *  in .env.local file root directory
   */

  const NY_MOST_SHARED_API_KEY = process.env.NEXT_PUBLIC_NY_MOST_SHARED_API_KEY

  const [activeCategoryQuery, setActiveCategoryQuery] = useState(
    CATEGORY_VALUES[0]
  )

  const [activeTimespanQuery, setActiveTimespanQuery] = useState(
    TIMESPAN_VALUES[0]
  )
  const [activeFilterQuery, setActiveFilterQuery] = useState("")

  const onActiveCategoryChange = (newValue) => {
    setActiveCategoryQuery(newValue)
  }

  const onActiveTimespanChange = (newValue) => {
    setActiveTimespanQuery(newValue)
  }

  //  convert to API compatible category url param
  const mappedActiveCategoryValue = API_MAPPED_CATEGORIES[activeCategoryQuery]

  // if type is shared include /facebook.json
  const conditialSharedParameter =
    mappedActiveCategoryValue === "shared" ? "/facebook" : ""

  //  convert to API compatible numerical url param
  const mappedActiveTimespanValue =
    API_MAPPED_TIMESPANS[activeTimespanQuery] + conditialSharedParameter

  //  set active state error and data according to api response
  const { state, error, data } = useApi(
    {
      url: `https://api.nytimes.com/svc/mostpopular/v2/${mappedActiveCategoryValue}/${mappedActiveTimespanValue}.json?api-key=${NY_MOST_SHARED_API_KEY}`,
    },
    [activeTimespanQuery, activeCategoryQuery]
  )
  const updateArticlesByQuery = (query) => {
    setActiveFilterQuery(query)
  }
  const debouncedUpdateArticlesByQuery = useCallback(
    debounce(updateArticlesByQuery, 500),
    []
  )

  const handleFilterQueryChange = (e) => {
    const query = e.target.value
    debouncedUpdateArticlesByQuery(query)
  }
  const articles = data

  const articleTitles = articles.map((article) => article.title)

  const activeArticlesData =
    activeFilterQuery.length > 0
      ? matchSorter(articleTitles, activeFilterQuery).map((articleTitle) =>
          articles.find((article) => article.title === articleTitle)
        )
      : articles

  // handle component states
  switch (state) {
    case apiStates.ERROR:
      if (process.env.NODE_ENV === "development") {
        console.log(error)
      }
      return <div>Oops try again later</div>
    case apiStates.SUCCESS:
      return (
        <ArticlesContainer>
          <ArticlesRow>Most popular NY times articles</ArticlesRow>
          <FilterInputsContainer>
            <CategorySelect
              defaultVal={activeCategoryQuery}
              selectedItem={activeCategoryQuery}
              handleItemChange={onActiveCategoryChange}
              items={CATEGORY_VALUES}
            />
            <TimespanSelect
              handleItemChange={onActiveTimespanChange}
              selectedItem={activeTimespanQuery}
              defaultVal={activeTimespanQuery}
              items={TIMESPAN_VALUES}
            />
            <SearchInputContainer>
              <SearchInputLabel>Filter</SearchInputLabel>
              <SearchInput onChange={(e) => handleFilterQueryChange(e)} />
            </SearchInputContainer>
          </FilterInputsContainer>

          {activeArticlesData.map((article, i) => {
            let isImageAvailable, imgSrc

            if (article.media[0]) {
              imgSrc = article.media[0]["media-metadata"][2].url
              isImageAvailable = true
            } else {
              isImageAvailable = false
            }

            if (isImageAvailable) {
              return (
                <ImageArticle
                  key={`article${i}`}
                  id={`article${i}`}
                  source={article.source}
                  title={article.title}
                  link={article.url}
                  imgSrc={imgSrc}
                />
              )
            } else {
              return (
                <TextArticle
                  key={`article${i}`}
                  id={`article${i}`}
                  source={article.source}
                  title={article.title}
                  link={article.url}
                />
              )
            }
          })}
        </ArticlesContainer>
      )
    default:
      return (
        <LoadingSpinner
          id="articlesLoadingSpinner"
          description="A spinner showing the app is loading."
        />
      )
  }
}

MostPopularArticles.propTypes = {}

export default MostPopularArticles
