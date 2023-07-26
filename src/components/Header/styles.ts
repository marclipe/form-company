import { styled } from 'styled-components'
import { Theme } from '../../styles/themes/default'

interface HeaderStyles {
  theme: Theme
}

export const ContainerHeader = styled.header<HeaderStyles>`
  background-color: ${(props) => props.theme['purple-light']};
  width: 528px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  gap: 3.438rem;

  /* nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  } */
`
