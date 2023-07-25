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
 }

 body {
  background-color: ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['purple-light']};
 }
`
