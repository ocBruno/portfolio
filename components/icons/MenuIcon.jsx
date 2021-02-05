import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const MenuIconSvg = styled.svg`
  display: inline-flex;
  cursor: pointer;
`
const MenuIconPath = styled.path``
const MenuIcon = ({ onClick, className }) => {
  return (
    <MenuIconSvg
      className={className}
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 42 42"
    >
      <MenuIconPath d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
    </MenuIconSvg>
  )
}

MenuIcon.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default MenuIcon
