import { prisma } from '@/lib/db'
import { startOfDay, startOfMonth, startOfWeek } from 'date-fns-jalali';
import { revalidatePath } from 'next/cache';
import React from 'react'
import Card from './Card';
import FilterDate from './FilterDate';

type Todo = {
    id: number;
    task: string;
    completed: boolean;
    created_at: Date;
}

async function Todos({filter}:{filter:string}) {
     const now = Date.now();
     let filterDate : Date | undefined ;
     
    //  if(filter === "today"){
    //   filterDate = startOfDay(now);
    //  } else if(filter === "week"){
    //   filterDate = startOfWeek(now);
    //  }
    //  else{
    //   filterDate = startOfMonth(now);
    //  }

     const  todos:Todo[] = await prisma.todo.findMany(
      {
      where: filterDate?{
        created_at : {gte : filterDate}
      }: undefined
     }
    );
     const filteredTodo = todos.sort((a,b)=> Number(a.completed)-Number(b.completed));

     async function toggleTodo(id: number, completed: boolean){
      "use server";
      await prisma.todo.update({
        where:{ id: id},
        data: {completed: !completed}
      });
      revalidatePath('/todos');
     }
    
  return (
    <div className='shadow-[0_0_2px_grey] rounded bg-stone-100 w-full h-fit p-5'>
      {/* <FilterDate filter= {filter} /> */}
      <div className="border h-90 overflow-y-scroll">
        {filteredTodo.map((todo)=>(
            <Card key={todo.id} todo={todo} toggle={toggleTodo} />
        ))} 
      </div>
    </div>
  )
}

export default Todos
