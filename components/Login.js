import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Unknown here
    const router = useRouter();
    
    async function handleLogin(e) {
        e.preventDefault();
        try {
            setEmail('');
            setPassword('');
            router.push('/');
        } catch (err) {
            setError("Invalid email or password");
        }
    };
  return (
    <section className='py-16 bg-gradient-to-r from-violet-800 via-violet-950 to-indigo-950 flex justify-center items-center'>
        <div className="bg-slate-800 shadow-lg rounded-lg p-8 max-w-lg w-full">
            <h2 className="text-2xl font-semibold text-white text-center mb-4">Log In</h2>
            <form onSubmit={handleLogin}>
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
                ></input>
                <label htmlFor="password" className="block text-sm font-medium text-white mb-2 pt-2 text-right">
                <Link href={'/forgot-password'} className='text-pink-400'>Forgot Password?</Link>
                </label>
            </div>
            
            <div className=''>
                <button type='submit' className=" py-2 w-full border border-green-600 shadow-sm rounded-lg transition-all duration-500 text-base text-white font-semibold text-center mx-auto block hover:bg-green-700" >
                    log in
                </button>
            </div>
            </form>

            <div className='pt-5 text-center'>Don't have an account? <Link href={'/signup'} className='text-pink-500 font-bold'>Sign up!</Link></div>
        </div>
    </section>
  )
}
