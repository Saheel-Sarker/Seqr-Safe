'use client'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import PasswordDetails from '@/components/PasswordDetails'
import { usePasswords } from '@/contexts/PasswordContext'
import BackButton from '@/components/BackButton'

export default function page() {
    const {slug} = useParams();
    const {passwords} = usePasswords();
    const password = passwords.find(p => p.id.toString() === slug);
    if (!password) return <p>Password not found</p>;

    return (

            <div className="flex items-center justify-center min-h-screen bg flex-col">
                <div className='absolute top-48'>
                    <BackButton></BackButton>
                </div>
                <PasswordDetails password={password}></PasswordDetails>
            </div>
    )
}
