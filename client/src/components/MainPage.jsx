import React from "react";
import Header from "./Header";
import search from "../assets/search.png"
import Chips from "./Chips";
import JobCard from "./JobCard";

const MainPage = () => {
    return (
        <div>
            <Header />
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
                        <div className="flex">
                            <Chips skills="Frontend"/>
                            <Chips skills="CSS"/>
                            <Chips skills="JavaScript"/>
                        </div>
                        <p className="text-[#ED5353] font-semibold mt-6 px-[100px] cursor-pointer">Clear</p>
                    </div>
                </div>
                <JobCard/>
                <JobCard/>
                <JobCard/>
            </div>
        </div>
    )
}

export default MainPage;