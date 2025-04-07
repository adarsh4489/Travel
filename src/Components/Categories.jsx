import React from 'react'
import CategoriesCard from './CategoriesCard'
import {categoryData} from "../Utils/constants";

const Categories = () => {
    
  return (
    <div className='w-[70%] mx-auto  my-2'>
        <h3 className='my-8 text-xl font-bold text-center'>Travel Categories</h3>
        <div className='flex gap-4 flex-wrap justify-center ' >
{categoryData.map((data)=>{
    return (
        <CategoriesCard key={data.id} data={data}/> 
    )
})}
        </div>
    </div>
  )
}

export default Categories