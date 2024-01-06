import React from "react";
import banner from '../assets/banner.png'

const Banner1 = () => {
    return (
        <div className="">
            <div className="">
                <p className="text-2xl absolute top-7 text-white font-semibold px-[200px] py-5">Your Personal Job Finder</p>
                <img src={banner}></img>
            </div>
        </div>
    )
}

export default Banner1;