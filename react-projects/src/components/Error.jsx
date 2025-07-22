import React from 'react'
import { useRouteError, useNavigate } from 'react-router-dom';

const Error = () => {

    const errorElement = useRouteError();
    const navigate = useNavigate();

  return (
    <div className='job-description'>
        <h3><span style={{fontWeight:"bold"}}>An Error Occurred</span></h3>
        <p>{errorElement.message}</p>
        <button onClick={() => navigate('/')} className='back-button'> Go to homepage</button>
    </div>
  )
}

export default Error