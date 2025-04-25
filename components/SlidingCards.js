'use client'

import React from 'react'
import Aos from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css";
import { FileText, Keyboard, Lock, Shield, User } from 'lucide-react';

export default function SlidingCards() {
    useEffect(() => {
      Aos.init({
        duration: 1000, // Animation duration (1 second)
        offset: 100,    // Trigger offset
        once: false, 
      });
    }, []);

    const blurbs = [
          {
            title: "Generate strong passwords",
            icon: <Lock className='mx-auto'></Lock>,
            blurb: "Zeni Pass's robust built-in password generator ensures that you can effortlessly create strong and unique passwords for all your online accounts. By eliminating the need to come up with passwords yourself, you can significantly enhance the security of your digital presence.",
            color: 'bg-blue-500'
          },
          {
            title: "Fill forms",
            icon: <Keyboard className='mx-auto'></Keyboard>,
            blurb: "Say goodbye to the tedious process of manually filling out online forms. Zeni Pass streamlines your online experience by automatically populating forms with your saved information, such as credentials, names, and payment details. With just a few clicks, you can breeze through registrations, checkouts, and other form-based activities.",
            color: 'bg-green-500'
          },
          {
            title: "Secure",
            icon: <Shield className='mx-auto'></Shield>,
            blurb: "Security is our utmost priority. Zeni Pass employs state-of-the-art encryption algorithms and industry-standard security practices to protect your sensitive data. Rest assured that your passwords and personal information are safeguarded against unauthorized access, ensuring your peace of mind. With our encryption, even we can't see your passwords!",
            color: 'bg-pink-500'
          },
          {
            title: "Safely store a variety of data",
            icon: <FileText className='mx-auto'></FileText>,
            blurb: "Beyond passwords, Zeni Pass offers a secure vault to store various types of data. From credit card details and bank account information to secure notes, you can conveniently store and access your sensitive data whenever you need it.",
            color: 'bg-orange-500'
          },
          {
            title: "Easy to use",
            icon: <User className='mx-auto'></User>,
            blurb: "Designed with simplicity in mind, our Zeni Pass offers a user-friendly interface that makes managing your passwords and personal data a breeze. From effortless navigation to intuitive features, Zeni Pass ensures a seamless user experience, even for those who are not tech-savvy. Enjoy hassle-free password management with just a few clicks.",
            color: 'bg-red-500'
          }

    ];

    return (
        <section className="space-y-10 px-5 py-20 bg-gradient-to-r from-violet-800 via-violet-950 to-indigo-950 z-10">
            {blurbs.map((item,index) => (
                <div key={index} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} className={`${item.color} shadow-md rounded-lg p-6 max-w-4xl mx-auto ${index % 2 === 0 ? "ml-20" : "mr-20"} `}>
                  {item.icon}
                  <h3 className="text-xl font-semibold text-center pb-5 pt-1">{item.title}</h3>
                  <p>{item.blurb}</p>
                </div>
            ))}
        </section>
    );
};

