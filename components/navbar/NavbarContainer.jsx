import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { devices, lightShadow } from "../../styles/styled"
import SearchContainer from "../search/SearchContainer"
import MenuIcon from "../icons/MenuIcon"
import ThemedContainer from "../themed/ThemedContainer"

const NavbarContainerWrapper = styled(ThemedContainer)`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 12px 24px;
  z-index: 1;
  box-shadow: ${lightShadow};
  @media ${devices.laptop} {
    padding: 12px 0;
  }
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
