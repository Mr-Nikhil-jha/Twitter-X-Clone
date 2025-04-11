import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div className="min-h-screen  flex items-center justify-center bg-cover bg-center relative px-4 ">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-0 " />

            <div className="relative z-10 w-full max-w-md p-8 rounded-xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-[10px]">
                <form className="flex flex-col space-y-6">
                    <h2 className="text-2xl font-bold text-white text-center">Login</h2>

                    {/* Email Field */}
                    <div className="relative border-b border-gray-300/30">
                        <input type="text" required className="w-full bg-transparent outline-none text-white placeholder-transparent peer h-10" placeholder="Enter your email" />
                        <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-base transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm">
                            Enter your email
                        </label>
                    </div>

                    {/* Password Field */}
                    <div className="relative border-b border-gray-300/30">
                        <input type="password" required className="w-full bg-transparent outline-none text-white placeholder-transparent peer h-10" placeholder="Enter your password" />
                        <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-base transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm">
                            Enter your password
                        </label>
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex justify-between items-center text-white text-sm">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="accent-white" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="bg-white text-black font-semibold py-2 rounded-md transition duration-300 hover:bg-white/20 hover:text-white hover:border hover:border-white">
                        Log In
                    </button>

                    {/* Register */}
                    <div className="text-center text-white text-sm mt-6">
                        <p>
                            Don't have an account?{" "}
                            <Link to="/signup" className="hover:underline">
                                Register
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
