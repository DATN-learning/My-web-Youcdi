'use client'
import React, { useState } from 'react'
import MyImage from "@/public/image.jpg"
import LogoGg from "@/public/icons8-google.svg"
import { FaEyeSlash, FaLock, FaUser } from 'react-icons/fa'
import { IoEyeSharp } from 'react-icons/io5'
import { MdEmail } from "react-icons/md"

const Auth = () => {
    const [isRevealPassword, setIsRevealPassword] = useState(false);
    const [isConfirmPassword,setIsConfirmPassword] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const togglePassword = () => {
        setIsRevealPassword((prevState) => !prevState);
    }

    const toggleConfirmPassword = () => {
        setIsConfirmPassword((prevState) => !prevState);
    }

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
            <div className="flex flex-col md:flex-row w-full h-screen max-w-6xl bg-white shadow-2xl rounded-2xl overflow-hidden">
                <div className={`w-full md:w-1/2 relative hidden md:block transition-transform duration-500 ease-in-out ${isLogin ? '' : 'md:translate-x-full'}`}>
                    <img src={MyImage.src} alt="img" className="w-full h-full object-cover" />
                    <div className="absolute bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg">
                        <span className="text-white text-xl">
                            We've been using Untitled to kick-start every new project and can't imagine working without it.
                        </span>
                    </div>
                </div>

                <div className={`w-full md:w-1/2 overflow-hidden flex transition-transform duration-500 ease-in-out ${isLogin ? 'translate-x-0' : 'md:-translate-x-full block'}`}>
                    <div className="w-full flex">
                        <div className={`w-full flex-shrink-0 transition-all duration-500 ease-in-out transform ${isLogin ? '' : 'hidden md:block md:-translate-x-full'}`}>
                            <div className="flex flex-col justify-center p-8 md:p-14 h-full">
                                <span className="mb-3 text-4xl font-bold">Welcome back</span>
                                <span className="font-light text-gray-400 mb-8">
                                    Welcome back! Please enter your details
                                </span>

                                {/* Login form */}
                                <form>
                                    <div className="py-4">
                                        <span className="mb-2 text-md">Email</span>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                                <MdEmail className="text-gray-500" />
                                            </span>
                                            <input
                                                type="text"
                                                placeholder='Email...'
                                                className="w-full pl-10 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-transparent"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="py-4">
                                        <span className="mb-2 text-md">Password</span>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                                <FaLock className="text-gray-500" />
                                            </span>
                                            <input
                                                placeholder='Enter your password...'
                                                className="w-full pl-10 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-transparent pr-10 border-b-2"
                                                required
                                                type={isRevealPassword ? 'text' : 'password'}
                                            />
                                            <span onClick={togglePassword} role="presentation" className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                                                {isRevealPassword ? <FaEyeSlash /> : <IoEyeSharp />}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex justify-end w-full py-4">
                                        <button className="font-bold text-md">Forgot password</button>
                                    </div>
                                    <button className="w-full bg-green-500 text-white p-2 rounded-lg mb-6 hover:bg-white transition-all hover:text-black">
                                        Sign in
                                    </button>
                                </form>

                                <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
                                    <img src={LogoGg.src} alt="img" className="w-6 h-6 inline mr-2" />
                                    Sign in with Google
                                </button>
                                <div className="text-center text-gray-400">
                                    Don't have an account?
                                    <button className="font-bold text-black" onClick={toggleForm}>Sign up for free</button>
                                </div>
                            </div>
                        </div>

                        {/* Register Form */}
                        <div className={`w-full flex-shrink-0 transition-all duration-500 ease-in-out transform ${isLogin ? 'hidden md:block ' : 'md:-translate-x-full'}`}>
                            <div className="flex flex-col justify-center p-8 md:p-14 h-full">
                                <span className="mb-3 text-4xl font-bold">Create Account</span>
                                <span className="font-light text-gray-400 mb-8">
                                    Let's get started! Create an account.
                                </span>

                                {/* Register form */}
                                <form>
                                    <div className="py-4">
                                        <span className="mb-2 text-md">Email</span>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                                <MdEmail className="text-gray-500" />
                                            </span>
                                            <input
                                                type="text"
                                                placeholder='Email...'
                                                className="w-full pl-10 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-transparent"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="py-4">
                                        <span className="mb-2 text-md">Password</span>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                                <FaLock className="text-gray-500" />
                                            </span>
                                            <input
                                                placeholder='Enter your password...'
                                                className="w-full pl-10 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-transparent pr-10 border-b-2"
                                                required
                                                type={isRevealPassword ? 'text' : 'password'}
                                            />
                                            <span onClick={togglePassword} role="presentation" className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                                                {isRevealPassword ? <FaEyeSlash /> : <IoEyeSharp />}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="py-4">
                                        <span className="mb-2 text-md">Confirm Password</span>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                                <FaLock className="text-gray-500" />
                                            </span>
                                            <input
                                                placeholder='Confirm password...'
                                                className="w-full pl-10 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-transparent pr-10 border-b-2"
                                                required
                                                type={isConfirmPassword ? 'text' : 'password'}
                                            />
                                            <span onClick={toggleConfirmPassword} role="presentation" className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                                                {isConfirmPassword ? <FaEyeSlash /> : <IoEyeSharp />}
                                            </span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-green-500 text-white p-2 rounded-lg mb-6 hover:bg-white transition-all hover:text-black">
                                        Sign up
                                    </button>
                                </form>

                                <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
                                    <img src={LogoGg.src} alt="img" className="w-6 h-6 inline mr-2" />
                                    Sign up with Google
                                </button>
                                <div className="text-center text-gray-400">
                                    Already have an account?
                                    <button className="font-bold text-black" onClick={toggleForm}>Sign in</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
