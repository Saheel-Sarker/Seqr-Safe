import React from 'react'
import Link from 'next/link'

export default function Header(proppinsClass) {
  return (
    <header class="header">
        <nav class={`${poppinsClass} flex justify-between items-center py-4`}>
            <ul>
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
            </ul>
        </nav>
        <h1 class="brand-name">Keepr</h1>
        <div class="auth-buttons">
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md">Login</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4">Sign Up</button>
        </div>
  </header>
  )
}
