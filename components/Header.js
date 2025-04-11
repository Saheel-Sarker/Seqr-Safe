'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header({ font }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <header className='flex py-3 items-center sticky top-0 bg-black z-20 justify-between'>
        <nav className={`${font.className} hidden md:flex flex-1 ml-16`}>
          <ul className="flex items-center text-3xl space-x-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center flex-1 justify-center">
          <img
            src="/GuyPasscode.svg"
            alt="hacker illustration"
            className="h-10 md:h-14 align-top mr-3"
          />
          <h1 className="text-3xl md:text-5xl font-serif text-center md:text-left">
            Seqr Safe
          </h1>
        </div>
        <div className={`flex-1 hidden md:flex flex-col md:flex-row items-center space-x-4 justify-end mr-16`}>
          <Link href="/login">
            <button className="w-full md:w-auto px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-600 transition-colors">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="w-full md:w-auto px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-600 transition-colors">
              Sign Up
            </button>
          </Link>
        </div>

        <button
          className="md:hidden text-white fixed ml-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
    </header>

            {isMenuOpen && (
      <div className='w-screen h-screen bg-black flex flex-col items-center'>
        <nav className={`${font.className} my-10`}>
          <ul className="flex flex-col items-center text-xl space-y-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </nav>
        <div className={`flex flex-col items-center space-y-4 my-10`}>
          <Link href="/login">
            <button className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-600 transition-colors">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-600 transition-colors">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    )}
    </header>
  )
}