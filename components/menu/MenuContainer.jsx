import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import CloseIcon from "../icons/CloseIcon"
import { useRouter } from "next/router"
const MenuContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  width: ${(props) => (props.isActive ? " 20%" : 0)};
  height: 100vh;
  padding: 1rem;
  background: white;
  border: 1px solid black;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: all 300ms ease-in;
  overflow: hidden;
`

const MenuHeader = styled.h2`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
  cursor: pointer;
`
const MenuOption = styled.h3`
  margin-bottom: 0.3rem;
  cursor: pointer;
`

const MenuContainer = ({ isActive, toggleMenu }) => {
  const router = useRouter()
  const handleMenuOptionClick = (e, href) => {
    e.preventDefault()
    router.push(href)
  }
  return (
    <MenuContainerWrapper isActive={isActive}>
      <MenuHeader onClick={() => toggleMenu()}>
        Menu <CloseIcon />{" "}
      </MenuHeader>
      <MenuOption onClick={(e) => handleMenuOptionClick(e, "/")}>
        Home
      </MenuOption>
      <MenuOption onClick={(e) => handleMenuOptionClick(e, "/news")}>
        Most Popular
      </MenuOption>
      <MenuOption onClick={(e) => handleMenuOptionClick(e, "/news/headline")}>
        Top Story
      </MenuOption>
    </MenuContainerWrapper>
  )
}

MenuContainer.propTypes = {
  isActive: PropTypes.bool,
}

export default MenuContainer
