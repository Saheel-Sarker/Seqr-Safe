import React from 'react'

export default function ForgotPassword() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-800 via-violet-950 to-indigo-950  flex justify-center items-center">
    <div className="bg-slate-800 rounded-lg p-8 max-w-xl w-full">
        <h2 className="text-2xl font-semibold text-white text-center mb-4">Forgot Password</h2>
        <h1 className='  text-gray-400 text-center'>Enter the email for your account</h1>
        <h1 className='  text-gray-400 text-center'>You will be emailed a link to reset your password</h1>
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
        <a href="javascript:;" className="py-2.5 w-[calc(100%-10px)] border border-green-600 shadow-sm rounded-lg transition-all duration-500 text-base text-white font-semibold text-center mx-auto block hover:bg-green-700" style={{ margin: '0 auto', maxWidth: 'calc(100% - 10px)' }}>
            Send Reset Link
        </a>
        <h1 className=' text-red-700 text-center pt-10'>Resetting your password will cause you to lose all the data in your account! Only use this as a last resort</h1>

    
    </div>
  </section>
  )
}
