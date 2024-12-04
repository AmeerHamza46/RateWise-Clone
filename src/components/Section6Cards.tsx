import React from 'react'

interface Section6CardsProps{
    logo: string,
    warranty:string,
    percentage:string
}

function Section6Cards({logo, warranty, percentage}: Section6CardsProps) {
  return (
    <div className='flex flex-col justify-center items-center border border-lime-400 px-28 py-14 rounded-xl'>
        <h1 className=' p-5 rounded-full mb-4 shadow-sm shadow-gray-800' >{logo}</h1>
        <h1 className='mb-6 text-xl'>{warranty}</h1>
        <h1 className='font-bold text-3xl'>{percentage}</h1>
    </div>
  )
}

export default Section6Cards
