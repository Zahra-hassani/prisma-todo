import { prisma } from "@/lib/db";
import { format } from "date-fns-jalali";
import { PenIcon, Trash2 } from "lucide-react";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import DeleteBtn from "./DeleteBtn";

export default async function Home() {
  const todos = await prisma.todo.findMany(
    // {
    //   where: filterDate?{
    //     created_at : {gte : filterDate}
    //   }: undefined
    //  }
    );
  const filteredTodo =todos.sort((a,b)=> Number(a.completed)-Number(b.completed))
  //  Deleting 
    async function deleteTask(id:number){
      "use server";
      await prisma.todo.delete({
        where: {id: id}
      })
      revalidatePath('/todos');
    }
  return (
    <div className='shadow-[0_0_2px_grey] rounded bg-stone-100 w-full h-screen flex flex-col justify-center p-5'>
      <h1 className="text-3xl font-bold text-center py-4 text-stone-800">All Tasks</h1>
    <div className="border border-stone-400 h-90 overflow-y-scroll bg-stone-100">
      {filteredTodo.map((todo)=>(
        <div key={todo.id} className="w-full rounded-xl cursor-pointer shadow p-5 flex justify-between items-center gap-4">
                <p className={`font-bold text-black ${todo.completed?"line-through":""}`}>{todo.id}. {todo.task}</p>
                <p className="text-stone-400">{format(todo.created_at,"yyyy/MM/dd, hh:mm:ss eeee")}</p>
                <div className="flex justify-between items-center gap-4">
                    <PenIcon size={26} className='font-bold text-lg text-stone-400' />
                    <DeleteBtn deleteBtn={deleteTask} id={todo.id} />
                </div>
    </div>
      ))}
    </div>
    </div>
  );
}
