import React from 'react'

export default function CenterAuthItems({children}) {
  return (
    <section className='bg-gradient-to-r py-32 from-violet-800 via-violet-950 to-indigo-950'>
        <div className='flex justify-center items-center'>
            {children}
        </div>
    </section>
  )
}
