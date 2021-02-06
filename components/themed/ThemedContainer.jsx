import styled from "styled-components"

const ThemedContainer = styled.div`
  background: ${(props) =>
    props.theme.shade === "dark" ? "rgb(0,0,0)" : "rgb(252, 252, 252)"};
  color: ${(props) =>
    props.theme.shade === "dark" ? "rgb(252, 252, 252)" : "rgb(0,0,0)"};
`

export default ThemedContainer
