'use client'
import { createContext, useContext, useEffect, useState } from "react";

// Create the context
const PasswordContext = createContext();

// Context Provider
export const PasswordProvider = ({ children }) => {
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    localStorage.setItem("passwords", JSON.stringify(passwords));
  }, [passwords]);

  // Add password
  function addPassword(data){
    const newListofPasswords = passwords.concat({...data, id: passwords.length + 1});
    setPasswords(newListofPasswords);
  };

  function editPassword(data, id){
    const newListofPasswords = passwords.map((p) => {
      if (p.id === id) {
        console.log("the id is")
        console.log(id)
        return {...data, id:id};
      }
      else {
        return p;
      }
    });
    setPasswords(newListofPasswords);
  };

  // Remove password
  function removePassword(id){
    const newListofPasswords = passwords.filter((p) => p.id !== id);
    setPasswords(newListofPasswords);
  };

  // Toggle password visibility
  function toggleVisibility(id){
    const newListofPasswords = passwords.map((p) => {
        if (p.id === id){
            const updatedPassword = {
                ...p,
                isVisible: !p.isVisible,
            };
            return updatedPassword;
        }
        return p;
    })
    setPasswords(newListofPasswords);
  };

  return (
    <PasswordContext.Provider value={{ passwords, addPassword, editPassword, removePassword, toggleVisibility }}>
      {children}
    </PasswordContext.Provider>
  );
};

// Custom hook to use password context
export const usePasswords = () => useContext(PasswordContext);