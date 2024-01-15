import React from "react";
import { Link } from "react-router-dom";

const Header = ()=>{
    const handleLogout = ()=>{
        localStorage.clear()
    }
    return (
        <div className="flex justify-between p-6" style={{backgroundColor:'#FF6B6B'}}>
            <Link to={'/'}><div className="text-white font-semibold text-xl">Job Finder</div></Link>
            <div>
                <Link to={'/login'}><button className="text-white border border-2 px-4 py-1 rounded-md mx-3" onClick={handleLogout}>Login</button></Link>
                <Link to={'/register'}><button className="text-white border border-2 px-4 py-1 rounded-md" onClick={handleLogout}>Register</button></Link>
            </div>
        </div>
    )
}

export default Header;