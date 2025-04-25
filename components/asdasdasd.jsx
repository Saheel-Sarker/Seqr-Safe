'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header({ font }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className={`${font.className} flex px-6 md:px-10 py-3 justify-between items-center sticky top-0 bg-black z-20`}
    >
      {/* Logo Section */}
      <div className="flex items-center flex-1 justify-between md:justify-start">
        <div className="flex items-center">
          <img
            src="/GuyPasscode.svg"
            alt="hacker illustration"
            className="h-10 md:h-14 align-top mr-3"
          />
          <h1 className="text-3xl md:text-5xl font-serif text-center md:text-left">
            Zeni Pass
          </h1>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          font.className
        } flex-1 md:flex md:items-center md:justify-end`}
      >
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

      {/* Buttons */}
      <div
        className={`flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0 ${
          isMenuOpen ? 'block' : 'hidden'
        } md:block`}
      >
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
      {isMenuOpen && ( 
        <div className="absolute top-16 left-0 w-screen h-screen bg-black text-white p-4 md:hidden flex flex-col items-center gap-4">
                  <nav
        className={`${
          font.className
        } flex-1 md:flex md:items-center md:justify-end`}
      >
                <div className="flex items-center">
          <img
            src="/GuyPasscode.svg"
            alt="hacker illustration"
            className="h-10 md:h-14 align-top mr-3"
          />
          <h1 className="text-3xl md:text-5xl font-serif text-center md:text-left">
            Zeni Pass
          </h1>
        </div>
            <ul className="flex md:flex-row items-center gap-y-4 md:gap-y-0 gap-x-6 md:gap-x-10 text-lg md:text-2xl font-bold">
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
      )}
    </header>
  )
}
