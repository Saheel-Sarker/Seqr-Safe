import React from 'react'

export default function Contact() {
  return (
<section className="py-16 bg-gray-50 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Get in Touch</h2>
        
        {/* Subheading */}
        <p className="text-sm text-gray-600 text-center mb-6">
          Fill this form to contact us, we'll get back to you as soon as we can.
        </p>
        
        {/* Form */}
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              rows="4"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
          <a href="javascript:;" className="py-2.5 w-[calc(100%-10px)] border border-green-600 shadow-sm rounded-lg transition-all duration-500 text-base text-white font-semibold text-center mx-auto block hover:bg-green-700" style={{ margin: '0 auto', maxWidth: 'calc(100% - 10px)' }}>
            Purchase Plan
        </a>
        </div>
        </form>
        </div>
    </section>
  )
}
