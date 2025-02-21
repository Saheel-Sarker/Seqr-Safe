'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { LockOpen, Notebook, Settings, User, LogOut, CreditCard, Users } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const [showLogout, setShowLogout] = useState(false);

  function logoutDisplay(){
    if (showLogout){
      return(
        <div className="mt-3 flex items-center w-full cursor-pointer px-3 py-2 bg-red-900 rounded-md text-white hover:bg-red-700">
          <LogOut className="mr-2" size={20}/>
          <span className="">Logout</span>
        </div>
      )
    }
  }

  return (
    <nav className='px-6 bg-gray-950 text-white w-64 h-screen flex flex-col items-start shadow-lg'>
      {/* Logo and Title */}
      <div className='flex items-center pt-10 mx-auto'>
        <img src='/GuyPasscode.svg' alt='hacker illustration' className='h-14 mr-3' />
        <h1 className='text-5xl font-serif text-white'>keepr</h1>
      </div>

      <div className="w-full h-px bg-white my-4 opacity-50"></div>

      {/* Navigation Links */}
      <ul className='w-full pt-10 px-4'>
        {[{ href: '/dashboard/passwords', label: 'Passwords', Icon: LockOpen },
          { href: '/dashboard/notes', label: 'Notes', Icon: Notebook },
          { href: '/dashboard/cards', label: 'Cards', Icon: CreditCard },
          { href: '/dashboard/identities', label: 'Identities', Icon: Users},
        ].map(({ href, label, Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className={`flex items-center space-x-3 cursor-pointer px-4 py-2 text-slate-300 relative
                ${pathname === href ? 'border-l-4 border-red-700 text-white' : 'hover:border-l-4 hover:border-red-900'}`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${pathname === href ? 'bg-red-900': 'bg-red-950'}`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="">{label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className='mt-auto pb-6 w-full pt-10 px-4'>
        <div className='flex items-center justify-between'>

          <div
            className="w-10 h-10 bg-red-950 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-900"
            onClick={() => setShowLogout(!showLogout)}
          >
            <User className="w-5 h-5 text-white" />
          </div>

          <Link href='/dashboard/settings' className="w-10 h-10 bg-red-950 rounded-full flex items-center justify-center hover:bg-red-900">
            <Settings className="w-5 h-5 text-white" />
          </Link>
        </div>
        {logoutDisplay()}
      </div>
    </nav>
  );
}
