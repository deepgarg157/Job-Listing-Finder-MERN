import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex">
            <div className="w-1/2">
                <div className="w-1/2 m-auto ">
                    <div className="mt-24">
                        <h1 className="text-3xl font-semibold ">Already have an account?</h1>
                        <p className="mt-2">Your personal job finder is here</p>
                        <input className="w-full border-2 mt-5 px-4 py-2 rounded-md" type="email" placeholder="Email"></input>
                        <input className="w-full border-2 mt-5 px-4 py-2 rounded-md" type="password" placeholder="Password"></input>
                        <button className="px-4 py-2 bg-[#ED5353] text-white font-semibold mt-3 rounded-md">Sign in</button>
                        <p className="mt-3">Don’t have an account? <span className="underline"><Link to={'/register'}>Sign Up</Link></span></p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <Banner />
            </div>
        </div>
    )
}

export default Login;