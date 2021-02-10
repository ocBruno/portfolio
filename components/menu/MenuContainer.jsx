import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useRouter } from "next/router"

import CloseIcon from "../icons/CloseIcon"
import ConfigurationsIcon from "../icons/ConfigurationsIcon"
import ThemedContainer from "../themed/ThemedContainer"
import { lightShadow } from "../../styles/styled"

const MenuContainerWrapper = styled(ThemedContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  left: ${(props) => (props.isActive ? "0" : `-200px`)};
  width: 200px;
  height: 100vh;
  padding: 12px;
  z-index: 2;
  box-shadow: ${lightShadow};
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: all 300ms ease-in;
  overflow: hidden;
`

const MenuTopRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 12px;
`
const ConfigurationsIconWrapper = styled(ConfigurationsIcon)`
  margin-left: auto;
`
const MenuHeader = styled.h2``
const NavOption = styled.h3`
  margin-bottom: 9px;
  cursor: pointer;
`

const MenuContainer = ({ isActive, toggleMenu, toggleConfigurations }) => {
  const router = useRouter()

  const handleNavOptionClick = (e, href) => {
    e.preventDefault()
    router.push(href)
  }
  return (
    <MenuContainerWrapper isActive={isActive}>
      <MenuTopRow>
        <MenuHeader onClick={() => toggleMenu()}>Menu</MenuHeader>
        <ConfigurationsIconWrapper onClick={() => toggleConfigurations()} />
        <CloseIcon onClick={() => toggleMenu()} />
      </MenuTopRow>
      <NavOption onClick={(e) => handleNavOptionClick(e, "/")}>Home</NavOption>
      <NavOption onClick={(e) => handleNavOptionClick(e, "/news")}>
        Most Popular
      </NavOption>
    </MenuContainerWrapper>
  )
}
MenuContainer.propTypes = {
  toggleConfigurations: PropTypes.func,
  toggleMenu: PropTypes.func,
  isActive: PropTypes.bool,
}
export default MenuContainer
