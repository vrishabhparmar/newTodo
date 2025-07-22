import React from 'react'
import { Outlet } from 'react-router-dom'
import { Projects } from '../pages/Projects'

export const ProjectLayout = () => {
  return (
    <div>
        <Projects />
        <Outlet />
    </div>
  )
}
