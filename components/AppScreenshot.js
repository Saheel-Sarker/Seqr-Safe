import React from 'react'
import Aos from 'aos'

export default function AppScreenshot() {
  return (
 
    <section className="space-y-10 px-5 py-20 bg-gradient-to-r from-violet-800 via-violet-950 to-indigo-950 ">
        <img data-aos="flip-up" src="/preview.png" alt="Application Screenshot" className="items-center h-[600px] mx-auto" />
    </section>
  )
}
