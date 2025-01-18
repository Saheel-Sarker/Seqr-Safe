import React from 'react'
import Link from 'next/link'


export default function Hero() {
  return (
    <section className="pt-10 flex items-center justify-between px-10 md:px-20 lg:px-40">
    <div className="text-content max-w-4xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
        Keep data secure with Zero hassle, 
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-500 to-pink-500 text-transparent bg-clip-text">
        For peace of mind you deserve.
        </h1>
        <p className="text-lg md:text-2xl text-white">
        Simple and secure password management for all your accounts!
        </p>
        <button href='/signup' className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-green-500">
        <Link href="/login">
            Get Started
        </Link>
        </button>
    </div>


    <div className="image-content hidden md:block">
        <img
        src="/LockProtectionArt.svg"
        alt="Laptop security illustration"
        className="w-full max-w-md lg:max-w-lg"
        />
    </div>
    </section>
  )
}
