'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { LockOpen, Notebook, Settings, User } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className='px-6 bg-gray-950 text-white w-64 h-screen flex flex-col items-start shadow-lg'>
      {/* Logo and Title */}
      <div className='flex items-center pt-10 pl-4'>
        <img src='/GuyPasscode.svg' alt='hacker illustration' className='h-14 mr-3' />
        <h1 className='text-5xl font-serif text-white'>keepr</h1>
      </div>

      <div className="w-full h-px bg-white my-4 opacity-50"></div>

      {/* Navigation Links */}
      <ul className='w-full pt-10 px-4'>
        {[
          { href: '/dashboard/passwords', label: 'Passwords', Icon: LockOpen },
          { href: '/dashboard/notes', label: 'Notes', Icon: Notebook }
        ].map(({ href, label, Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className={`flex items-center space-x-3 cursor-pointer px-4 py-2 text-slate-300 relative
                ${pathname === href ? 'border-l-4 border-red-700 text-white' : 'hover:border-l-4 hover:border-red-900'}`}
            >
              <div href={href} className={`w-10 h-10 rounded-full flex items-center justify-center ${pathname === href ? 'bg-red-900': 'bg-red-950'}`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm">{label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Bottom Navigation */}
      <ul className='mt-auto pb-6 w-full pt-10 px-4'>
        {[
          { href: '/dashboard/login', label: 'Login', Icon: User },
          { href: '/dashboard/settings', label: 'Settings', Icon: Settings }
        ].map(({ href, label, Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className={`flex items-center space-x-3 cursor-pointer px-4 py-2 text-slate-300 relative
                ${pathname === href ? 'border-l-4 border-red-700 text-white' : 'hover:border-l-4 hover:border-red-900'}`}
            >
              <div href={href} className={`w-10 h-10 bg-red-950 rounded-full flex items-center justify-center ${pathname === href ? 'bg-red-900': 'bg-red-950'}`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
