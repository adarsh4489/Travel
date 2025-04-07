import React from 'react'


const ServiceCard = ({icon:Icon,title,description}) => {
  return (
        <div className="flex flex-col items-center w-[30%] text-center bg-orange-500/30 gap-2 px-8 py-8 h-66 rounded-xl">
        <div className="bg-white border-orange-600 border-2  rounded-full px-4 py-4">
          <Icon  className="text-4xl"/>
        </div>
        <h4 className="font-bold text-lg ">{title}</h4>
        <p className="text-slate-800 text-sm">
         {description}
        </p>
      </div>
  )
}

export default ServiceCard