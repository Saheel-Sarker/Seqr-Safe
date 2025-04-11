import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-10 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 lg:px-20 space-y-6 md:space-y-0">
      <div className="text-content max-w-full md:max-w-4xl space-y-4 md:space-y-6 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
          Keep data secure with zero hassle,
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-violet-500 to-pink-500 text-transparent bg-clip-text">
          For peace of mind you deserve.
        </h1>
        <p className="text-base md:text-2xl text-white">
          Simple and secure password management for all your accounts!
        </p>
        <div>
          <Link href="/signup">
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-green-500">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <div className="image-content w-full md:w-auto flex justify-center">
        <img
          src="/LockProtectionArt.svg"
          alt="Laptop security illustration"
          className="w-3/4 max-w-xs md:max-w-md lg:max-w-lg"
        />
      </div>
    </section>
  )
}
