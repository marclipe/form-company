import React from 'react'
import { NavLink } from 'react-router-dom'
import { ContainerHeader } from './styles'

export function Header() {
  return (
    <ContainerHeader>
      <nav>
        <div>
          <NavLink to={'/contact'} title="Contact">
            <div>Contact</div>
          </NavLink>
        </div>
        <div>icon</div>
        <div>
          <NavLink to={'/company'} title="Company">
            <div>Company</div>
          </NavLink>
        </div>
        <div>icon</div>
        <div>
          <NavLink to={'/project'} title="Project">
            <div>Project</div>
          </NavLink>
        </div>
      </nav>
    </ContainerHeader>
  )
}
