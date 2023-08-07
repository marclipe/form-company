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

 html {
    @media (max-width: 1000px){
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

 body {
  background-color: ${(props) => props.theme['background-color']};
  font-family: 'IBM Plex Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
 }

  h1, h2, h3, h4, h5, strong {
    font-weight: 600;
  }

 :focus {
  outline: 1px solid ${(props) => props.theme['purple-light']};
 }

 button {
  cursor: pointer;

  :disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
 }
`
