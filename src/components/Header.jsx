import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaCircleUser } from "react-icons/fa6";

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const [nameShown, setNameShown] = useState(false);

    return (
        <div>
            <div className="navbar bg-teal-700 flex justify-between text-teal-50">
                <div>
                    <img className="w-20" src={logo} alt="logo"/>
                </div>
                <div className="flex justify-center md:gap-16 gap-8">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/profile">User Profile</NavLink>
                    <NavLink to="/">Update Profile</NavLink>
                </div>
                <div className="flex gap-5">
                    {
                        user && user?.email ? <button onClick={logOut} className="btn btn-outline text-teal-50">Logout</button> : <NavLink to="/login"><button className="btn btn-outline text-teal-50">Login</button></NavLink>
                    }
                    <div className="w-10 relative">
                        {user ? 
                        <img onMouseEnter={() => setNameShown(true)} onMouseLeave={() => setNameShown(false)}
                        className="rounded-full"
                        alt="Profile photo"
                        src={user?.photo} />
                        :
                        <FaCircleUser className="text-3xl"/>
                        }
                        {nameShown && user ? <p className="absolute top-10 right-2">{user.email}</p> : ""}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;