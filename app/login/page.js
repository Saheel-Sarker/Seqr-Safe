'use client'

import React from 'react'
import { useState } from 'react'
import { auth } from '@/firebaseConfig/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'

export default function page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Unknown here
    
    async function handleLogin(e) {
        e.preventDefault();
        try {
          await signInWithEmailAndPassword(auth, email, password);
          console.log("User logged in");
        } catch (err) {
          setError("Invalid email or password");
        }
    };

    return (
        <div className="auth-container">
            <h2>Welcome Back!</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign In</button>
            </form>
            {error && <p className="error">{error}</p>}
      </div>
    );
};
