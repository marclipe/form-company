import { styled } from 'styled-components'
import { Theme } from '../../styles/themes/default'

interface HeaderStyles {
  theme: Theme
}

export const ContainerHeader = styled.header<HeaderStyles>`
  background-color: ${(props) => props.theme['purple-light']};

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      color: ${(props) => props.theme['gray-400']};
      background-color: red;
      font-size: 16px;
    }
  }
`
