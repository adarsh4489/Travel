import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center rounded-2xl mx-auto gap-4 py-12 mt-12 w-full px-6 text-white bg-[#142316]'>
         <h3 className='text-2xl font-bold'>Subscribe To Our Newsletter</h3>
         <p className='text-xl font-semibold'>Know About Our New Offers First!</p>

         <div className='flex w-full justify-center'>
            <input type="text" className='text-green-950 font-medium w-1/3 px-4 py-2 rounded-l-3xl placeholder:text-green-950 outline-none bg-white' placeholder='@gmail.com' />
            <button className='bg-orange-500 cursor-pointer hover:bg-orange-600 font-semibold text-lg px-4 py-2 rounded-r-3xl'>Subscribe</button>
         </div>
    </div>
  )
}

export default Footer