'use client'

import React from 'react'
import Aos from 'aos';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import "aos/dist/aos.css";

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
            blurb: "Keep-Safe is your personal data protection solution.",
            color: 'bg-blue-500'
          },
          {
            title: "Anytime Access",
            blurb: "Access your data anytime, anywhere.",
            color: 'bg-green-500'
          },
          {
            title: "Prioritizing Security",
            blurb: "We prioritize security and ease of use.",
            color: 'bg-yellow-500'
          },
          {
            title: "Encrypted Data",
            blurb: "Your data is encrypted for maximum safety.",
            color: 'bg-purple-500'
          },
          {
            title: "Seamless Management",
            blurb: "Experience seamless data management.",
            color: 'bg-pink-500'
          },
          {
            title: "On-the-Go Protection",
            blurb: "Keep-Safe keeps your data safe while you're on the go.",
            color: 'bg-orange-500'
          },
          {
            title: "Trusted by Thousands",
            blurb: "Join the thousands of users trusting Keep-Safe.",
            color: 'bg-red-500'
          }

    ];

    return (
        <section className="space-y-10 px-5 py-20 bg-gradient-to-r from-violet-800 via-violet-950 to-indigo-950 ">
            {blurbs.map((item,index) => (
                <div key={index}  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} className={`${item.color} shadow-md rounded-lg p-6 max-w-xl mx-auto`}>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p>{item.blurb}</p>
                </div>
            ))}
        </section>
    );
};

