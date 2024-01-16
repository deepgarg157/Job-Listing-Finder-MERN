import React from 'react'
import group from "../assets/group.png"
import rupees from "../assets/rupees.png"
import india from "../assets/india.png"
import Skills from './Skills'
import { Link } from 'react-router-dom'

const JobCard = ({ jobDetails }) => {
    const { companyName, location, jobType, remote, salary, skillsRequired, _id } = jobDetails
    return (
        <div className='relative mt-10 shadow-[2px_5px_5px_10px_rgba(255,226,226,0.70)]'>
            <div className='flex justify-between'>
                <div className='px-7 py-2'>
                    <p className='font-bold'>{companyName}</p>
                    <div className='flex mt-2'>
                        <img className='mr-2 w-5 h-5' src={group}></img>
                        <p className='mr-4'>11-50</p>
                        <img className='mx-2 w-4 h-4 mt-1' src={rupees}></img>
                        <p className='mr-4'>{salary}</p>
                        <img className='mx-2 w-6 h-6' src={india}></img>
                        <p>{location}</p>
                    </div>
                    <div className='flex mt-2'>
                        <p className='text-red-500 font-semibold'>{remote}</p>
                        <p className='ml-7 text-red-500 font-semibold'>{jobType}</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex'>
                        {skillsRequired.map((skill) => <Skills key={skill} skill={skill} />)}
                    </div>
                </div>
                <div className='absolute top-14 ml-[537px]'>
                    <Link to={`/job-details/${_id}`}><button className='px-3 py-1 bg-red-400 rounded-md mt-2 text-white'>View Details</button></Link>
                </div>
            </div>
        </div>
    )
}

export default JobCard;