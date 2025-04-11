'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header({ font }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='flex px-6 py-3 items-center sticky top-0 bg-black z-20 justify-between'>
      <nav className={`${font.className} flex-1 md:flex md:items-center `}>
        <ul className="flex flex-col md:flex-row items-center gap-y-4 md:gap-y-0 gap-x-6 md:gap-x-10 text-lg md:text-2xl font-bold">
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
      <div className="flex-1 md:justify-start">
        <div className="flex items-center">
          <img
            src="/GuyPasscode.svg"
            alt="hacker illustration"
            className="h-10 md:h-14 align-top mr-3"
          />
          <h1 className="text-3xl md:text-5xl font-serif text-center md:text-left">
            Seqr Safe
          </h1>
        </div>
      </div>
      <div className={`flex flex-col md:flex-row items-center space-x-4`}>
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
  </header>
  )
}