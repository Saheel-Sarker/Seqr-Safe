import React from 'react'
import Link from 'next/link'


export default function Hero() {
  return (
    <section className="pt-10 flex items-center justify-between px-10 md:px-20 lg:px-32">
    <div className="text-content max-w-lg space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text">
        Protect Your Data, Seamlessly.
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
        Your personal data is safe, secure, and accessible whenever you need it.
        Experience the ultimate protection and convenience with Keepr.
        </p>
        <button href='/signup' className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-amber-500">
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
