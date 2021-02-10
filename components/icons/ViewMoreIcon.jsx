import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import ThemedSvg from "../themed/ThemedSvg"

const ViewMoreIconSvg = styled(ThemedSvg)`
  width: 24px;
  margin-left: 12px;
`
const ViewMoreIconPath = styled.path`
  line-height: normal;
  text-indent: 0;
  text-align: start;
  text-decoration-line: none;
  text-decoration-style: solid;
  text-decoration-color: #000;
  text-transform: none;
  isolation: auto;
  mix-blend-mode: normal;
`
const ViewMoreIcon = ({ onClick, className }) => {
  return (
    <ViewMoreIconSvg
      onClick={onClick}
      className={className}
      viewBox="0 0 16 16"
    >
      <ViewMoreIconPath
        d="M 8 1 C 4.1399291 1 1 4.1399291 1 8 C 1 11.860071 4.1399291 15 8 15 C 11.860071 15 15 11.860071 15 8 C 15 4.1399291 11.860071 1 8 1 z M 8 2 C 11.319631 2 14 4.6803692 14 8 C 14 11.319631 11.319631 14 8 14 C 4.6803692 14 2 11.319631 2 8 C 2 4.6803692 4.6803692 2 8 2 z M 5 7 A 1 1 0 0 0 4 8 A 1 1 0 0 0 5 9 A 1 1 0 0 0 6 8 A 1 1 0 0 0 5 7 z M 8 7 A 1 1 0 0 0 7 8 A 1 1 0 0 0 8 9 A 1 1 0 0 0 9 8 A 1 1 0 0 0 8 7 z M 11 7 A 1 1 0 0 0 10 8 A 1 1 0 0 0 11 9 A 1 1 0 0 0 12 8 A 1 1 0 0 0 11 7 z"
        fontWeight="400"
        fontFamily="sans-serif"
        whiteSpace="normal"
        overflow="visible"
      />
    </ViewMoreIconSvg>
  )
}

ViewMoreIcon.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default ViewMoreIcon
