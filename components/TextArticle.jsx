import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
const TextArticleContainer = styled.div`
  width: 30rem;
  margin-bottom: 2rem;
  margin-right: auto;
  @media (min-width: 800px) {
    margin-right: 0;
    margin-bottom: auto;
    margin-top: 2rem;
  }
`
const TextArticleHeader = styled.h2`
  font-size: 11pt;
  width: 88%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  padding-bottom: 12px;
  margin-bottom: 12px;
  @media (min-width: 800px) {
    font-size: 14pt;
  }
`
const TextArticleSource = styled.h5`
  font-size: 12px;
  margin-bottom: 12px;
`

const TextArticle = ({ source, title, link, id }) => {
  return (
    <TextArticleContainer key={id} id={id} data-testid={id}>
      <a href={link}>
        <TextArticleHeader>{title}</TextArticleHeader>
        <TextArticleSource>{source}</TextArticleSource>
      </a>
    </TextArticleContainer>
  )
}

TextArticle.propTypes = {
  source: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  link: PropTypes.string,
}

export default TextArticle
