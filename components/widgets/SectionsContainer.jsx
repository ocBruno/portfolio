import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import ThemedContainer from "../themed/ThemedContainer"

const SectionsContainerWrapper = styled(ThemedContainer)`
  display: flex;
  align-self: center;
  margin-bottom: 1.5rem;
`
const SectionContainer = styled.div`
  font-size: 11px;
  margin-right: 1rem;
  cursor: pointer;
  font-weight: ${(props) => (props.isActive ? `600` : `500`)};
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
