import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import ThemedContainer from "../../themed/ThemedContainer"
import { devices } from "../../../styles/styled"

const SectionsContainerWrapper = styled(ThemedContainer)`
  display: none;
  align-self: center;
  margin-bottom: 24px;
  @media ${devices.laptop} {
    display: flex;
  }
`

const SectionContainer = styled.div`
  margin-right: 12px;
  cursor: pointer;
  font-weight: ${(props) => (props.isActive ? `600` : `500`)};
  @media ${devices.laptop} {
    font-size: 11px;
  }
`

const SectionsContainer = ({ sections, setActiveSection, activeSection }) => {
  const handleClick = (section) => {
    setActiveSection(section)
  }

  let sectionKeys = Object.keys(sections)

  return (
    <SectionsContainerWrapper>
      {sectionKeys.map((sectionKey) => {
        return (
          <SectionContainer
            key={sectionKey}
            isActive={activeSection === sections[sectionKey]}
            onClick={() => handleClick(sections[sectionKey])}
          >
            {sections[sectionKey]}
          </SectionContainer>
        )
      })}
    </SectionsContainerWrapper>
  )
}

SectionsContainer.propTypes = {
  sections: PropTypes.object,
  setActiveSection: PropTypes.func,
  activeSection: PropTypes.string,
}

export default SectionsContainer
