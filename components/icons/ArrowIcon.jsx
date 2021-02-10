import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import ThemedSvg from "../themed/ThemedSvg"

const ArrowIconSvg = styled(ThemedSvg)`
  width: 12px;
  margin-left: 12px;
  border-radius: 100%;
`

const ArrowIcon = ({ onClick, className }) => {
  return (
    <ArrowIconSvg
      onClick={onClick}
      className={className}
      x="0px"
      y="0px"
      viewBox="0 0 122.88 63.9"
    >
      <g>
        <polygon points="61.44,63.9 122.88,0 0,0 61.44,63.9" />
      </g>
    </ArrowIconSvg>
  )
}

ArrowIcon.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default ArrowIcon
