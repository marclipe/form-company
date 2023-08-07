import { styled } from 'styled-components'
import { Theme } from '../../styles/themes/default'

interface IFormStyles {
  theme: Theme
}

export const FormContainer = styled.div<IFormStyles>`
  display: flex;
  flex-direction: column;
  margin: 6.25rem auto 6.25rem;

  width: 37rem;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  gap: 1rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 599px) {
    width: 24rem;
  }

  label {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5;
    color: ${(props) => props.theme['gray-400']};
  }

  input {
    font-size: 1rem;
    height: 3.5rem;
    padding: 0.5rem 1rem;
    border-radius: 2px;
    border: 1px solid ${(props) => props.theme['gray-100']};
  }

  textarea {
    width: 100%;
    height: 6.25rem;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: flex-start;
  }

  ::placeholder {
    color: ${(props) => props.theme['gray-200']};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }

  button {
    display: flex;
    padding: 1rem 2rem;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 6px;
    background-color: ${(props) => props.theme['purple-mid']};

    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};
    line-height: 1.5;
    text-transform: uppercase;
  }
`
export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  h3 {
    text-transform: uppercase;
    color: ${(props) => props.theme['purple-mid']};
  }

  img {
    width: 2.5rem;
  }
`
