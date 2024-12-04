'use client'
import React from 'react'

function SimpleButton({title}:{title:string}) {
  return (
    <button
    className='bg-lime-500 border-2  border-lime-500 px-8 py-2 rounded-full font-bold text-gray-50 
      transition duration-700
     hover:bg-white hover:text-lime-500  ' 
    >
        {title}
    </button>
  )
}

export default SimpleButton
