import React, { useEffect } from "react";

import { apiStates, useApi } from "../hooks/useApi.jsx";
import { appendEllipses } from "../helpers/string.js";
import styles from "../styles/MostPopularArticles.module.scss";
import { useInput, useSelect } from "../helpers/input.js";

/**
 *  place corresponding key from NY TIMES APIs
 *  Most Popular API
 * named
 * NEXT_PUBLIC_NY_MOST_SHARED_API_KEY
 *  in .env.local file root directory
 */

const NY_MOST_SHARED_API_KEY = process.env.NEXT_PUBLIC_NY_MOST_SHARED_API_KEY;

export default function MostPopularArticles() {
  //  api accepts timespan of days  as url param
  // 1, 7, or 14 number of days for most popular articles
  const [activeTimespanInputValue, newActiveTimespanInput] = useSelect({
    name: "activeTimespan",
    values: ["daily", "weekly", "every two weeks"],
  });

  const apiMappedTimespans = {
    daily: 1,
    weekly: 7,
    "every two weeks": 14,
  };
  const mappedActiveTimespanValue =
    apiMappedTimespans[activeTimespanInputValue];

  const { state, error, data } = useApi(
    `https://api.nytimes.com/svc/mostpopular/v2/shared/${mappedActiveTimespanValue}/facebook.json?api-key=${NY_MOST_SHARED_API_KEY}`
  );

  switch (state) {
    case apiStates.ERROR:
      return <p>ERROR: {error || "General error"}</p>;
    case apiStates.SUCCESS:
      return (
        <>
          <div className={styles.articlesContainer}>
            <h2 className={styles.articlesRow}>
              Most popular NY times articles {newActiveTimespanInput}
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
}
