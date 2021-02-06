import styled from "styled-components"
const ThemedSvg = styled.svg`
  fill: ${(props) =>
    props.theme.shade === "dark" ? "rgb(252, 252, 252)" : "rgb(0,0,0)"};
`

export default ThemedSvg
