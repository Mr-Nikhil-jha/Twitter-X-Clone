import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import onepiece from "../../assets/onepiece.jpg";
import HomeIcon from "@mui/icons-material/Home";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
    const [hide, setHide] = useState(false);
    const [menuHide, setMenuHide] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (!mobile) setMenuHide(false);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            {/* Mobile Hamburger Menu */}
            {isMobile && (
                <div className="p-4 fixed top-2 left-2 z-50 rounded-md shadow-md">
                    <MenuIcon className="text-white text-3xl cursor-pointer" onClick={() => setMenuHide(!menuHide)} />
                </div>
            )}

            {/* Sidebar */}
            <aside
                className={`transition-all duration-300 z-40 bg-gradient-to-b ml-2 from-gray-800 to-gray-700 shadow-lg rounded-2xl mt-4 h-screen w-64 p-6 flex flex-col items-center fixed ${
                    isMobile ? (menuHide ? "-translate-x-full hidden" : "translate-x-0") : "left-0"
                }`}
            >
                {/* Navigation Menu */}
                <nav className="flex flex-col gap-6 w-full mt-6">
                    <ul className="flex flex-col gap-6">
                        <NavLink to="/" className={({ isActive }) => `flex items-center gap-2 font-medium transition duration-300 cursor-pointer px-2 py-1 rounded ${isActive ? "text-yellow-300" : "text-white hover:text-yellow-300"}`}>
                            <HomeIcon className="text-yellow-400" />
                            Home
                        </NavLink>
                        <NavLink to="/my-posts" className={({ isActive }) => `flex items-center gap-2 font-medium transition duration-300 cursor-pointer px-2 py-1 rounded ${isActive ? "text-yellow-300" : "text-white hover:text-yellow-300"}`}>
                            <PostAddIcon className="text-yellow-400" />
                            My Posts
                        </NavLink>
                        <NavLink to="/all-posts" className={({ isActive }) => `flex items-center gap-2 font-medium transition duration-300 cursor-pointer px-2 py-1 rounded ${isActive ? "text-yellow-300" : "text-white hover:text-yellow-300"}`}>
                            <DynamicFeedIcon className="text-yellow-400" />
                            All Posts
                        </NavLink>
                    </ul>
                </nav>

                {/* Add Post Button */}
                <button type="button" className="mt-6 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300">
                    Post
                </button>

                {/* Profile Section */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-4">
                    <div className="flex items-center gap-3 relative">
                        <img src={onepiece} alt="profile" className="w-12 h-12 rounded-full border-4 border-white hover:scale-105 transition-transform" />
                        <div className="flex flex-col">
                            <span className="text-white font-semibold text-sm">Nikhil Kumar Jha</span>
                            <span className="text-white text-xs">nikhiljha@gmail.com</span>
                        </div>
                        <div className="ml-auto relative">
                            <span className="text-white text-xl font-bold cursor-pointer" onClick={() => setHide(!hide)}>
                                &#x22EE;
                            </span>
                            <ul className={`${hide ? "block" : "hidden"} absolute right-0 top-8 bg-white shadow-lg rounded-md w-32 -mt-30`}>
                                <li className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer">
                                    <Link to="/login">Sign In</Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer">
                                    <Link to="/signup">Sign up</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default Navbar;
{
    /* <Link to="/login" className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer">
                                    Sign In
                                </Link>
                                <Link to="/signup" className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer">
                                    Sign up
                                </Link> */
}
