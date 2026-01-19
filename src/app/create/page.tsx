import { prisma } from '@/lib/db';
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {
    async function createTodo(formdata : FormData){
        "use server";
        const newTask = formdata.get("task") as string;
        await prisma.todo.create({
            data: {
                task: newTask,
                completed: false,
                created_at: new Date()
            },
        });
        redirect("/todos");
    }
  return (
    <div className='h-screen w-full bg-white/70 backdrop-blur-md flex justify-center items-center'>
      <form action={createTodo} className='p-4 w-8/12 bg-white flex flex-col gap-2.5 rounded shadow'>
        <h1 className='text-3xl text-black font-bold text-center'>Add Task</h1>
        <input type="text" name='task' placeholder='What is in your mind?' className='border placeholder:text-stone-300 text-black border-stone-500 rounded px-3 py-1 focus:outline-0'/>
        <button type='submit' className='px-6 py-1.5 rounded bg-green-700 text-white w-fit mx-auto'>Save</button>
      </form>
    </div>
  )
}

export default page
