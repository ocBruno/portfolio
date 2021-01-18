import React from "react";
import PropTypes from "prop-types";

import { appendEllipses } from "../helpers/string.js";
import styles from "../styles/ImageArticle.module.scss";

const ImageArticle = ({ source, title, link, imgSrc, id }) => {
  return (
    <div key={id} className={styles.imageArticleContainer}>
      <a href={link}>
        <h2 className={styles.imageArticleHeader}>
          {appendEllipses(title, 45)}
        </h2>
        <h5 className={styles.imageArticleSource}>{source}</h5>

        <img className={styles.imageArticleImage} src={imgSrc} />
      </a>
    </div>
  );
};

ImageArticle.propTypes = {
  source: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  link: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default ImageArticle;
