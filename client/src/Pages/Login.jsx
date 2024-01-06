import React, { useState } from "react";
import Banner1 from "../components/Banner1";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { toast } from 'react-hot-toast'

const Login = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState(
        {
            email: "",
            password: ""
        }
    )

    const handleChange = (e) => {
        const { value, name } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleLogin = async () => {
        try {
            const { email, password } = user
            const response = await axios.post('/login', {
                email, password
            })
            if (response.data.status) {
                toast.success(response.data.status)
                console.log(response.data.user)
                localStorage.setItem("token", response.data.token)
                // navigate('/')
            }
            else {
                toast.error(response.data.error)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="flex justify-between">
            <div className="">
                <div className="w-1/2 mx-48">
                    <div className="mt-24">
                        <h1 className="text-3xl font-semibold ">Already have an account?</h1>
                        <p className="mt-2">Your personal job finder is here</p>
                        <input className="w-full border-2 mt-5 px-4 py-2 rounded-md" type="email" name="email" value={user.email} placeholder="Email" onChange={handleChange}></input>
                        <input className="w-full border-2 mt-5 px-4 py-2 rounded-md" type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}></input>
                        <button className="px-4 py-2 bg-[#ED5353] text-white font-semibold mt-3 rounded-md" onClick={handleLogin}>Sign in</button>
                        <p className="mt-3">Don’t have an account? <span className="underline"><Link to={'/register'}>Sign Up</Link></span></p>
                    </div>
                </div>
            </div>
            <div className="relative ">
                <Banner1 />
            </div>
        </div>
    )
}

export default Login;