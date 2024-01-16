import React from "react";
import cross from "../assets/cross.png"

const Chips = ({skills})=>{
    return(
        <>
        <div className="flex ml-2">
            <p className="px-2 py-[5px] bg-[#FFEEEE] mt-[21px] text-sm font-semibold">{skills}</p>
            <img className="mt-[21px] bg-[#FF6B6B] px-2 py-1 cursor-pointer" src={cross}></img>
        </div>
        </>
    )
}

export default Chips;