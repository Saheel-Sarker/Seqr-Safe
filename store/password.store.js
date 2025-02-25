import { create } from 'zustand';

// Create the Zustand store
const usePasswordStore = create((set) => ({
  passwords: [],

  setPasswords: (passwords) => set({passwords}),
  
  // Add password
  createPassword: async (newPassword) => {
    if (!newPassword.url || !newPassword.username || !newPassword.password){
        return {success:false, message:"Please fill in all the fields"}
    };
    const res = await fetch("/api/passwords", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newPassword)
    });
    const data = await res.json();
    console.log(data)
    set((state) => ({passwords: [...state.passwords,data.data]}));
    return {success: true, message: "Password created successfully"};
  },

  updatePassword: async (updatedPassword, pid) => {
    console.log(updatedPassword);
    console.log(pid);
    const res = await fetch(`/api/passwords/${pid}`, {
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(updatedPassword)
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };
    set((state) => ({passwords: state.passwords.map((password) => (password._id === pid ? data.data : password))}));
    return {success: true, message: data.message};
  },

  fetchPasswords: async () => {
    const res = await fetch("/api/passwords");
    const data = await res.json();
    set({passwords: data.data});
  },

  deletePassword: async (pid) => {
    console.log(pid);
    const res = await fetch(`/api/passwords/${pid}`, {
        method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // update the ui immediately, without needing a refresh
    set((state) => ({ passwords: state.passwords.filter((password) => password._id !== pid) }));
    return { success: true, message: data.message };
    },

}));

export default usePasswordStore;
