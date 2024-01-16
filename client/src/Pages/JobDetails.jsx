import React, { useEffect, useState } from "react";
import HeaderLogin from '../components/HeaderLogin'
import duration from "../assets/duration.png"
import stipend from "../assets/stipend.png"
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const JobDetails = () => {

    const { id } = useParams()
    const [jobDetails, setJobDetails] = useState(null)

    // All job post data fetch by id
    const allJobPost = async () => {
        try {
            const res = await axios.get(`/api/v1/job/all-job-post/${id}`, {
                headers: {
                    Authorization: "Bearer" + " " + localStorage.getItem('token')
                }
            })
            if (res.data.success) {
                toast.success(res.data.message)
                setJobDetails(res.data.data)
            }
            else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        allJobPost()
    }, [])

    return (
        <div className=" relative h-screen w-full">
            <div className="absolute w-full">
                <HeaderLogin />
            </div>
            {jobDetails &&
                <div className="">
                    <div className="">

                        <div className="bg-[#FFEFEF] w-[60%] mx-72 top-16 absolute">
                            <p className="text-center text-xl font-semibold px-32 py-4">{jobDetails.companyName} work from home job/internship at Adyaka Infosec Private Limited</p>
                        </div>

                        <div className="bg-[#FFEFEF] w-[60%] h-[140%] mx-72 top-[180px] absolute px-7">
                            <div className="flex">
                                <p className="pr-4 pt-4 text-sm">1w ago</p>
                                <p className="pt-4 text-sm">Full Time</p>
                            </div>
                            <div className="flex justify-between">
                            <p className="mt-2 text-2xl font-semibold">{jobDetails.companyName}</p>
                            <Link to={'/add-job-post'}><button className="bg-[#ED5353] px-7 py-1 text-white rounded-md">Edit Job</button></Link>
                            </div>
                            <p className="text-red-400 font-semibold text-sm mt-1">{jobDetails.location} | India</p>
                            <div className="flex mt-2">
                                <div className="flex flex-col">
                                    <div className="flex">
                                        <img src={stipend}></img>
                                        <p className="mx-2 text-sm mt-1 text-gray-500">Stipend</p>
                                    </div>
                                    <p className="text-sm font-semibold">Rs {jobDetails.salary}/month</p>
                                </div>
                                <div className="flex flex-col mx-10">
                                    <div className="flex">
                                        <img src={duration}></img>
                                        <p className="mx-2 text-sm mt-1 text-gray-500">Duration</p>
                                    </div>
                                    <p className="text-sm font-semibold mt-1">6 Months</p>
                                </div>
                            </div>
                            <p className="mt-7 font-semibold">About company</p>
                            <p className="mt-3">{jobDetails.about}</p>
                            <p className="mt-7 font-semibold">About the  job/internship</p>
                            <p className="mt-3">We are looking for a responsible PHP/{jobDetails.companyName}/Laravel/Shopify Developer. He/She will be liable for managing services and therefore the interchange of knowledge between the server and the users. The candidate's primary focus is going to be the event of all server-side logic, definition, and maintenance of the central database and ensuring high performance and responsiveness to requests from the front end.</p>
                            <p className="mt-7">Selected intern's day-to-day responsibilities include:</p>
                            <p>1. Work on the development of theme customization, liquid programming language, and corresponding apps</p>
                            <p> 2. Implement system integrations that are crucial to our success</p>
                            <p> 3. Contribute to the development of HTML5/CSS/JavaScript and standard web technologies integral to building seamless multi-channel experiences</p>
                            <p> 4. Work on speed optimization and making a mobile-friendly website</p>
                            <p className="mt-5 font-semibold">Skill(s) required</p>
                            <div className="mt-3 flex">
                            {jobDetails.skillsRequired.map((skill) => <p className="px-3 py-1 mx-1 bg-orange-300 text-white font-semibold w-[10%] text-center text-sm rounded-md">{skill}</p>)}
                                
                            </div>
                            <p className="mt-5 font-semibold">Additional Information</p>
                            <p className="mt-3">{jobDetails.information} (₹ 2500 per design).</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default JobDetails;