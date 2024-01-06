import React from "react";

const AddJob = () => {
    return (
        <>
            <div className="w-[50%] mx-auto mt-10">
                <div className="">
                    <h1 className="text-3xl font-bold underline">Add job description</h1>
                    <div className="flex justify-between mt-5">
                        <label className="font-semibold">Company Name</label>
                        <input className="w-[65%] mx-16 border-2 px-3 py-1 rounded-md" type="text" placeholder="Enter your company name here"></input>
                    </div>
                    <div className="flex justify-between mt-5">
                        <label className="font-semibold">Add logo URL</label>
                        <input className="w-[65%] mx-16 border-2 px-3 py-1 rounded-md" type="text" placeholder="Enter the link"></input>
                    </div>
                    <div className="flex justify-between mt-5">
                        <label className="font-semibold">Job position</label>
                        <input className="w-[65%] mx-16 border-2 px-3 py-1 rounded-md" type="text" placeholder="Enter job position"></input>
                    </div>
                    <div className="flex justify-between mt-5">
                        <label className="font-semibold">Monthly salary</label>
                        <input className="w-[65%] mx-16 border-2 px-3 py-1 rounded-md" type="text" placeholder="Enter Amount in rupees"></input>
                    </div>
                    <div className="flex mt-5">
                        <label className="font-semibold">Job Type</label>
                        <select className="mx-[137px] border-2 px-3 py-1 rounded-md text-gray-400">
                            <option>Select</option>
                            <option>Full-Time</option>
                            <option>Part-Time</option>
                            <option>Intern</option>
                            <option>Travel</option>
                        </select>
                    </div>
                    <div className="flex mt-5">
                        <label className="font-semibold">Remote/office</label>
                        <select className="mx-[98px] border-2 px-3 py-1 rounded-md text-gray-400">
                            <option>Select</option>
                            <option>Remote</option>
                            <option>Office</option>
                        </select>
                    </div>
                    <div className="flex justify-between mt-5">
                        <label className="font-semibold">Location</label>
                        <input className="w-[65%] mx-16 border-2 px-3 py-1 rounded-md" type="text" placeholder="Enter Location"></input>
                    </div>
                    <div className="flex justify-between mt-5">
                        <label className="font-semibold">Job Description</label>
                        <textarea className="w-[65%] mx-16 border-2 px-3 py-1 rounded-md"  placeholder="Type the job description"></textarea>
                    </div>
                    <div className="flex justify-between mt-5">
                        <label className="font-semibold">About Company</label>
                        <textarea className="w-[65%] mx-16 border-2 px-3 py-1 rounded-md"  placeholder="Type about your company"></textarea>
                    </div>
                    <div className="flex justify-between mt-5">
                        <label className="font-semibold">Skills Required</label>
                        <input className="w-[65%] mx-16 border-2 px-3 py-1 rounded-md" type="text" placeholder="Enter the must have skills"></input>
                    </div>
                    <div className="flex justify-between mt-5">
                        <label className="font-semibold">Information</label>
                        <input className="w-[65%] mx-16 border-2 px-3 py-1 rounded-md" type="text" placeholder="Enter the additional information"></input>
                    </div>
                    <div className="mt-5 mx-[200px]">
                        <button className="px-7 py-1 border-2 rounded-md text-gray-400">Cancel</button>
                        <button className="px-5 py-1 border-2 rounded-md bg-[#ED5353] text-white mx-2">+Add Job</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddJob;