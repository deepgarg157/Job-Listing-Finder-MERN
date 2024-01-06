import React from "react";
import Banner1 from "../components/Banner1";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex">
            <div className="">
                <div className="w-1/2 m-auto ">
                    <div className="mt-24">
                        <h1 className="text-3xl font-semibold ">Create an account</h1>
                        <p className="mt-2">Your personal job finder is here</p>
                        <input className="w-full border-2 mt-2 px-4 py-2 rounded-md" type="text" placeholder="Name"></input>
                        <input className="w-full border-2 mt-5 px-4 py-2 rounded-md" type="email" placeholder="Email"></input>
                        <input className="w-full border-2 mt-5 px-4 py-2 rounded-md" type="number" placeholder="Mobile"></input>
                        <input className="w-full border-2 mt-5 px-4 py-2 rounded-md" type="password" placeholder="Password"></input>
                        <div className="flex mt-4">
                            <input className="border-2 mt-1 px-4 py-2 rounded-md w-3 h-3 mx-2" type="checkBox"></input>
                            <p className="text-xs mx-2">By creating an account, I agree to our terms of use and privacy policy</p>
                        </div>
                        <button className="px-4 py-2 bg-[#ED5353] text-white font-semibold mt-3 rounded-md">Create Account</button>
                        <p className="mt-3">Already have an account? <span className="underline"><Link to={'/login'}>Sign In</Link></span></p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <Banner1 />
            </div>
        </div>
    )
}

export default Register;