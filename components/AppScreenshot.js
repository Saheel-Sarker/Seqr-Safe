import React from 'react'

export default function AppScreenshot() {

  return (
    <section className="space-y-10 px-5 py-20 bg-gradient-to-r from-violet-800 via-violet-950 to-indigo-950 z-10">
      <img
        data-aos="flip-up"
        src="/preview.png"
        alt="Application Screenshot"
        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto rounded-lg shadow-lg"
      />
    </section>
  )
}
