import { create } from 'zustand';

const API_URL = "/api/passwords" 

// Create the Zustand store
const usePasswordStore = create((set) => ({
  passwords: [],

  setPasswords: (passwords) => set({passwords}),
  
  // Add password
  createPassword: async (newPassword) => {
    const token = localStorage.getItem('token');
    if (!newPassword.url || !newPassword.username || !newPassword.password){
        return {success:false, message:"Please fill in all the fields"}
    };
    const res = await fetch(`${API_URL}`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`
        },
        body:JSON.stringify(newPassword)
    });
    const data = await res.json();
    console.log(data)
    set((state) => ({passwords: [...state.passwords,data.data]}));
    return {success: true, message: "Password created successfully"};
  },

  updatePassword: async (updatedPassword, pid) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API_URL}/${pid}`, {
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`
        },
        body:JSON.stringify(updatedPassword)
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };
    set((state) => ({passwords: state.passwords.map((password) => (password._id === pid ? data.data : password))}));
    return {success: true, message: data.message};
  },

  fetchPasswords: async () => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API_URL}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    const data = await res.json();
    set({passwords: data.data});
  },

  deletePassword: async (pid) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API_URL}/${pid}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // update the ui immediately, without needing a refresh
    set((state) => ({ passwords: state.passwords.filter((password) => password._id !== pid) }));
    return { success: true, message: data.message };
  },

}));

export default usePasswordStore;
