import Link from 'next/link'
import Completed from './Completed'
import Todos from './Todos'
import { PlusIcon } from 'lucide-react'

async function page({searchParams}:{searchParams:{filter:string}}) {
  const { filter } = await searchParams || "all";
  return (
    <div className='w-6xl bg-neutral-100 mx-auto p-1 flex flex-col gap-8'>
      <div className="w-full rounded p-4 flex justify-center bg-[url(/beach.jpg)] bg-no-repeat bg-cover items-center relative h-32">
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 rounded"></div>
        <p className="text-6xl font-bold z-30 text-white text-center">Todo App</p>
      </div>
      <div className="flex justify-between items-center w-full gap-4 px-4 mt-7">
        <h1 className='text-2xl text-black font-bold'>Tasks</h1>
        <button className='px-4 py-3 rounded bg-green-700 text-white'><Link className='flex justify-between items-center gap-3' href="/create"><PlusIcon size={28} /> Add Task</Link></button>      </div>
      <Todos filter={filter} />
      <Completed />
    </div>
  )
}

export default page
