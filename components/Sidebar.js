'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { LockOpen, Notebook, Settings, User, LogOut, CreditCard, Users, Crown, Settings2 } from 'lucide-react';
import { useAuthStore } from '@/store/auth.store';
import { useRouter } from 'next/navigation';
import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Sidebar({ showPricing, setShowPricing }) {
  const pathname = usePathname();
  const [showLogout, setShowLogout] = useState(false);
  const { logout, user } = useAuthStore();
  const name = user?.name;
  const initial = name ? name.charAt(0).toUpperCase() : '';
  const router = useRouter();

  async function handleSignout(e) {
    e.preventDefault();
    await logout();
    router.push('/');
  }

  return (
    <aside className="px-6 bg-gray-950 text-white w-64 h-screen flex flex-col items-start shadow-lg">
      {/* Logo and Title */}
      <header className="flex pt-10 mx-auto">
        <img src="/GuyPasscode.svg" alt="Hacker Illustration" className="h-11 mr-3" />
        <h1 className={`text-4xl ${ubuntu.className}`}>
          zeni⋅<span className="text-green-300">pass</span>
        </h1>
      </header>

      <hr className="w-full h-px bg-white my-4 opacity-50" />

      {/* Navigation Links */}
      <nav aria-label="Sidebar Navigation">
        <ul className="w-full pt-10 px-4">
          {[
            { href: '/dashboard/passwords', label: 'Passwords', Icon: LockOpen },
            { href: '/dashboard/notes', label: 'Notes', Icon: Notebook },
            { href: '/dashboard/cards', label: 'Cards', Icon: CreditCard },
            { href: '/dashboard/identities', label: 'Identities', Icon: Users },
          ].map(({ href, label, Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center space-x-3 cursor-pointer px-4 py-2 text-slate-300 relative
                  ${pathname === href ? 'border-l-4 border-red-700 text-white' : 'hover:border-l-4 hover:border-red-900'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${pathname === href ? 'bg-red-900' : 'bg-red-950'}`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pb-32 w-full relative">
        <div className="flex justify-around">
          <div className="flex items-center">
            <button
              className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600"
              onClick={() => setShowLogout(!showLogout)}
              aria-label="Toggle Logout"
            >
              <span className="text-white text-xl">{initial}</span>
            </button>
          </div>
          <div className="flex items-center">
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer bg-blue-800 hover:bg-blue-600"
              aria-label="Settings"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center">
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer ${!showPricing ? 'bg-violet-800 hover:bg-violet-600' : 'bg-pink-600 hover:bg-pink-800'}`}
              onClick={() => setShowPricing(!showPricing)}
              aria-label={!showPricing ? 'Upgrade' : 'Show Content'}
            >
              <Crown className="w-5 h-5" />
            </button>
          </div>
        </div>

        {showLogout && (
          <div className="w-full flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-48 mt-14 absolute h-8 bg-green-800 rounded-md flex items-center justify-center cursor-pointer hover:bg-green-600"
              onClick={handleSignout}
              aria-label="Logout"
            >
              <LogOut className="w-5 h-5 text-white mr-3" />
              <span>Logout</span>
            </motion.div>
          </div>
        )}
      </div>
    </aside>
  );
}
