import React, { useMemo, useState } from 'react';
import PasswordItem from './PasswordItem';
import { usePasswords } from '@/contexts/PasswordContext';
import AddPasswordModal from './AddPasswordModal';

export default function Passwords() {
  const {passwords} = usePasswords();
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  function filterPasswords(){
      const filteredPasswords = useMemo(() => passwords.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),[passwords, searchTerm]);
      return filteredPasswords;
  }

  function handleSearch(e){
    setSearchTerm(e.target.value);
  }

  function handleAdd(){
    setIsModalOpen(true);
  }

  function showAddModal(){
    if (isModalOpen){
      return(
        <AddPasswordModal setIsModalOpen={setIsModalOpen}></AddPasswordModal>

      )
    }
  }

  return (
    <div className="flex flex-col h-full w-full p-6 text-gray-100">

      <input
        type="text"
        placeholder="Search"
        className="border border-gray-700 p-3 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-500"
        onChange={handleSearch}
      />

      <div className="mt-4 flex justify-end">
        <button className="bg-blue-950 hover:bg-violet-950 transition text-white px-4 py-2 rounded-lg text-reg"
        onClick={handleAdd}>
          Add
        </button>
      </div>

      {showAddModal()}

      <div className="overflow-y-auto mt-8">
        <table className="w-full table-auto text-left border-collapse">
          <thead className="border-b border-gray-700">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">URL</th>
            </tr>
          </thead>
          <tbody>
            {filterPasswords().map((item) => (
              <PasswordItem
                key={item.id}
                item={item}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
