import React, { useMemo, useState } from 'react';
import { usePasswords } from '@/contexts/PasswordContext';
import AddPasswordModal from './AddPasswordModal';
import { Plus, Search, Copy, Edit, Trash, Key, CheckCircle, Download, Eye, EyeClosed, Asterisk, EyeOffIcon } from "lucide-react";
import Tooltip from './Tooltip';
import Searchbar from './Searchbar';

export default function Passwords() {
  const {passwords, removePassword} = usePasswords();
  const [searchTerm, setSearchTerm] = useState('');
  const [editModalOpen, setEditIsModalOpen] = useState(false);
  const [addModalOpen, setAddIsModalOpen] = useState(false);
  const [itemToEdit, setItemtoEdit] = useState(null)
  const [currentVisiblePassword, setCurrentVisiblePassword] = useState(null);
  const [copied, setCopied] = useState("");

  const filteredPasswords = useMemo(() => passwords.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.username.toLowerCase().includes(searchTerm.toLowerCase())
  ),[passwords, searchTerm]);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  function handleSearch(e){
    setSearchTerm(e.target.value);
  }

  function handleAdd(){
    setAddIsModalOpen(true);
  }

  function handleEdit(item){
    setItemtoEdit(item);
    setEditIsModalOpen(true);
  }

  function handleVisibility(item){
    if (item.id == currentVisiblePassword){
      setCurrentVisiblePassword({})
    }else {
      setCurrentVisiblePassword(item.id);
    }
  }

  function showPassword(item){
    return (  
      <div className='flex'>
        <Tooltip message={item.id === currentVisiblePassword ? 'Show Password' : 'Hide Password'}>
          <button className="text-gray-400 hover:text-gray-200 p-1" onClick={() => handleVisibility(item)}>
            {item.id === currentVisiblePassword ? <Eye size={16} /> : <EyeOffIcon size={16} />}
          </button>
        </Tooltip>
        {item.id === currentVisiblePassword ? (
          item.password.length > 15 ? (
            <Tooltip message={item.password}>
              <span>{item.password.slice(0, 15) + '...'}</span>
            </Tooltip>
          ) : (
            <span>{item.password}</span>
          )
        ) : (
          <span>****</span>
        )}
      </div>
    );
  }

  function handleExport() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(passwords, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.href = dataStr;
    downloadAnchor.download = "passwords.json";
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
  }

  function showAddModal(){
    const item = {title: '', username: '', password: ''}
    if (addModalOpen){
      return(
        <AddPasswordModal setIsModalOpen={setAddIsModalOpen} password={item} editing={false}></AddPasswordModal>
      )
    }
  }

  function showEditModal(){
    if (editModalOpen){
      return(
      <AddPasswordModal setIsModalOpen={setEditIsModalOpen} password={itemToEdit} editing={true}></AddPasswordModal>
      )
    }
  }

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">

      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <Searchbar searchTerm={searchTerm} handleSearch={handleSearch}></Searchbar>
          <div className="flex space-x-3 ml-4">
            <button onClick={handleAdd} className="flex items-center px-4 py-2 bg-green-900 hover:bg-green-700 rounded-lg transition">
              <Plus size={18} className="mr-2" /> Add Password
            </button>
            {showAddModal()}
            <button onClick={handleExport} className="flex items-center px-4 py-2 bg-blue-900 hover:bg-blue-800 rounded-lg transition">
              <Download size={18} className="mr-2" /> Export
            </button>
          </div>
        </div>
        <div className="bg-gray-950 p-4 rounded-lg">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700 text-gray-300">
                <th className="pb-2 w-1/4">Website</th>
                <th className="pb-2 w-1/4">Username</th>
                <th className="pb-2 w-1/4">Password</th>
                <th className="pb-2 w-1/4">Actions</th>

              </tr>
            </thead>
            <tbody>
              {filteredPasswords.map((item, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-gray-850 transition rounded-lg">
                  <td className="py-2 w-1/4">{item.title}</td>
                  <td className="py-2 w-1/4">{item.username}</td>
                  <td className="py-2 w-1/4">
                    {showPassword(item)}
                  </td>
                  <td className="py-2 flex space-x-3 w-1/4">
                    <Tooltip message={'Copy username'}>
                      <button className="text-gray-400 hover:text-gray-200 p-1" onClick={() => handleCopy(item.username, "username")}>
                        <Copy size={16} />
                      </button>
                    </Tooltip>
                    <Tooltip message={'Copy password'}>
                      <button className="text-gray-400 hover:text-gray-200 p-1" onClick={() => handleCopy(item.password, "password")}>
                        <Key size={16} />
                      </button>
                    </Tooltip>  
                    <Tooltip message={'Edit'}>
                      <button className="text-gray-400 hover:text-gray-200 p-1">
                        <Edit size={16} onClick={()=>handleEdit(item)} />
                      </button>
                    </Tooltip>
                    {showEditModal()}
                    <Tooltip message={'Delete'}>
                      <button className="text-red-500 hover:text-red-300 p-1" onClick={()=>removePassword(item.id)}>
                        <Trash size={16} />
                      </button>
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {copied && (
          <div className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-lg flex items-center">
            <CheckCircle className="mr-2" size={20} /> {copied} copied!
          </div>
        )}
      </main>
    </div>
  );
}
