'use client'
import React, { useState } from 'react'
import MyImage from "@/public/image.jpg"
import LogoGg from "@/public/google.svg"
import { FaEyeSlash, FaLock, FaUser } from 'react-icons/fa'
import { IoEyeSharp } from 'react-icons/io5'
import { useRouter } from 'next/navigation'

const Register = () => {
    const [isRevealPassword, setIsRevealPassword] = useState(false);
    const router = useRouter()

    const togglePassword = () => {
        setIsRevealPassword((prevState) => !prevState);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">

                <div className="relative">
                    <img src={MyImage.src} alt="img" className="w-[400px] h-full hidden rounded-2xl md:block object-cover" />
                    <div
                        className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
                    >
                        <span className="text-white text-xl"
                        >We've been uesing Untitle to kick"<br />start every new project
                            and can't <br />imagine working without it."
                        </span>
                    </div>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-14">
                    <span className="mb-3 text-4xl font-bold">Welcome back</span>
                    <span className="font-light text-gray-400 mb-8">
                        Welcom back! Please enter your details
                    </span>
                    <div className="py-4">
                        <span className="mb-2 text-md">Email</span>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <FaUser className="text-gray-500" />
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
                            <input placeholder='Nhập mật khẩu...' className="w-full pl-10 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-transparent pr-10 border-b-2" required type={isRevealPassword ? 'text' : 'password'} />
                            <span onClick={togglePassword} role="presentation" className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                                {isRevealPassword ?
                                    <FaEyeSlash />
                                    :
                                    <IoEyeSharp />
                                }
                            </span>
                        </div>
                    </div>
                    <div className="py-4">
                        <span className="mb-2 text-md">Confirm Password</span>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <FaLock className="text-gray-500" />
                            </span>
                            <input placeholder='Nhập lại mật khẩu...' className="w-full pl-10 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-transparent pr-10 border-b-2" required type={isRevealPassword ? 'text' : 'password'} />
                            <span onClick={togglePassword} role="presentation" className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                                {isRevealPassword ?
                                    <FaEyeSlash />
                                    :
                                    <IoEyeSharp />
                                }
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between w-full py-4">
                        <div className="mr-24">
                            <input type="checkbox" name="ch" id="ch" className="mr-2" />
                            <span className="text-md">Remember for 30 days</span>
                        </div>
                        <span className="font-bold text-md">Forgot password</span>
                    </div>
                    <button
                        className="w-full bg-green-500 text-white p-2 rounded-lg mb-6 hover:bg-white transition-all hover:text-black"
                    >
                        Sign in
                    </button>
                    <button
                        className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
                    >
                        <img src={LogoGg} alt="img" className="w-6 h-6 inline mr-2" />
                        Sign in with Google
                    </button>
                    <div className="text-center text-gray-400">
                        Dont'have an account?
                        <button className="font-bold text-black " onClick={() => router.push('/register')}>Sign up for free</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register 