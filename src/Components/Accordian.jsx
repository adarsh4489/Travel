import React from 'react'
import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";


const Accordian = ({data}) => {
    const [accrdVisible, setAccrdVisible] = useState(false);
  const accrdHandler = () => {
    setAccrdVisible(!accrdVisible);
  };
  const {question,answer}=data;
    return (
    
    <div className="my-4" key={data.id}>
                <div
          className="w-full rounded-2xl hover:text-orange-600 cursor-pointer flex justify-between items-center py-4 px-8 bg-[#DFD9CE]"
          onClick={() => accrdHandler()}
        >
          <p className='font-semibold'>{question}</p>
          <FaAngleDown />
        </div>
       {accrdVisible? (<p className="px-8 py-2  text-justify">
          {answer}
        </p>):null}
      </div>
  )
}

export default Accordian