import React, { Fragment } from "react"

import LoadingSpinner from "./LoadingSpinner.jsx"
import ImageArticle from "./ImageArticle.jsx"
import TextArticle from "./TextArticle.jsx"

import { apiStates, useApi } from "../hooks/useApi.jsx"
import { useSelect } from "../helpers/input.js"

import styles from "../styles/MostPopularArticles.module.scss"
import selectStyles from "../styles/Select.module.scss"

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

  const [activeCategory, CategorySelectInput] = useSelect({
    name: "CategorySelectInput",
    values: CATEGORY_VALUES,
    className: selectStyles.selectCss,
  })

  const [activeTimespan, TimespanSelectInput] = useSelect({
    name: "TimespanSelectInput",
    values: TIMESPAN_VALUES,
    className: selectStyles.selectCss,
  })

  //  convert to API compatible category url param
  // if type is shared include /facebook.json
  const mappedActiveCategoryValue = API_MAPPED_CATEGORIES[activeCategory]

  //  convert to API compatible numerical url param
  const conditialSharedParameter =
    mappedActiveCategoryValue === "shared" ? "/facebook" : ""

  const mappedActiveTimespanValue =
    API_MAPPED_TIMESPANS[activeTimespan] + conditialSharedParameter

  //  set active state error and data according to api response
  const { state, error, data } = useApi(
    {
      url: `https://api.nytimes.com/svc/mostpopular/v2/${mappedActiveCategoryValue}/${mappedActiveTimespanValue}.json?api-key=${NY_MOST_SHARED_API_KEY}`,
    },
    [activeTimespan, activeCategory]
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
        <div className={styles.articlesContainer}>
          <h2 className={styles.articlesRow}>Most popular NY times articles</h2>
          <div className={styles.filterInputsContainer}>
            <Fragment>{CategorySelectInput}</Fragment>
            <Fragment>{TimespanSelectInput}</Fragment>
          </div>

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
        </div>
      )
    default:
      return (
        <LoadingSpinner
          id="articlesLoadingSpinner"
          description="A spinner showing the app is loading."
          className={styles.loadingSpinner}
        />
      )
  }
}

MostPopularArticles.propTypes = {}

export default MostPopularArticles
