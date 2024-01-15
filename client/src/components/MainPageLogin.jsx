import React, { useEffect } from "react";
import HeaderLogin from "./HeaderLogin";
import search from "../assets/search.png"
import Chips from "./Chips";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";
import axios from 'axios'

const MainPageLogin = () => {

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

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <div>
            <HeaderLogin />
            <div className="w-[50%] m-auto p-5">
                <div className=" shadow-[2px_5px_5px_10px_rgba(255,226,226,0.70)] px-14 py-5" >
                    <div className="">
                        <img className="absolute py-3 px-2 w-9" src={search}></img>
                        <input className="w-full px-10 py-2 rounded-md border-2" type="text" placeholder="Type any job title"></input>
                    </div>
                    <div className="flex">
                        <div className="mt-5">
                            <select className="px-3 py-1 rounded-md">
                                <option>Skills</option>
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
                            <p className="text-[#ED5353] ml-72 mt-1">Clear</p>
                        </div>

                        <div className="flex flex-col">
                            <Link to={'/add-job-post'}><button className="py-1 bg-[#ED5353] text-white w-28 mt-5 mx-10 rounded-md">+Add Job</button></Link>
                        </div>

                    </div>
                </div>
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
        </div>
    )
}

export default MainPageLogin;