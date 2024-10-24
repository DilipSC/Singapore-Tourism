import React,{useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const [fullname,setFullname]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();


    const handleSignup= async(e)=>{
        e.preventDefault();
        try{
        await createUserWithEmailAndPassword(auth,email,password);
        navigate('/Home');
        }catch(error){
            alert('All the fields are required')
        }


    }



  return (
    <>
    <h1 className='text-6xl text-white font-bold text-center dark:bg-gray-900 font-poppins pt-10'>Journey into the Heart of Adventure.</h1>
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
              placeholder="Enter your full name"
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
              placeholder="Enter your email"
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
              placeholder="Enter your password"
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
      </div>
    </div>
  </div>
  </>
  )
}
