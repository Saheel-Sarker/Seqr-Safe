import { createContext, useContext, useEffect, useState } from "react";
import {auth} from '@firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebaseConfig"; // Import Firebase config

// Create authentication context
const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvidor({children}){
    const [currentUser, setCurrentUser] = useState(null)
    const [userData, setUserData] = useState([])
    const [loading, setLoding] = useState(true)
    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const value ={

    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
