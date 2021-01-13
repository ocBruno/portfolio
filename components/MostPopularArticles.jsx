import React from "react";
import { returnShorthandName } from "../helpers/string.js";
import { apiStates, useApi } from "../helpers/useApi.jsx";
import styles from "../styles/MostPopularArticles.module.css";

const NY_API_KEY = process.env.NEXT_PUBLIC_NY_API_KEY;

// 1, 7, 14.. number of days for most popular articles

const timespan = 7;

export default function MostPopularArticles() {
  const { state, error, data } = useApi(
    `https://api.nytimes.com/svc/mostpopular/v2/shared/${timespan}/facebook.json?api-key=${NY_API_KEY}`
  );

  switch (state) {
    case apiStates.ERROR:
      return <p>ERROR: {error || "General error"}</p>;
    case apiStates.SUCCESS:
      return (
        <>
          <div className={styles.articlesContainer}>
            <h2 className={styles.articlesHeader}>
              Most popular NY times articles{" "}
            </h2>

            {data.map((article) => (
              <div className={styles.articleContainer}>
                <a href={article.url} className={styles.header}>
                  <h2>{returnShorthandName(article.title)}</h2>
                </a>
                <h5 className={styles.source}>{article.source}</h5>

                {article.media[0] &&
                  article.media[0]["media-metadata"][1].url && (
                    <img
                      className={styles.img}
                      src={article.media[0]["media-metadata"][1].url}
                    />
                  )}
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
