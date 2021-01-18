import React, { useEffect, setState, useState } from "react";
import PropTypes from "prop-types";

import { apiStates, useApi } from "../hooks/useApi.jsx";
import { appendEllipses } from "../helpers/string.js";
import { useSelect } from "../helpers/input.js";

import styles from "../styles/MostPopularArticles.module.scss";
import selectStyles from "../styles/Select.module.scss";

const MostPopularArticles = () => {
  /**
   *  place corresponding key from NY TIMES APIs
   *  Most Popular API
   * named
   * NEXT_PUBLIC_NY_MOST_SHARED_API_KEY
   *  in .env.local file root directory
   */

  const NY_MOST_SHARED_API_KEY = process.env.NEXT_PUBLIC_NY_MOST_SHARED_API_KEY;

  // MOST POPULAR ARTICLES FILTER OPTIONS
  // string names mapped to numerical equivalents 1, 7, or 14 number of days for most popular articles
  const API_MAPPED_TIMESPANS = {
    Daily: 1,
    Weekly: 7,
    Monthly: 30,
  };
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

            <h2 className={styles.filterInputsContainer}>
              {CategorySelectInput}
              {TimespanSelectInput}
            </h2>

            {data.map((article, i) => (
              <div key={i} className={styles.articleContainer}>
                <a href={article.url}>
                  <h2 className={styles.articleHeader}>
                    {appendEllipses(article.title, 45)}
                  </h2>
                  <h5 className={styles.source}>{article.source}</h5>

                  {article.media[0] &&
                    article.media[0]["media-metadata"][2].url && (
                      <img
                        className={styles.img}
                        src={article.media[0]["media-metadata"][2].url}
                      />
                    )}
                </a>
              </div>
            ))}
          </div>
        </>
      );
    default:
      return (
        <p>
          <img src="./oval-spinner.svg" />
        </p>
      );
  }
};

MostPopularArticles.propTypes = {};

export default MostPopularArticles;
