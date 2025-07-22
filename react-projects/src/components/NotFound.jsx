import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>404! Not Found</h1>
        <br/>
        <button className='page-button' onClick={() => navigate('/')}>Go to homepage</button>
    </div>
    
  )
}
