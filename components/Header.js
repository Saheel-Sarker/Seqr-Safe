import React from 'react'
import Link from 'next/link'

export default function Header({font}) {
    return (
        <header className={`${font.className} flex px-10 py-2 pb-3 justify-between items-center sticky top-0`} >
            <nav className={`${font.className} `}>
                <ul className='flex items-center gap-x-10 text-2xl font-bold'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/#pricing">Pricing</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/faq">FAQ</Link></li>
                </ul>
            </nav>
            <div className="flex items-center mr-[205px] ">
                <img src="/GuyPasscode.svg" alt="hacker illustration" className="h-14 align-top mr-3" />
                <h1 className="text-5xl font-serif">Seqr Safe</h1>
            </div>
            <div className="flex ">
                <Link href="/login">
                <button className="min-w-24 bg-blue-800 text-white py-3 rounded-md hover:bg-blue-600  hover:text-white transition-colors">  
                    Login
                </button>
                </Link>
                <Link href="/signup">
                <button className="min-w-24 bg-green-800 text-white py-3 rounded-md ml-4 hover:bg-green-600 transition-colors">
                    Sign Up
                </button>
                </Link>
            </div>
        </header>
    )
}
