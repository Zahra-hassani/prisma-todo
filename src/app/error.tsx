"use client";
import Image from 'next/image';
import React from 'react'

function error() {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-white'>
       <div className='flex flex-col items-center gap-5 p-4 font-bold'>
        <Image src="/error.gif" className='h-50 w-50' alt='Internet connection' height={1000} width={1000} />
        <h1 className='text-3xl text-center text-wrap text-rose-600 animate-pulse'>Seems you're offline, check your network connection and try again.</h1>
       </div>
    </div>
  )
}

export default error
