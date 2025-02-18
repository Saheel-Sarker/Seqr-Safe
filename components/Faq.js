'use client'
import React from 'react'
import { useState } from 'react';

export default function Faq() {

    const qa = [
        {
            question: 'Why should I use Keepr?',
            answer: 'Keepr helps you to manage your passwords securely, which means you don\'t have to remember all of them or write them down on a piece of paper that could get lost or stolen. By using Keepr, you can generate strong, unique passwords for each of your accounts, which makes it much harder for someone to hack into your accounts if they do manage to get hold of your passwords'
        },
        {
            question: 'Is it safe to store my passwords in a password manager?',
            answer: 'Yes, Keepr uses strong encryption to protect your passwords, which means that they are stored securely and can only be accessed with your master password. It\'s important to choose a strong and unique master password, as this is the key to accessing your passwords in Keepr.'
        },
        {
            question: 'What happens if I forget my master password?',
            answer: 'If you forget your master password, unfortunately, there is no way to recover it. Your passwords are strongly encrypted for security reasons, and even Keepr\'s developers can\'t access them without your master password. So, it\'s crucial to choose a strong and memorable master password and keep a backup copy of it somewhere safe. If you forget it, you can still recover your account by using the "Forgot password" option while signing in, but changing your password will mean losing all passwords in your account.'
        },
        {
            question: 'Is it possible to export my passwords from Keepr?',
            answer: 'Yes, Keepr allows you to export your passwords in a format that can be imported into other password managers or stored as a backup. This can be useful if you want to switch to a different password manager, or if you want to keep a backup copy of your passwords in case something happens to your Keepr account.'
        },
        {
            question: 'How can I import my passwords from other password managers?',
            answer: 'To import passwords from other password managers into Keepr, you can use a standard format like CSV. Your old password manager should allow you to export your passwords in this format. Simply go to your Keepr settings to import passwords from other managers.'
        },
        {
            question: 'Can I use my password manager to store other sensitive information?',
            answer: 'Yes, Keepr can be used to store other sensitive information, such as credit card details, secure notes, or other types of personal information that you want to keep secure.'
        },
    ];

    const [expanded, setExpanded] = useState(null);
    function toggleAnswer(index) {
        setExpanded(expanded === index ? null : index);
    };


  return (
    <section className="py-16 bg-gradient-to-r from-indigo-800 via-violet-950 to-indigo-950  flex justify-center items-center">
      <div className="bg-slate-800 rounded-lg p-8 max-w-lg w-full">

        <h2 className="text-2xl font-semibold text-white text-center mb-4">Frequently asked Questions</h2>
        {qa.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
                <div className="flex justify-between items-center cursor-pointer py-4 " onClick={() => toggleAnswer(index)}>
                    <h1 className="text-lg font-medium text-white ">{item.question}</h1>
                    <div className={`w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-400 relative flex-shrink-0`}>
                        <div className={`absolute w-3 h-[2px]  bg-gray-400`}></div>
                        <div className={`absolute w-[2px] h-3  bg-gray-400  transition-transform ${expanded === index ? 'rotate-90' : ''}`} style={{ transformOrigin: 'center' }} ></div>
                    </div>
                    
                </div>
                {expanded === index && (
                    <p className="text-gray-400 text-sm mb-4">{item.answer}</p>
                )}
            </div>
        ))}

    
        
        </div>
    </section>
  )
}
