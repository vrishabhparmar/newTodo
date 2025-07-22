import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export const Jobs = () => {

  const jobsdata = useLoaderData();

  return (
    <div className='job-details'>
      {jobsdata.map((job) => {
        return (

          <Link className='job-item' to={job.id.toString()} key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
          </Link>
        )
        
      })}
    </div>
  )
}

export const jobsLoader = async () => {
  const res = await fetch("http://localhost:3000/jobs");
  return res.json();
}
