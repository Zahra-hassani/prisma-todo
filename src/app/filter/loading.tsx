import React from 'react'

function loading() {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-white'>
      <div className='h-32 w-32 rounded-full border-4 border-green-700 border-b-white animate-spin'></div>
    </div>
  )
}

export default loading
