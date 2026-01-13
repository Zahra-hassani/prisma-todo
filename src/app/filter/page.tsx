import React from 'react'
import Task from './Task'
import And from './And'

function page() {
  return (
    <div className='bg-stone-100 p-6'>
        <div className="text-white my-2 flex flex-col items-center gap-5 p-4 rounded bg-green-700 w-[40%] mx-auto">
            <p className="font-bold">Conditions:</p>
            <p>if  id gte 2  && task.includes"a".toLowerCase</p>
            <p>or  completed === true</p>
        </div>
      <Task />
      <And />
    </div>
  )
}

export default page
