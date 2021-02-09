import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const BaseSwitch = ({ className, onClick }) => {
  return (
    <BaseSwitchWrapper className={className}>
      <BaseSwitchCheckBox onClick={onClick} id="checkbox" type="checkbox" />
      <BaseSwitchLabel htmlFor="checkbox" />
    </BaseSwitchWrapper>
  )
}

const BaseSwitchWrapper = styled.div`
  position: relative;
`
const BaseSwitchLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 21px;
  height: 15px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 9px;
    height: 9px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`
const BaseSwitchCheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 21px;
  height: 15px;
  margin: 0;
  &:checked + ${BaseSwitchLabel} {
    background: #4e4e4e;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 9px;
      height: 9px;
      margin-left: 10px;
      transition: 0.2s;
    }
  }
`
BaseSwitch.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default BaseSwitch
