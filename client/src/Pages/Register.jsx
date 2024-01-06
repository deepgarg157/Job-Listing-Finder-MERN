import React, { useState } from "react";
import Banner1 from "../components/Banner1";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from 'axios'

const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState(
        {
            name: '',
            email: '',
            mobile: '',
            password: ''
        }
    )

    const handleChange = (e) => {
        const { value, name } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleRegister = async () => {
        try {
            const { name, email, mobile, password } = user
            const response = await axios.post('/register', {
                name, email, mobile, password
            })
            if (response.data.status) {
                toast.success(response.data.status)
                navigate('/login')
                setUser({
                    name: '',
                    email: '',
                    mobile: '',
                    password: ''
                })
            }
            else {
                toast.error(response.data.error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex">
            <div className="">
                <div className="w-1/2 m-auto ">
                    <div className="mt-24">
                        <h1 className="text-3xl font-semibold ">Create an account</h1>
                        <p className="mt-2">Your personal job finder is here</p>
                        <input className="w-full border-2 mt-2 px-4 py-2 rounded-md" value={user.name} name="name" type="text" placeholder="Name" onChange={handleChange}></input>
                        <input className="w-full border-2 mt-5 px-4 py-2 rounded-md" value={user.email} name="email" type="email" placeholder="Email" onChange={handleChange}></input>
                        <input className="w-full border-2 mt-5 px-4 py-2 rounded-md" value={user.mobile} name="mobile" type="number" placeholder="Mobile" onChange={handleChange}></input>
                        <input className="w-full border-2 mt-5 px-4 py-2 rounded-md" value={user.password} name="password" type="password" placeholder="Password" onChange={handleChange}></input>
                        <button className="px-4 py-2 bg-[#ED5353] text-white font-semibold mt-3 rounded-md" onClick={handleRegister}>Create Account</button>
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