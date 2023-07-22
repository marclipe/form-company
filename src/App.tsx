import { styled } from 'styled-components'

export const ContainerApp = styled.div`
  h1 {
    background-color: red;
  }
`

export function App() {
  return (
    <ContainerApp>
      <h1>Hello World!</h1>
    </ContainerApp>
  )
}
