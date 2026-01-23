"use client";

import { useRouter, useSearchParams } from "next/navigation";

function FilterDate({filter}:{filter:string}) {
    const router = useRouter();
    const params = useSearchParams();
    function handleFilter(e: string){
        let value = e;
        let newParams = new URLSearchParams(params.toString());
        if(value === "all"){
            newParams.delete("filter");
        }
        else{
            newParams.set('filter',value);
        }
        router.push(`todos/?${newParams}`);
    }
  return (
    <select value={filter} className="text-black border" onChange={(e)=> handleFilter(e.target.value)} >
      <option value="all">ALL</option>
      <option value="today">Today</option>
      <option value="week">This week</option>
      <option value="month">This Month</option>
    </select >
  )
}

export default FilterDate
