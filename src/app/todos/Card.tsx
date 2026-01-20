"use client";

import { format } from "date-fns-jalali";
import { PenIcon, Trash2 } from "lucide-react";

type Todo = {
    id: number;
    task: string;
    completed: boolean;
    created_at: Date;
}

function Card({todo,toggle}:{todo:Todo, toggle:(id: number, completed: boolean)=> Promise<void>}) {
  return (
    <div onClick={() => toggle(todo.id,todo.completed)} className="w-full rounded-xl cursor-pointer shadow p-5 flex justify-between items-center gap-4">
                <p className={`font-bold text-black ${todo.completed?"line-through":""}`}>{todo.task}</p>
                <p className="text-stone-400">{format(todo.created_at,"yyyy/MM/dd, hh:mm:ss eeee")}</p>
                <div className="flex justify-between items-center gap-4">
                    <PenIcon size={26} className='font-bold text-lg text-stone-400' />
                    <Trash2 size={26} className='font-bold text-lg text-rose-700' />
                </div>
    </div>
  )
}

export default Card
