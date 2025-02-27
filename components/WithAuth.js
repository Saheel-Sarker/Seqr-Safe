'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth.store';

export default function WithAuth ({children}) {
    const router = useRouter();
    const { isAuthenticated, isCheckingAuth} = useAuthStore();
    // const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!isCheckingAuth) {
            if (!isAuthenticated) {
                router.push('/');
            }
            // else{
            //     setLoading(false);
            // }
        }
    }, [isAuthenticated]);

    // if (loading) {
    //     return (
    //         <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    //         <h1 className="text-2xl font-semibold text-blue-600">Checking Authorization...</h1>
    //         <p className="text-lg text-gray-600">Please wait while we verify your credentials.</p>
    //         </div>
    //     );
    // }

    return (
        <div>
            {children}
        </div>
    );
};

