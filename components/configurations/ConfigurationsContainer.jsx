import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import CloseIcon from "../icons/CloseIcon"
import BaseSwitch from "../inputs/BaseSwitch"
import ThemedContainer from "../themed/ThemedContainer"

import { useThemeDispatch } from "../../contexts/theme-context"
import { lightShadow } from "../../styles/styled"

const ConfigurationsContainerWrapper = styled(ThemedContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  width: ${(props) => (props.isActive ? " 20%" : 0)};
  height: 100vh;
  padding: 1rem;
  z-index: 2;
  box-shadow: ${lightShadow};
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: all 300ms ease-in;
  overflow: hidden;
`
const ConfigurationsTopRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
`
const ConfigurationsHeader = styled.h2``

const SwitchWrapper = styled.div`
  display: flex;
`
const SwitchLabel = styled.span``
const ChangeThemeSwitch = styled(BaseSwitch)`
  margin-left: 1rem;
`
const ConfigurationsContainer = ({ toggleConfigurations, isActive }) => {
  const dispatch = useThemeDispatch()

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" })
  }

  return (
    <ConfigurationsContainerWrapper isActive={isActive}>
      <ConfigurationsTopRow onClick={() => toggleConfigurations()}>
        <ConfigurationsHeader>Configurations</ConfigurationsHeader>
        <CloseIcon />
      </ConfigurationsTopRow>
      <SwitchWrapper>
        <SwitchLabel>Change theme</SwitchLabel>
        <ChangeThemeSwitch onClick={() => toggleTheme()} />
      </SwitchWrapper>
    </ConfigurationsContainerWrapper>
  )
}

ConfigurationsContainer.propTypes = {
  toggleConfigurations: PropTypes.func,
  isActive: PropTypes.bool,
}

export default ConfigurationsContainer
