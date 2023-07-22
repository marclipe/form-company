import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * { 
  margin: 0;
  border: 0;
  box-sizing: border-box;
 }

 body {
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme};
 }
`
