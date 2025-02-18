import Link from 'next/link'
import React, { useState } from 'react'
import AddPasswordModal from './AddPasswordModal';
import { usePasswords } from '@/contexts/PasswordContext';
import { useRouter } from 'next/navigation';

export default function PasswordDetails({password}) {
  const [showPassword, setShowPassword] = useState('false')
  const {removePassword} = usePasswords();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
    function handleAdd(){
      setIsModalOpen(true);
    }

    function handleDelete(){
      removePassword(password.id);
      router.back()
    }
  
    function showAddModal(){
      if (isModalOpen){
        return(
          <AddPasswordModal setIsModalOpen={setIsModalOpen} password={password}></AddPasswordModal>
        )
      }
    }

  return (
  <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96">
    <h2 className="text-xl font-semibold">Amazon</h2>
    
    <div className="mt-4">
      <p className="text-gray-400">URL:</p>
      <Link href="https://amazon.com" className="text-blue-400 underline">
        {password.title}
      </Link>
    </div>

    <div className="mt-2">
      <p className="text-gray-400">Username:</p>
      <div className="flex items-center justify-between bg-gray-700 px-3 py-2 rounded-md">
        {/* <span>••••••••</span>
        <button className="text-blue-400">Show</button> */}
        {password.username}
      </div>
    </div>

    <div className="mt-2">
      <p className="text-gray-400">Password:</p>
      <p className="bg-gray-700 p-2 rounded-md">
        {password.password}
      </p>
    </div>

    <div className="flex justify-between mt-4">
      <button className="bg-blue-600 px-4 py-2 rounded-md" onClick={handleAdd}>Edit</button>
      <button className="bg-red-600 px-4 py-2 rounded-md" onClick={handleDelete}>Delete</button>
    </div>

    {showAddModal()}
  </div>
  )
}
