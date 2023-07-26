import { createGlobalStyle } from 'styled-components'
import { Theme } from './themes/default'

interface GlobalStyleProps {
  theme: Theme
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
 * { 
  margin: 0;
  border: 0;
  box-sizing: border-box;
  text-decoration: none;
 }

 body {
  background-color: ${(props) => props.theme.white};
  font-family: 'IBM Plex Sans', sans-serif;
 }

 button {
  cursor: pointer;

  :disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
 }
`
