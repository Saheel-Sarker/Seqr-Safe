import React from 'react'

export default function TermsConditions() {


    const qa = [
        {
            question: '1. Online payments',
            answer: 'The Website and/or App accept online payments for the services offered. By providing your payment information, you authorize us to charge the specified amount for the selected services.'
        },
        {
            question: '2. Refunds and Billing',
            answer: 'We do not provide refunds for the services offered through the Website and/or App. Additionally, if you sign up for a free trial, please note that you will be automatically billed for the selected services unless you cancel before the end of the trial period.'
        },
        {
            question: '3. Modifications to Terms',
            answer: 'We reserve the right to modify these Terms at any time without prior notice. It is your responsibility to review the Terms periodically for any updates or changes. By continuing to use the Website and/or App after any modifications to the Terms, you agree to be bound by the revised Terms.'
        },
        {
            question: '4. Disclaimer of Warranties',
            answer: 'The Website and/or App are provided on an "as-is" and "as available" basis. We make no warranties or representations of any kind, express or implied, regarding the operation, availability, or accuracy of the Website and/or App.'
        },
        {
            question: '5. Limitation of Liability',
            answer: 'To the extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of the Website and/or App.'
        },
        {
            question: '6. Governing Law and Jurisdiction',
            answer: 'These Terms shall be governed by and construed in accordance with the laws of Alberta, Canada. Any legal actions or proceedings arising out of or relating to these Terms shall be exclusively brought in the courts located in Alberta, Canada.'
        },
    ];

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-800 via-violet-950 to-indigo-950  flex justify-center items-center">
    <div className="bg-slate-800 rounded-lg p-8 max-w-7xl w-full">

      <h2 className="text-2xl font-semibold text-white text-center mb-4">Terms and Conditions</h2>
      <h1 className='text-lg font-medium text-white'>These terms of Service govern your use of the Seqr Safe website. By accessing or using the Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not access or use the Website.</h1>
      
      {qa.map((item, index) => (
          <div key={index} className="border-b border-gray-300 py-1">
            <h1 className="text-lg text-white font-bold py-2">{item.question}</h1>
            <h1 className="text-lg text-white py-2">{item.answer}</h1>
        </div>
      ))}
      <h2 className="text-2xl font-semibold text-white text-center mb-4 pt-8">Privacy Policy</h2>
      <h1 className='text-lg font-medium text-white text-center'>Apart from the data you directly give us (such as your email address), we do not collect any of your data or sell it to third parties.</h1>
      </div>
  </section>
  )
}
