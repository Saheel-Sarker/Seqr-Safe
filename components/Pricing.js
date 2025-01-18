'use client'
import React, { useState } from 'react'

export default function Pricing() {
    const blurbs = [
        {
            title: "Save unlimited passwords",
          },
          {
            title: "Access on any device",
          },
          {
            title: "Secure password generation",
          },
          {
            title: "7 day free trial",
          },
          {
            title: "Password AutoFill",
          }, 
    ];
    const [billMonthly, setBillMonthly] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-gradient-to-r from-violet-800 via-violet-950 to-indigo-950 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="mb-12">
                <h2 className="font-manrope text-5xl text-center font-bold text-white mb-4">Pricing </h2>
                <p className="text-gray-400 text-center leading-6 mb-9">Choose a plan that's right for you.</p>
                <div className="flex justify-center items-center mt-8">
                    <div className="flex border-blue-950 bg-blue-950 border-8 rounded-lg overflow-hidden">
    
                        <div
                            className={`rounded-lg w-32 py-2 text-center cursor-pointer transition-colors duration-300 ${billMonthly === true ? 'bg-white text-blue-950' : 'bg-blue-950 text-white'}`}
                            onClick={() => setBillMonthly(true)}
                        >
                            Monthly
                        </div>

                        <div
                            className={`rounded-lg w-32 py-2 text-center cursor-pointer transition-colors duration-300 ${billMonthly === false ? 'bg-white text-blue-950' : 'bg-blue-950 text-white'}`}
                            onClick={() => setBillMonthly(false)}
                        >
                            Anually
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mx-auto max-w-sm text-gray-900 border-2 border-violet-700 rounded-2xl bg-slate-800 transition-all duration-500">
                <div className="flex flex-col mx-auto max-w-md text-white rounded-2xl  p-6 xl:py-9 xl:px-10 transition-all duration-500 min-w-96">
                      
                        {billMonthly ? <h3 className="font-manrope text-2xl font-bold mb-3">Monthly Subscription</h3> : <h3 className="font-manrope text-2xl font-bold mb-3">Annual Subscription</h3>}
                        <div className="flex items-center mb-6">
                            {billMonthly ? <span className="font-manrope mr-2 text-6xl font-semibold">$3.00</span> : <span className="font-manrope mr-2 text-6xl font-semibold">$2.50</span>}
                            {billMonthly ? <span className="text-xl text-gray-400 ">/ month</span> : 
                            <div>
                              <span className="text-lg text-gray-400 ">/ month</span>
                              <p className="text-lg text-gray-400 ">(Billed annually)</p>
                            </div>
                           }

                        </div>
                        <ul className="mb-12 space-y-6 text-left text-lg text-gray-400">
                        {blurbs.map((item, index) => (
                          <li key={index} className="flex items-center space-x-4">
                               
                            <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span >{item.title}</span>
                        </li>
                        ))}
                        </ul>

                        <a 
                          href="/signup" 
                          className="py-2.5 w-[calc(100%-10px)] border bg-gradient-to-r from-orange-600 to-violet-600 border-violet-700 shadow-sm rounded-lg transition-all duration-500 text-base text-white font-semibold text-center mx-auto block hover:bg-green-700 hover:border-green-700 hover:bg-none"
                          style={{ margin: '0 auto', maxWidth: 'calc(100% - 10px)' }}
                        >
                          Purchase Plan!
                        </a>

                    </div> 
            </div>
        </div>
    </section>
  )
}
