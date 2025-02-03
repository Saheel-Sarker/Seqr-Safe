import React from 'react'
import Link from 'next/link'
import { useState } from 'react';

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSignup(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("User signed up");
        } catch (err) {
            setError("Failed to sign up");
          }
    };

  return (
    <section className='py-16 bg-gradient-to-r from-violet-800 via-violet-950 to-indigo-950  flex justify-center items-center'>
        <div className="bg-slate-800 shadow-lg rounded-lg p-8 max-w-lg w-full">
            <h2 className="text-2xl font-semibold text-white text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSignup}>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email
                </label>
                <input
                type="email"
                id="email"
                placeholder="Your email"
                className="block w-full px-4 py-2 border border-gray-100 rounded-md text-white bg-slate-900"
                required
                onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
                </label>
                <input
                type='password'
                id="message"
                placeholder="Your password"
                className="block w-full px-4 py-2 border border-gray-100 rounded-md text-white bg-slate-900"
                required
                onChange={(e)=>{setPassword(e.target.value)}}
                ></input>
                {/* <label htmlFor="password" className="block text-sm font-medium text-white mb-2 pt-2 text-right">
                <Link href={'/forgot-password'} className='text-violet-400'>Forgot Password?</Link>
                </label> */}
                {/* put a line here to see password strength instead */}
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Confirm Password
                </label>
                <input
                type='password'
                id="message"
                placeholder="Your password"
                className="block w-full px-4 py-2 border border-gray-100 rounded-md text-white bg-slate-900"
                required
                onChange={(e)=>{setConfirmPassword(e.target.value)}}
                ></input>
                {/* <label htmlFor="password" className="block text-sm font-medium text-white mb-2 pt-2 text-right">
                <Link href={'/forgot-password'} className='text-violet-400'>Forgot Password?</Link>
                </label> */}
                {/* put a line here to see password strength instead */}
            </div>
            
            <div className=''>
                <label htmlFor="password" className="text-sm font-medium text-white mb-2 pt-2 flex items-center space-x-2">
                    <input type='checkbox' value='' className='accent-pink-500'></input> 
                    <label> I agree with the <Link href={'/t&c'} className='text-pink-400'>Terms & Conditions</Link> </label> 
                </label>
                <button type='submit' className=" py-2 w-full border border-green-600 shadow-sm rounded-lg transition-all duration-500 text-base text-white font-semibold text-center mx-auto block hover:bg-green-700" >
                    Sign up
                </button>
            </div>
            
            </form>

            <div className='pt-5 text-center'>Have an account? <Link href={'/login'} className='text-pink-500 font-bold'>Log in!</Link></div>
        </div>
    </section>
  )
}
