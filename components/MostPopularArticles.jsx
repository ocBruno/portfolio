import React, { useState } from "react"
import styled from "styled-components"

import LoadingSpinner from "./LoadingSpinner.jsx"
import ImageArticle from "./ImageArticle.jsx"
import TextArticle from "./TextArticle.jsx"

import { apiStates, useApi } from "../hooks/useApi.jsx"

import DropdownSelect from "./Dropdown.jsx"

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
  const NY_MOST_SHARED_API_KEY = process.env.NEXT_PUBLIC_NY_MOST_SHARED_API_KEY

  const [activeCategoryQuery, setActiveCategoryQuery] = useState(
    CATEGORY_VALUES[0]
  )

  const [activeTimespanQuery, setActiveTimespanQuery] = useState(
    TIMESPAN_VALUES[0]
  )

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
            <DropdownSelect
              defaultVal={activeCategoryQuery}
              handleValueChange={onActiveCategoryChange}
              items={CATEGORY_VALUES}
            />
            <DropdownSelect
              handleValueChange={onActiveTimespanChange}
              defaultVal={activeTimespanQuery}
              items={TIMESPAN_VALUES}
            />
          </FilterInputsContainer>

          {data.map((article, i) => {
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
