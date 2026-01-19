import { prisma } from '@/lib/db'
import { format } from 'date-fns-jalali';
import { PenIcon, Trash2 } from 'lucide-react';
import React from 'react'

type Todo = {
    id: number;
    task: string;
    completed: boolean;
    created_at: Date;
}

async function Todos() {
     const  todos:Todo[] = await prisma.todo.findMany();
  return (
    <div className='shadow-[0_0_2px_grey] rounded bg-stone-100 w-full h-fit p-5'>
      <div className="border h-90 overflow-y-scroll">
        {todos.map((todo)=>(
            <div key={todo.id} className="w-full rounded-xl shadow p-5 flex justify-between items-center gap-4">
                <p className="font-bold text-black">{todo.task}</p>
                <p className="text-stone-400">{format(todo.created_at,"yyyy/MM/dd, hh:mm:ss eeee")}</p>
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

export default Todos
