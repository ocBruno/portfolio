import styled from "styled-components"

const ThemedContainer = styled.div`
  background: ${(props) =>
    props.theme.shade === "dark" ? "rgb(30,30,30)" : "rgb(252, 252, 252)"};
  color: ${(props) =>
    props.theme.shade === "dark" ? "rgb(252, 252, 252)" : "rgb(51,51,51)"};
`

export default ThemedContainer
