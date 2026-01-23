"use client";
import { Trash2 } from 'lucide-react'
import React from 'react'

function DeleteBtn({deleteBtn,id}:{deleteBtn:(id:number)=>void,id:number}) {
  return (
    <button title='Delete task' onClick={()=> deleteBtn(id)}>
        <Trash2 size={26} className='font-bold text-lg cursor-pointer text-rose-700' />
    </button>
  )
}

export default DeleteBtn
