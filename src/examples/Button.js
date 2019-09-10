import styled from "styled-components"

const color = "blue"

const Button = styled.button`
  color: ${props => props.color};
  background: ${color};
  font-size: ${props => (props.big ? "3rem" : "1rem")};
  padding: 0.5rem;
  margin: 0 1rem;
`

export default Button
