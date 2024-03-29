import React, { useEffect, useState } from "react";
import Header from "./Header";
import search from "../assets/search.png"
import Chips from "./Chips";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useDispatch } from "react-redux";
import { setJobPostInfo } from "../utility/jobPostDataSlice";

const MainPage = () => {

    const [jobData, setJobData] = useState([])
    const dispatch = useDispatch()

    // authentiaction check function
    const getUserData = async () => {
        try {
            await axios.post('/api/v1/user/getUserData', {}, {
                headers: {
                    Authorization: "Bearer" + " " + localStorage.getItem('token')
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    // All job post data fetch
    const allJobPost = async () => {
        try {
            const res = await axios.get('/api/v1/job/all-job-post', {
                headers: {
                    Authorization: "Bearer" + " " + localStorage.getItem('token')
                }
            })
            if (res.data.success) {
                toast.success(res.data.message)
                setJobData(res.data.data)
                dispatch(setJobPostInfo(res.data.data))
            }
            else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUserData()
        allJobPost()
    }, [])

    return (
        <>
            <Header />
            <div className="w-[50%] m-auto p-5">
                <div className=" shadow-[2px_5px_5px_10px_rgba(255,226,226,0.70)] px-14 py-4" >
                    <img className="absolute mt-1 py-2 px-2 w-9" src={search}></img>
                    <input className="w-full px-10 py-2 rounded-md border-2" type="text" placeholder="Type any job title"></input>
                    <div className="flex">
                        <div className="mt-4">
                            <select className="px-3 py-1 rounded-md border-2">
                                <option value="" disabled selected hidden>Skills</option>
                                <option>Frontend</option>
                                <option>CSS</option>
                                <option>JavaScript</option>
                            </select>
                        </div>
                        <div>
                            <div className="flex">
                                <Chips skills="Frontend" />
                                <Chips skills="CSS" />
                                <Chips skills="JavaScript" />
                            </div>
                            <p className="text-[#ED5353] ml-72 mt-1 cursor-pointer">Clear</p>
                        </div>
                    </div>
                </div>
                {jobData.map((job) => <JobCard jobDetails={job} />)}
            </div>
        </>
    )
}

export default MainPage;