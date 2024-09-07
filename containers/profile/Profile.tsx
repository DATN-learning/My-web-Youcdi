import React from 'react';

const Profile = () => {
    return (
        <div className="p-4 sm:p-6 max-w-full mx-auto bg-white rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">SETTINGS</h1>
                <div className="flex flex-wrap justify-start sm:justify-end space-x-2 sm:space-x-4">
                    {/* SVG icons remain unchanged */}
                </div>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-700 mb-2">ACCOUNT</h2>
            <p className="text-gray-600 mb-6">Edit your name, avatar, etc.</p>
            
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 pr-0 md:pr-4 mb-6 md:mb-0">
                    <img src="https://via.placeholder.com/150" alt="Avatar" className="rounded-full w-32 h-32 object-cover mb-4 mx-auto md:mx-0"/>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-md mb-2 w-full">Change Avatar</button>
                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md w-full">Delete Avatar</button>
                </div>
                
                <div className="w-full md:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-2">Name</label>
                            <input type="text" defaultValue="Vedran BERIC" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-pink-500" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Password</label>
                            <input type="password" defaultValue="********" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-pink-500"/>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">UserName</label>
                            <input type="text" defaultValue="VedB" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-pink-500"/>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Web</label>
                            <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-pink-500"/>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Email</label>
                            <input type="email" defaultValue="vedran.beric@gmail.com" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-pink-500"/>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Bio</label>
                            <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-pink-500"/>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Location</label>
                            <input type="text" defaultValue="Paris" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-pink-500"/>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Social</label>
                            <div className="flex space-x-2">
                                {/* Social buttons remain unchanged */}
                                <div className="flex space-x-2">
                                    <button className="bg-gray-200 rounded-full p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </button>
                                    <button className="bg-gray-200 rounded-full p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                        </svg>
                                    </button>
                                    <button className="bg-gray-200 rounded-full p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </button>
                                    <button className="bg-gray-200 rounded-full p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition duration-300 w-full sm:w-auto">Update Setting</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
