import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {

    const jobDetails = useLoaderData();
  return (
    <div className='job-description'>
        <p><span style={{fontWeight:"bold"}}>Title: </span> {jobDetails.title}</p>
        <p><span style={{fontWeight:"bold"}}>Salary: </span> {jobDetails.salary}</p>
        <p><span style={{fontWeight:"bold"}}>Description: </span> {jobDetails.description}</p>
        <button className='back-button'>Apply</button>
    </div>
  )

}

export default JobDetails

export const jobDetailsLoader = async ({params}) => {
    const {id} = params;
    const res = await fetch(`http://localhost:3000/jobs/${id}`);

    if(!res.ok) throw Error('Job decription not present');

    return res.json();
} 