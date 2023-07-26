import { styled } from 'styled-components'
import { Theme } from '../styles/themes/default'

interface FormStyles {
  theme: Theme
}

export const FormContainer = styled.div<FormStyles>`
  max-width: 74rem;
  padding: 246px 424px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['purple-mid']};
`
