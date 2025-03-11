import React from 'react'
import Link from 'next/link'

export default function Footer({font}) {
  return (


<footer className={` rounded-lg m-4`}>
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
                <span className={`self-center text-2xl whitespace-nowrap dark:text-white ${font.className}`}>Seqr Safe</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link href="contact" className="hover:underline me-4 md:me-6">Contact us!</Link>
                </li>
                <li>
                    <Link href="faq" className="hover:underline me-4 md:me-6">Frequently asked questions
                    </Link>
                </li>
                <li>
                    <Link href="signup" className="hover:underline me-4 md:me-6">
                    Sign up</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">Seqr Safe™</Link>. All Rights Reserved.</span>
    </div>
</footer>


  )
}
