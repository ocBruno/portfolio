import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useSelect } from "downshift"
import Arrow from "./Arrow"

const DropdownContainer = styled.div`
  /* Mobile */
  margin-right: 2rem;
  justify-content: space-between;
  /* TABLET && DESKTOPS +  >= 800px */

  @media (min-width: 800px) {
  }
`
const OpenButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 6px;
  background: transparent;
  font-family: Roboto;
  font-size: 10pt;
  font-weight: 600;
  outline: none;
  border: none;
  border-radius: 3px;
  &:focus {
    border: none;
  }
`
const DropdownItems = styled.ul`
  padding-top: 3px;
  font-size: 10pt;
  outline: none;
  margin-left: 6px;
`
const DropdownItem = styled.li`
  margin-top: 6px;
  margin-bottom: 6px;
  cursor: pointer;
  font-weight: ${(props) => (props.isHighlighted ? `600` : "500")};
`

const DropdownSelect = ({
  items,
  defaultVal,
  handleItemChange,
  selectedItem,
  className = "",
}) => {
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items })

  return (
    <DropdownContainer className={className}>
      <OpenButton type="button" {...getToggleButtonProps()}>
        {selectedItem || defaultVal || "Elements"}
        <Arrow />
      </OpenButton>
      <DropdownItems {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <DropdownItem
              isHighlighted={highlightedIndex === index}
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
              onClick={() => handleItemChange(item)}
            >
              {item}
            </DropdownItem>
          ))}
      </DropdownItems>
    </DropdownContainer>
  )
}
DropdownSelect.propTypes = {
  items: PropTypes.array,
  selectedItem: PropTypes.string,
  defaultVal: PropTypes.string,
  className: PropTypes.string,
  handleItemChange: PropTypes.func,
}
export default DropdownSelect
