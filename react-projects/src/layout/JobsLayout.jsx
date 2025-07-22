import React from 'react'
import { Outlet } from 'react-router-dom'

export const JobsLayout = () => {
  return (
    <div>
        <h1>Job Openings</h1>
        <h2>List of job openings in our company</h2>
        <Outlet/>
    </div>
  )
}
