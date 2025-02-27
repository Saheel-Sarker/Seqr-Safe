import React from 'react'
import Link from 'next/link'

export default function Header({font}) {
    return (
        <header className={`${font.className} flex px-10 py-2 pb-3 justify-between items-center`} >
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
                <h1 className="text-5xl font-serif">keepr</h1>
            </div>
            <div className="gap-4">
                <Link href="/login">
                <button className="border border-blue-950 text-white px-6 py-3 rounded-md hover:bg-green-500 hover:border-green-500 hover:text-white transition-colors">  
                    Login
                </button>
                </Link>
                <Link href="/signup">
                <button className="bg-blue-950 text-white px-6 py-3 rounded-md ml-4 hover:bg-blue-500 transition-colors">
                    Sign Up
                </button>
                </Link>
            </div>
        </header>
    )
}
