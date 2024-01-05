import React from 'react'
import group from "../assets/group.png"
import rupees from "../assets/rupees.png"
import india from "../assets/india.png"
import Skills from './Skills'

const JobCard = () => {
    return (
        <div className='mt-10 shadow-[2px_5px_5px_10px_rgba(255,226,226,0.70)]'>
            <div className='flex justify-between'>
                <div className='px-7 py-2'>
                    <p className='font-bold'>Frontend Developer</p>
                    <div className='flex mt-2'>
                        <img className='mr-2 w-5 h-5' src={group}></img>
                        <p className='mr-4'>11-50</p>
                        <img className='mx-2 w-4 h-4 mt-1' src={rupees}></img>
                        <p className='mr-4'>50,000</p>
                        <img className='mx-2 w-6 h-6' src={india}></img>
                        <p>Delhi</p>
                    </div>
                    <div className='flex mt-2'>
                        <p className='text-red-500 font-semibold'>Office</p>
                        <p className='ml-7 text-red-500 font-semibold'>Full time</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex'>
                        <Skills skill="Frontend" />
                        <Skills skill="CSS" />
                        <Skills skill="Javacript" />
                        <Skills skill="HTML" />
                    </div>
                    <div>
                        <button className='px-3 py-1 bg-red-400 rounded-md mt-2 ml-[185px] text-white'>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard;