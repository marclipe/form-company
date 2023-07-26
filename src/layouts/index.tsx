import React from 'react'
import { Outlet } from 'react-router-dom'
import { FormContainer } from './styles'
import { Header } from '../components/Header/Header'

export function DefaultLayout() {
  return (
    <FormContainer>
      <Header></Header>
      <Outlet></Outlet>
    </FormContainer>
  )
}
