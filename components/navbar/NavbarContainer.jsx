import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { lightShadow } from "../../styles/styled"
import SearchContainer from "../search/SearchContainer"
import MenuIcon from "../icons/MenuIcon"
import ThemedContainer from "../themed/ThemedContainer"

const NavbarContainerWrapper = styled(ThemedContainer)`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 5rem;
  z-index: 1;
  box-shadow: ${lightShadow};
`

const NavbarContainer = ({ toggleMenu }) => {
  return (
    <NavbarContainerWrapper>
      <MenuIcon onClick={() => toggleMenu()} />
      <SearchContainer />
    </NavbarContainerWrapper>
  )
}

NavbarContainer.propTypes = {
  toggleMenu: PropTypes.func,
}

export default NavbarContainer
