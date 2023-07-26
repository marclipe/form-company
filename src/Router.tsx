import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts'
import { Contact } from './pages/Contact'
import { Project } from './pages/Project'
import { Company } from './pages/Company'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Contact />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/project" element={<Project />}></Route>
      </Route>
    </Routes>
  )
}
