import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const SearchIconSvg = styled.svg`
  display: inline-flex;
  cursor: pointer;
`
const SearchIconPath = styled.path``
const SearchIcon = ({ onClick, className }) => {
  return (
    <SearchIconSvg
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 24 24"
    >
      <SearchIconPath d="M 4 2 C 2.895 2 2 2.895 2 4 L 2 20 C 2 21.105 2.895 22 4 22 L 20 22 C 21.105 22 22 21.105 22 20 L 22 4 C 22 2.895 21.105 2 20 2 L 4 2 z M 10 4 C 13.314 4 16 6.686 16 10 C 16 11.218 15.624 12.33525 15 13.28125 L 20 18.28125 L 18.28125 20 L 13.3125 15 C 12.3655 15.624 11.218 16 10 16 C 6.686 16 4 13.314 4 10 C 4 6.686 6.686 4 10 4 z M 10 6.03125 C 7.7996976 6.03125 6.03125 7.7996976 6.03125 10 C 6.03125 12.200302 7.7996976 13.96875 10 13.96875 C 12.200302 13.96875 13.96875 12.200302 13.96875 10 C 13.96875 7.7996976 12.200302 6.03125 10 6.03125 z" />
    </SearchIconSvg>
  )
}

SearchIcon.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default SearchIcon
