import { useRouter } from 'next/router'
import React from 'react'

export default function PasswordDetails({password}) {
  return (
<div className="flex items-center justify-center min-h-screen bg">
  <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96">
    <h2 className="text-xl font-semibold">Amazon</h2>
    
    <div className="mt-4">
      <p className="text-gray-400">URL:</p>
      <a href="https://amazon.com" className="text-blue-400 underline">https://amazon.com</a>
    </div>

    <div className="mt-2">
      <p className="text-gray-400">Password:</p>
      <div className="flex items-center justify-between bg-gray-700 px-3 py-2 rounded-md">
        <span>••••••••</span>
        <button className="text-blue-400">Show</button>
      </div>
    </div>

    <div className="mt-2">
      <p className="text-gray-400">Notes:</p>
      <p className="bg-gray-700 p-2 rounded-md">My backup account</p>
    </div>

    <div className="flex justify-between mt-4">
      <button className="bg-blue-600 px-4 py-2 rounded-md">Edit</button>
      <button className="bg-red-600 px-4 py-2 rounded-md">Delete</button>
    </div>
  </div>
</div>
  )
}
