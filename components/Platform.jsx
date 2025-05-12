import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaGoogle } from 'react-icons/fa';
import melodies from '../src/assets/melodies.png';
import preshtech from '../src/assets/preshtech.png';

const Platform = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className='flex flex-col lg:flex-row justify-between items-center m-5 p-4'>
            <div className='text-white text-center lg:text-left mb-6 lg:mb-0'>
                <div className='flex flex-row items-center justify-center gap-5'>
                <img src={melodies} alt="" className='w-30 h-30 sm:w-60 sm:h-60 mx-auto lg:mx-0 pb-4'/>
                <img src={preshtech} alt="" className='w-20 h-20 sm:w-40 sm:h-40 mx-auto lg:mx-0 pb-4 object-contain' />
                </div>
                
                <h1 className='text-2xl font-bold'>Join Our Platform</h1>
                <p className='mt-2 text-sm sm:text-base'>
                    You can be one of the <span className='text-pink-600'>members</span> of our platform by <br />
                    just adding some necessary information through the signup form. If you <br />
                    already have an account on our website, you can just hit the <span className='text-blue-600'>login button</span> by your right.
                </p>
            </div>
            <div className="flex items-center justify-center w-full lg:w-auto">
                <div className="bg-pink-500 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4 text-center">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </h2>
                    <form>
                        {!isLogin && (
                            <>
                                <div className="mb-4 flex items-center border border-gray-300 rounded-md px-3 py-2">
                                    <FaUser className="text-white mr-2" />
                                    <input type="text" id="firstName" placeholder="First Name" className="w-full bg-transparent outline-none text-white" />
                                </div>
                                <div className="mb-4 flex items-center border border-gray-300 rounded-md px-3 py-2">
                                    <FaUser className="text-white mr-2" />
                                    <input type="text" id="lastName" placeholder="Last Name" className="w-full bg-transparent outline-none text-white" />
                                </div>
                                <div className="mb-4 flex items-center border border-gray-300 rounded-md px-3 py-2">
                                    <FaPhone className="text-white mr-2" />
                                    <input type="tel" id="phone" placeholder="Phone Number" className="w-full bg-transparent outline-none text-white" />
                                </div>
                            </>
                        )}
                        <div className="mb-4 flex items-center border border-gray-300 rounded-md px-3 py-2">
                            <FaEnvelope className="text-white mr-2" />
                            <input type="email" id="email" placeholder="Email" className="w-full bg-transparent outline-none text-white" />
                        </div>
                        <div className="mb-6 flex items-center border border-gray-300 rounded-md px-3 py-2">
                            <FaLock className="text-white mr-2" />
                            <input type="password" id="password" placeholder="Password" className="w-full bg-transparent outline-none text-white" />
                        </div>
                        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md cursor-pointer">
                            {isLogin ? 'Login' : 'Sign Up'}
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-sm font-semibold text-white ">Or</p>
                        <button className="w-full py-2 mt-2 bg-red-500 text-white rounded-md cursor-pointer flex items-center justify-center">
                            <FaGoogle className="mr-2" />
                            {isLogin ? 'Sign in with Google' : 'Sign up with Google'}
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <p>
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                            <button onClick={toggleForm} className="text-white font-semibold ml-1 cursor-pointer">
                                {isLogin ? 'Sign Up' : 'Login'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Platform;
