import React from 'react'

export default function Sidebar() {

  const tabs = [
    {id : 'passwords',
     label : 'Passwords'
    },
    {id : 'notes',
     label : 'Notes'
    },

  ]

  return (
    <section className='px-10 bg-black text-white  max-w-xs max-h-full min-h-screen flex flex-col items-start'>
        <div className="flex items-center pt-10">
            <img src="/GuyPasscode.svg" alt="hacker illustration" className="h-14 align-top mr-3" />
            <h1 className="text-5xl font-serif">keepr</h1>
        </div>
        <h1 className='py-2'>Menu</h1>
        <ul className='min-w-40'>
          {tabs.map((tab) => (
            <div className='pt-4' key={tab.id}>
              <li className={`cursor-pointer p-2 rounded`}>
                {tab.label}
              </li>
            </div>
          ))}
        </ul>
        <div className='mt-auto pb-24'>
          <div>
            settings
          </div>
          <div>
            logins
          </div>
        </div>

    </section>
  )
}
