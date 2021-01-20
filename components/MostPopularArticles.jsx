import React, { Fragment } from "react";

import ImageArticle from "./ImageArticle.jsx";
import TextArticle from "./TextArticle.jsx";

import { apiStates, useApi } from "../hooks/useApi.jsx";
import { useSelect } from "../helpers/input.js";

import styles from "../styles/MostPopularArticles.module.scss";
import selectStyles from "../styles/Select.module.scss";

const MostPopularArticles = () => {
  /**
   *  place corresponding key from NY TIMES APIs
   * Most Popular API
   * named
   * NEXT_PUBLIC_NY_MOST_SHARED_API_KEY
   *  in .env.local file root directory
   */

  const NY_MOST_SHARED_API_KEY = process.env.NEXT_PUBLIC_NY_MOST_SHARED_API_KEY;

  // MOST POPULAR ARTICLES FILTER OPTIONS
  // string names mapped to equivalents

  //  past 1, 7, or 14 days
  const API_MAPPED_TIMESPANS = {
    Daily: 1,
    Weekly: 7,
    Monthly: 30,
  };
  // if article was shared, emailed, or viewed
  const API_MAPPED_CATEGORIES = {
    "Shared on Facebook": "shared",
    Emailed: "emailed",
    Viewed: "viewed",
  };

  const categoryValues = Object.keys(API_MAPPED_CATEGORIES);
  const timespanValues = Object.keys(API_MAPPED_TIMESPANS);

  const [activeCategory, CategorySelectInput] = useSelect({
    name: "CategorySelectInput",
    values: categoryValues,
    className: selectStyles.selectCss,
  });

  const [activeTimespan, TimespanSelectInput] = useSelect({
    name: "TimespanSelectInput",
    values: timespanValues,
    className: selectStyles.selectCss,
  });

  //  convert to API compatible category url param
  // if type is shared include /facebook.json
  const mappedActiveCategoryValue = API_MAPPED_CATEGORIES[activeCategory];

  //  convert to API compatible numerical url param
  const conditialSharedParameter =
    mappedActiveCategoryValue === "shared" ? "/facebook" : "";

  const mappedActiveTimespanValue =
    API_MAPPED_TIMESPANS[activeTimespan] + conditialSharedParameter;

  //  set active state error and data according to api response
  const { state, error, data } = useApi(
    {
      url: `https://api.nytimes.com/svc/mostpopular/v2/${mappedActiveCategoryValue}/${mappedActiveTimespanValue}.json?api-key=${NY_MOST_SHARED_API_KEY}`,
    },
    [activeTimespan, activeCategory]
  );

  // handle component states
  switch (state) {
    case apiStates.ERROR:
      return <p>ERROR: {error || "General error"}</p>;
    case apiStates.SUCCESS:
      return (
        <>
          <div className={styles.articlesContainer}>
            <h2 className={styles.articlesRow}>
              Most popular NY times articles
            </h2>
            <div className={styles.filterInputsContainer}>
              <Fragment>{CategorySelectInput}</Fragment>
              <Fragment>{TimespanSelectInput}</Fragment>
            </div>

            {data.map((article, i) => {
              let isImageAvailable, imgSrc;

              if (article.media[0]) {
                imgSrc = article.media[0]["media-metadata"][2].url;
                isImageAvailable = true;
              } else {
                isImageAvailable = false;
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
                );
              } else {
                return (
                  <TextArticle
                    key={`article${i}`}
                    id={`article${i}`}
                    source={article.source}
                    title={article.title}
                    link={article.url}
                  />
                );
              }
            })}
          </div>
        </>
      );
    default:
      return (
        <svg
          className={styles.loadingSpinner}
          width="38"
          height="38"
          viewBox="0 0 38 38"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#252525"
        >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
              <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </g>
        </svg>
      );
  }
};

MostPopularArticles.propTypes = {};

export default MostPopularArticles;
