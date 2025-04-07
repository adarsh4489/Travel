import React from 'react'

const CategoriesCard = ({data}) => {
  return (
    <div className='flex flex-col w-[15rem] rounded-xl h-[15rem]  bg-[#DFD9CE] text-orange-600  hover:text-black hover:bg-orange-300 items-center justify-center '>
        {/* <img src={data.icon} alt="" /> */}
        
        <div className='flex items-center justify-center w-24 rounded-full h-24 bg-white '>

        <data.icon className="text-6xl z-10"/>
        </div>
        <h3 className='text-lg font-semibold text-black z-10 mt-4'>{data.title}</h3>
    </div>
  )
}

export default CategoriesCard