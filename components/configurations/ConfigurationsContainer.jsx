import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import CloseIcon from "../icons/CloseIcon"
import BaseSwitch from "../inputs/BaseSwitch"
import ThemedContainer from "../themed/ThemedContainer"

import { useThemeDispatch } from "../../contexts/theme-context"

const ConfigurationsContainerWrapper = styled(ThemedContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  width: ${(props) => (props.isActive ? " 20%" : 0)};
  height: 100vh;
  padding: 1rem;
  z-index: 2;
  box-shadow: -6px 0px 24px #333338;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: all 300ms ease-in;
  overflow: hidden;
`
const ConfigurationsTopRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 1rem;
`
const ConfigurationsContainer = ({ toggleConfigurations, isActive }) => {
  const dispatch = useThemeDispatch()

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" })
  }

  return (
    <ConfigurationsContainerWrapper isActive={isActive}>
      <ConfigurationsTopRow>
        <CloseIcon onClick={() => toggleConfigurations()} />
      </ConfigurationsTopRow>
      Change theme <BaseSwitch onClick={() => toggleTheme()} />
    </ConfigurationsContainerWrapper>
  )
}

ConfigurationsContainer.propTypes = {
  toggleConfigurations: PropTypes.func,
  isActive: PropTypes.bool,
}

export default ConfigurationsContainer
