import { styled } from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.theme['purple-mid']};
  }

  p {
    margin-top: 10px;
    font-size: 1rem;
    color: ${(props) => props.theme['gray-400']};
  }

  button {
    margin-top: 20px;
    margin: 20px auto 0;
  }
`
