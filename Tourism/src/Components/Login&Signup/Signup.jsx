import React, { useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/Home');
        } catch (error) {
            alert('All fields are required');
        }
    };

    const handleGoogleSignup = async () => {
        try {
            await signInWithPopup(auth, provider);
            navigate('/Home');
        } catch (error) {
            alert('Google sign-up failed');
        }
    };

    return (
        <>
            <h1 className='text-6xl text-white font-bold text-center dark:bg-gray-900 font-poppins pt-10'>
                Journey into the Heart of Adventure.
            </h1>
            <div className="flex min-h-screen bg-gray-200 dark:bg-gray-900 font-poppins overflow-y-hidden">
                {/* Left Section */}
                <div className="flex-1 flex flex-col items-center justify-center p-8">
                    <img src="https://www.pinclipart.com/picdir/big/59-599332_mission-travel-clipart-singapore-png-transparent-png.png" alt="Unique Features" className="mb-6 w-auto size-60 rounded-lg shadow-md" />
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Why Choose us?</h2>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                        <li>🌟 Guides for various problems people face</li>
                        <li>🔒 Secure and cross-checked</li>
                        <li>🌐 Connect with the community and explore various Culture.</li>
                        <li>🚀 Experience the Extraordinary.</li>
                    </ul>
                </div>

                {/* Right Section (Signup Form) */}
                <div className="flex-1 relative">
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-md"></div>
                    <div className="relative z-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-16">
                        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">Signup</h2>
                        <form onSubmit={handleSignup} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300">Full Name</label>
                                <input
                                    type="text"
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                    className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 dark:text-gray-300">Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 dark:text-gray-300">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
                            >
                                Signup
                            </button>
                        </form>
                        <h1 className='text-white text-center p-4'>
                            Already have an account? <a className='text-blue-400' href="/Login">Login</a>
                        </h1>
                        <h1 className='text-gray-500 text-center'>-OR-</h1>
                        <div className="flex justify-end">
                            <button
                                onClick={handleGoogleSignup}
                                className="w-full px-10 py-4 bg-white text-blue-400 rounded-lg mt-4 flex items-center justify-center space-x-2"
                            >
                                Sign Up with
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                    <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                    <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                    <path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
