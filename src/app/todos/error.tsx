"use client";
import Image from 'next/image';
import React from 'react'

function error() {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-stone-100'>
      <div className='h-4/5 bg-linear-180 from-stone-100 to-stone-300 rounded-md w-8/12 flex flex-col items-center gap-4 p-4 border-2'>
      <Image src="/offline.png" alt='offline' height={900} width={900} className='h-60 w-fit' />
      <p className="text-xl text-black">Sorry, You are offline!</p>
      <p className='text-xl text-black'>Check your network connection and try again.</p>
      </div>
    </div>
  )
}

export default error
