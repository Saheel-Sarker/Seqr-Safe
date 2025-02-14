'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import PasswordDetails from '@/components/PasswordDetails'
import { usePasswords } from '@/contexts/PasswordContext'

export default function page() {
    const {slug} = useParams();
    const {passwords} = usePasswords();
    console.log(slug);
    console.log("hj");
    console.log(passwords);
    const password = passwords.find(p => p.id.toString() === slug);
    if (!password) return <p>Password not found</p>;

    return (
        <PasswordDetails password={password}></PasswordDetails>
    )
}
