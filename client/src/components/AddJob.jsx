import React, { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'

const AddJob = () => {

    const navigate = useNavigate()
    const [jobPostData, setJobPostData] = useState([])

    const [jobPost, setJobPost] = useState(
        {
            companyName: "",
            logoURL: "",
            jobPosition: "",
            salary: "",
            jobType: "",
            remote: "",
            location: "",
            description: "",
            about: "",
            skillsRequired: "",
            information: ""
        }
    )

    const handleChange = (e)=>{
        const {value, name} = e.target
        setJobPost({...jobPost, [name]:value})
    }

    const handleAddJob = async () => {
        try {
            const {companyName, logoURL, jobPosition, salary, jobType, remote, location, description, about, skillsRequired, information} = jobPost
            const res = await axios.post('/api/v1/job/add-job-posts', {companyName, logoURL, jobPosition, salary, jobType, remote, location, description, about, skillsRequired, information}, 
            {
                headers:{
                    Authorization: "Bearer" + " " + localStorage.getItem('token')
                }
            })
            if(res.data.success){
                toast.success(res.data.message)
                setJobPostData(res.data.data)
            }
            else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
            <div className="w-[50%] mx-auto mt-10">
                <div className="">
                    <h1 className="text-3xl font-bold underline">Add job description</h1>
                    <div className="flex justify-between mt-5">
                        <label className="font-semibold">Company Name</label>
                        <input className="w-[65%] mx-16 border-2 px-3 py-1 rounded-md" type="text" placeholder="Enter your company name here" name="companyName" onChange={handleChange} value={jobPost.companyName}></input>
                    </div>
                    <div className="flex justify-between mt-5">
                        <label className="font-semibold">Add logo URL</label>
                        <input className="w-[65%] mx-16 border-2 px-3 py-1 rounded-md" type="text" placeholder="Enter the link" name="logoURL" onChange={handleChange} value={jobPost.logoURL}></input>
                    </div>
                    <div className="flex justify-between mt-5">
                        <label className="font-semibold">Job position</label>
                        <input className="w-[65%] mx-16 border-2 px-3 py-1 rounded-md" type="text" placeholder="Enter job position" name="jobPosition" onChange={handleChange} value={jobPost.jobPosition}></input>
                    </div>
                    <div className="flex justify-between mt-5">
                        <label className="font-semibold">Monthly salary</label>
                        <input className="w-[65%] mx-16 border-2 px-3 py-1 rounded-md" type="text" placeholder="Enter Amount in rupees" name="salary" onChange={handleChange} value={jobPost.salary}></input>
                    </div>
                    <div className="flex mt-5">
                        <label className="font-semibold">Job Type</label>
                        <select name="jobType" onChange={handleChange} value={jobPost.jobType} className="mx-[137px] border-2 px-3 py-1 rounded-md text-gray-400">
                            <option>Select</option>
                            <option>Full-time</option>
                            <option>Part-time</option>
                            <option>Intern</option>
                            <option>Travel</option>
                        </select>
                    </div>
                    <div className="flex mt-5">
                        <label className="font-semibold">Remote/office</label>
                        <select name="remote" onChange={handleChange} value={jobPost.remote} className="mx-[98px] border-2 px-3 py-1 rounded-md text-gray-400">
                            <option>Select</option>
                            <option>Remote</option>
                            <option>Office</option>
                        </select>
                    </div>
                    <div className="flex justify-between mt-5">
                        <label className="font-semibold">Location</label>
                        <input className="w-[65%] mx-16 border-2 px-3 py-1 rounded-md" value={jobPost.location} type="text" placeholder="Enter Location" name="location" onChange={handleChange}></input>
                    </div>
                    <div className="flex justify-between mt-5">
                        <label className="font-semibold">Job Description</label>
                        <textarea className="w-[65%] mx-16 border-2 px-3 py-1 rounded-md" value={jobPost.description} placeholder="Type the job description" name="description" onChange={handleChange}></textarea>
                    </div>
                    <div className="flex justify-between mt-5">
                        <label className="font-semibold">About Company</label>
                        <textarea className="w-[65%] mx-16 border-2 px-3 py-1 rounded-md" value={jobPost.about} placeholder="Type about your company" name="about" onChange={handleChange}></textarea>
                    </div>
                    <div className="flex justify-between mt-5">
                        <label className="font-semibold">Skills Required</label>
                        <input className="w-[65%] mx-16 border-2 px-3 py-1 rounded-md" type="text" value={jobPost.skillsRequired} placeholder="Enter the must have skills" name="skillsRequired" onChange={handleChange}></input>
                    </div>
                    <div className="flex justify-between mt-5">
                        <label className="font-semibold">Information</label>
                        <input className="w-[65%] mx-16 border-2 px-3 py-1 rounded-md" value={jobPost.information} type="text" placeholder="Enter the additional information" name="information" onChange={handleChange}></input>
                    </div>
                    <div className="mt-5 mx-[200px]">
                        <Link to={'/home-login'}><button className="px-7 py-1 border-2 rounded-md text-gray-400">Cancel</button></Link>
                        <button className="px-5 py-1 border-2 rounded-md bg-[#ED5353] text-white mx-2" onClick={handleAddJob}>+Add Job</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddJob;