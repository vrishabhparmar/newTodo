import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Projects = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Projects Page</h1>
      <div className="project-nav">
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate('todo')}>Todo</button>
      </div>
    </div>
  )
}
