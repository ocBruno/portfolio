import React from "react";
import PropTypes from "prop-types";

import { appendEllipses } from "../helpers/string.js";
import styles from "../styles/TextArticle.module.scss";

const TextArticle = ({ source, title, link, id }) => {
  return (
    <div key={id} className={styles.textArticleContainer}>
      <a href={link}>
        <h2 className={styles.textArticleHeader}>
          {appendEllipses(title, 45)}
        </h2>
        <h5 className={styles.textArticleSource}>{source}</h5>
      </a>
    </div>
  );
};

TextArticle.propTypes = {
  source: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  link: PropTypes.string,
};

export default TextArticle;
