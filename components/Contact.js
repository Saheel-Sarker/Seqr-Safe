import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
<section className="py-16 bg-gradient-to-r from-violet-800 via-violet-950 to-indigo-950  flex justify-center items-center">
      <div className="bg-slate-800 shadow-lg rounded-lg p-8 max-w-lg w-full">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-white text-center mb-4">Get in Touch</h2>
        
        {/* Subheading */}
        <p className="text-sm text-white text-center mb-6">
          Fill this form to contact us, we'll get back to you as soon as we can.
        </p>
        
        {/* Form */}
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="block w-full px-4 py-2 border border-gray-100 rounded-md text-white bg-slate-900"
              required
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              rows="4"
              className="block w-full px-4 py-2 border border-gray-100 rounded-md text-white bg-slate-900"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
          <div className="py-2.5 w-[calc(100%-10px)] border border-green-600 shadow-sm rounded-lg transition-all duration-500 text-base text-white font-semibold text-center mx-auto block hover:bg-green-700" style={{ margin: '0 auto', maxWidth: 'calc(100% - 10px)' }}>
            <Link href='/'>
                Send message
            </Link>
        </div>
        </div>
        </form>
        </div>
    </section>
  )
}
