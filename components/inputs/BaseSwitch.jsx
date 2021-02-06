import React from "react"
import styled from "styled-components"

const BaseSwitch = ({ onClick }) => {
  return (
    <BaseSwitchWrapper>
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
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
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
  width: 42px;
  height: 26px;
  &:checked + ${BaseSwitchLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`
BaseSwitch.propTypes = {}

export default BaseSwitch
