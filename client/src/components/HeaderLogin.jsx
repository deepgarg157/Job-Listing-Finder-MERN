import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const Header = ()=>{
    const {user} = useSelector(store => store.user)
    return (
        <div className="flex justify-between p-6" style={{backgroundColor:'#FF6B6B'}}>
            <Link to={'/'}><div className="text-white font-semibold text-xl">Job Finder</div></Link>
            <div className="flex">
                <Link to={'/'}><button className="text-white border-2 px-4 py-1 rounded-md mx-3">Logout</button></Link>
                <p className="text-white mt-1">{user?.name}</p>
            </div>
        </div>
    )
}

export default Header;