import { prisma } from '@/lib/db';
import { PenIcon, Trash2 } from 'lucide-react';
import React from 'react'

type Todo = {
    id: number;
    task: string;
    completed: Boolean;
    created_at: Date;
}

async function And() {
    const todos = await prisma.todo.findMany({
        where:{
            AND:[
                {
                    id: {gte: 3},
                    task: {contains: "a".toLowerCase()} 
                },
                {
                    completed: true
                }
            ]
        }
    });
  return (
    <div className='shadow-[0_0_2px_grey] rounded bg-stone-100 w-full h-fit p-5'>
        <p className='text-center py-5 font-bold text-black text-2xl'>Using Logical Operator: AND</p>
      <div className="border">
        {todos.map((todo)=>(
            <div key={todo.id} className="w-full rounded-xl shadow p-5 flex justify-between items-center gap-4">
                <p className="font-bold text-black">{todo.task}</p>
                <p className="text-stone-400">{todo.created_at.toLocaleString()}</p>
                <div className="flex justify-between items-center gap-4">
                    <PenIcon size={26} className='font-bold text-lg text-stone-400' />
                    <Trash2 size={26} className='font-bold text-lg text-rose-700' />
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default And
