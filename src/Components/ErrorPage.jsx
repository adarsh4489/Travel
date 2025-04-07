import React from 'react'

const ErrorPage = () => {
  return (
    <div className='w-full flex flex-col gap-8 h-screen items-center justify-center'>
        <h4 className='text-9xl font-bold'>Oops!</h4>
        <h4 className='text-6xl font-semibold my-4'>404-Page Not Found </h4>
        <p className='w-1/3 text-center'>The Page you are looking for might have been removed, had its name changed or is temporary unavailable</p>
        <button className='bg-orange-500 font-semibold text-white text-lg hover:bg-orange-600 px-8 py-4 rounded-full'>Go To HomePage</button>
    </div>
  )
}

export default ErrorPage