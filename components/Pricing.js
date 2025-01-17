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
    <section id="pricing" className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h2 className="font-manrope text-5xl text-center font-bold text-gray-500 mb-4">Choose your plan </h2>
                <p className="text-gray-500 text-center leading-6 mb-9">7 Days free trial. No credit card required.</p>
                <div className="flex justify-center items-center">
                    <label className="min-w-[3.5rem] text-xl relative text-amber-600 mr-4 font-medium">Bill Monthly</label>
                    <input type="checkbox" id="basic-with-description"
                        className="relative shrink-0 w-11 h-6 p-0.5 bg-indigo-100 checked:bg-none checked:bg-indigo-100 rounded-full cursor-pointer transition-colors ease-in-out duration-200  focus:border-blue-600  appearance-none before:inline-block before:w-5 before:h-5 before:bg-amber-600 checked:before:bg-red-900 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform  before:transition before:ease-in-out before:duration-200 ">
                    </input>
                    <label className="relative min-w-[3.5rem] font-medium text-xl text-red-900 ml-4 ">
                        Bill Yearly
                    </label>
                </div>
            </div>
            <div className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-slate-800 transition-all duration-500">
                <div className="uppercase bg-gradient-to-r from-orange-600 to-violet-600 rounded-t-2xl p-3 text-center text-white">
                                MOST POPULAR
                </div>   
                <div className="flex flex-col mx-auto max-w-sm text-white rounded-2xl  p-6 xl:py-9 xl:px-12 transition-all duration-500 ">
                        <h3 className="font-manrope text-2xl font-bold mb-3">Free</h3>
                        <div className="flex items-center mb-6">
                            <span className="font-manrope mr-2 text-6xl font-semibold">$0</span>
                            <span className="text-xl text-gray-400 ">/ month</span>
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
                          className="py-2.5 w-[calc(100%-10px)] border border-violet-600 shadow-sm rounded-lg transition-all duration-500 text-base text-white font-semibold text-center mx-auto block hover:bg-violet-700"
                          style={{ margin: '0 auto', maxWidth: 'calc(100% - 10px)' }}
                        >
                          Purchase Plan
                        </a>

                    </div> 
            </div>
        </div>
    </section>
  )
}
