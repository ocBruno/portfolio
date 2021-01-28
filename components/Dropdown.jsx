import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useSelect } from "downshift"
import Arrow from "./Arrow"

const DropdownSelect = ({ items, defaultVal, handleValueChange }) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items })

  const DropdownContainer = styled.div`
    /* Mobile */
    .dropdownContainer {
      width: 30rem;
      margin-bottom: 2rem;
      margin-right: auto;
    }

    /* TABLET && DESKTOPS +  >= 800px */

    @media (min-width: 800px) {
      .dropdownContainer {
        margin-right: 0;
        margin-bottom: auto;
        margin-top: 2rem;
      }
    }
  `
  return (
    <DropdownContainer>
      <button type="button" {...getToggleButtonProps()}>
        {selectedItem || defaultVal || "Elements"}
      </button>
      <Arrow />
      <ul {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <li
              style={
                highlightedIndex === index ? { backgroundColor: "#bde4ff" } : {}
              }
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
              onClick={() => handleValueChange(item)}
            >
              {item}
            </li>
          ))}
      </ul>
    </DropdownContainer>
  )
}
DropdownSelect.propTypes = {
  items: PropTypes.array,
  menuClassName: PropTypes.string,
  defaultVal: PropTypes.string,
  handleValueChange: PropTypes.func,
}
export default DropdownSelect
