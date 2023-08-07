import React from 'react'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Form } from './components/Form'
import { ThemeProvider } from 'styled-components'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Form />
      <GlobalStyle theme={defaultTheme} />
    </ThemeProvider>
  )
}
