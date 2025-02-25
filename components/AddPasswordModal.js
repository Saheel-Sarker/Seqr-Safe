import usePasswordStore from '@/store/password.store';
import React, { useState } from 'react'

export default function AddPasswordModal({setIsModalOpen, password, editing}) {
    const {createPassword, updatePassword} = usePasswordStore()
    const [url, setUrl] = useState(password.url || '');
    const [username, setUsername] = useState(password.username || '');
    const [passwordText, setPasswordText] = useState(password.password || '');

    function handleChange(e){        
        if (e.target.name == 'url') {
            setUrl(e.target.value);
        }
        if (e.target.name == 'username') {
            setUsername(e.target.value);
        }
        if (e.target.name == 'password') {
            setPasswordText(e.target.value);
        }
    };
    

    async function handleAdd(e){
        e.preventDefault(); // Prevents page reload
        const newPassword = {url: url, username: username, password: passwordText};
        if (editing){
            const {success, message} = await updatePassword(newPassword, password._id)
            console.log("Success:", success);
            console.log("Message:", message);
        }else {
            const {success, message} = await createPassword(newPassword)
            console.log("Success:", success);
            console.log("Message:", message);
        }
        setIsModalOpen(false)
    };
    function handleCancel(){
        setIsModalOpen(false)
    };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-slate-800 shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-white text-center mb-4">Add new password</h2>
        <form onSubmit={handleAdd}>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Site
                </label>
                <input
                value={url}
                placeholder={password ? "Edit Title" :  "example.com"}
                className="block w-full px-4 py-2 border border-gray-100 rounded-md text-white bg-slate-900"
                onChange={handleChange}
                name={"url"}

                required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                User Name
                </label>
                <input
                value={username}
                placeholder={password ? "Edit Username" :  "Username"}
                className="block w-full px-4 py-2 border border-gray-100 rounded-md text-white bg-slate-900"
                onChange={handleChange}
                name={"username"}
                required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
                </label>
                <input
                value={passwordText}
                placeholder={password ? "Edit Password" :  "Password"}
                className="block w-full px-4 py-2 border border-gray-100 rounded-md text-white bg-slate-900"
                onChange={handleChange}
                name={"password"}
                required
                />
            </div>
            
            <div className=''>
                <button type='submit' className=" py-2 w-full border border-green-600 shadow-sm rounded-lg transition-all duration-500 text-base text-white font-semibold text-center mx-auto block hover:bg-green-700">
                    save
                </button>
                <button type='cancel' className=" py-2 w-full border border-green-600 shadow-sm rounded-lg transition-all duration-500 text-base text-white font-semibold text-center mx-auto block hover:bg-green-700" 
                onClick={handleCancel}>
                    cancel
                </button>
            </div>
        </form>
    </div>
    </div>
  )
}
