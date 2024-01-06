import React from "react";
import Header from '../components/Header'
import duration from "../assets/duration.png"
import stipend from "../assets/stipend.png"

const JobDetails = () => {
    return (
        <div className=" relative h-screen w-full">
            <div className="absolute w-full">
                <Header />
            </div>
            <div className="">
                <div className="">

                    <div className="bg-[#FFEFEF] w-[60%] mx-72 top-16 absolute">
                        <p className="text-center text-xl font-semibold px-32 py-4">WordPress Development work from home job/internship at Adyaka Infosec Private Limited</p>
                    </div>

                    <div className="bg-[#FFEFEF] w-[60%] h-[125%] mx-72 top-[180px] absolute px-7">
                        <div className="flex">
                            <p className="pr-4 pt-4 text-sm">1w ago</p>
                            <p className="pt-4 text-sm">Full Time</p>
                        </div>
                        <p className="mt-2 text-2xl font-semibold">WordPress Development </p>
                        <p className="text-red-400 font-semibold text-sm mt-1">Bangalore | India</p>
                        <div className="flex mt-2">
                            <div className="flex flex-col">
                                <div className="flex">
                                    <img src={stipend}></img>
                                    <p className="mx-2 text-sm mt-1 text-gray-500">Stipend</p>
                                </div>
                                <p className="text-sm font-semibold">Rs 25000/month</p>
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
                        <p className="mt-3">We provide technology-based services to help businesses and organizations achieve their goals. We offer a wide range of services, including software development, system integration, network and security services, cloud computing, and data analytics. Our primary focus is on leveraging technology to streamline business processes, improve productivity, and enhance overall efficiency.</p>
                        <p className="mt-7 font-semibold">About the  job/internship</p>
                        <p className="mt-3">We are looking for a responsible PHP/WordPress/Laravel/Shopify Developer. He/She will be liable for managing services and therefore the interchange of knowledge between the server and the users. The candidate's primary focus is going to be the event of all server-side logic, definition, and maintenance of the central database and ensuring high performance and responsiveness to requests from the front end.</p>
                        <p className="mt-7">Selected intern's day-to-day responsibilities include:</p>
                        <p>1. Work on the development of theme customization, liquid programming language, and corresponding apps</p>
                        <p> 2. Implement system integrations that are crucial to our success</p>
                        <p> 3. Contribute to the development of HTML5/CSS/JavaScript and standard web technologies integral to building seamless multi-channel experiences</p>
                        <p> 4. Work on speed optimization and making a mobile-friendly website</p>
                        <p className="mt-5 font-semibold">Skill(s) required</p>
                        <div className="mt-3 flex">
                            <p className="px-3 py-1 bg-orange-300 text-white font-semibold w-[10%] text-center text-sm rounded-md">CSS</p>
                            <p className="px-3 py-1 bg-orange-300 text-white font-semibold w-[10%] text-center text-sm mx-2 rounded-md">HTML</p>
                            <p className="px-3 py-1 bg-orange-300 text-white font-semibold w-[%] text-center text-sm rounded-md">Word Press</p>
                        </div>
                        <p className="mt-5 font-semibold">Additional Information</p>
                        <p className="mt-3">Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (₹ 2500 per design).</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails;