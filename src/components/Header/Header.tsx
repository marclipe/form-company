import React from 'react'
import { NavLink } from 'react-router-dom'
import { ContainerHeader } from './styles'

export function Header() {
  return (
    <ContainerHeader>
      <nav>
        <div>
          <NavLink to={'/'} title="Contact"></NavLink>
        </div>
        <div>
          <NavLink to={'/company'} title="Company"></NavLink>
        </div>
        <div>
          <NavLink to={'/project'} title="Project"></NavLink>
        </div>
      </nav>
    </ContainerHeader>
  )
}
