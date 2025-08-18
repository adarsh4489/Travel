import React from 'react'
import CategoriesCard from './CategoriesCard'
import {categoryData} from "../Utils/constants";

const Categories = () => {
    
  return (
    <div className='w-[70%] mx-auto py-12'>
        <h3 className='text-3xl font-bold text-gray-800 mb-8 text-center'>Travel Categories</h3>
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