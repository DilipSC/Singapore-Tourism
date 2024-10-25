import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      alert('All fields are required');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/home');
    } catch (error) {
      alert('Google sign-in failed');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white font-poppins">
      {/* Left Section */}
      <div
        className="hidden md:flex md:w-1/2 lg:w-2/3 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://i.ibb.co/mXNDnBg/Marina-Bay-Sands-Singapore-Images.jpg")' }}
      >
        <div className="bg-gray-900 bg-opacity-50 w-full h-full flex items-center justify-center p-10">
          <div className="backdrop-blur-sm p-6 rounded-lg">
            <h2 className="text-4xl font-bold mb-4">Welcome to Our Website</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>Explore our wide range of services.</li>
              <li>Gain insights with our expert-curated resources.</li>
              <li>Sign up to get started today!</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center md:w-1/2 lg:w-1/3 px-8 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 p-3 rounded text-white font-semibold hover:bg-blue-600 transition-colors"
          >
            Log In
          </button>
        </form>

        <p className="text-white text-center p-4">
          Don’t have an account? <a className="text-blue-400" href="/Signup">Sign Up</a>
        </p>
        <h1 className="text-gray-500 text-center">-OR-</h1>

        <div className="flex justify-end">
          <button 
            onClick={handleGoogleLogin} 
            className="w-full px-10 py-4 bg-white text-blue-400 rounded-lg mt-4 flex items-center justify-center space-x-2"
          >
            Login with Google
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path
                fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#e53935"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4caf50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1565c0"
                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
