import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ImageArticleContainer = styled.div`
  width: 30rem;
  margin-bottom: 2rem;
  margin-right: auto;
  @media (min-width: 800px) {
    margin-right: 0;
    margin-bottom: auto;
    margin-top: 2rem;
  }
`
const ImageArticleHeader = styled.h2`
  font-size: 11pt;
  width: 88%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  padding-bottom: 0.6rem;
  margin-bottom: 0.6rem;
  @media (min-width: 800px) {
    font-size: 14pt;
  }
`
const ImageArticleSource = styled.h5`
  font-size: 12px;
  margin-bottom: 1rem;
`
const ImageArticleImage = styled.img`
  width: 88%;
  border-radius: 12px;
`

const ImageArticle = ({ source, title, link, imgSrc, id }) => {
  return (
    <ImageArticleContainer key={id} id={id} data-testid={id}>
      <a href={link}>
        <ImageArticleHeader>{title}</ImageArticleHeader>
        <ImageArticleSource>{source}</ImageArticleSource>

        <ImageArticleImage src={imgSrc} />
      </a>
    </ImageArticleContainer>
  )
}

ImageArticle.propTypes = {
  source: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  link: PropTypes.string,
  imgSrc: PropTypes.string,
}

export default ImageArticle
