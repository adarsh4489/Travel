import React from 'react'
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from 'react-router';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className='w-full flex px-[5%] rounded-md items-center justify-between py-2 '>
        <h2 className='text-3xl font-bold cursor-pointer text-orange-600' onClick={()=>navigate("/")}>Bhraman</h2>
        <ul className='lg:flex gap-6 hidden'>
           <Link to="/">
            <li className=' cursor-pointer font-semibold hover:underline hover:text-orange-600 '>Home</li>
           </Link>
           <Link to="/about">
            <li className=' cursor-pointer font-semibold hover:underline hover:text-orange-600 '>About</li>
           </Link>
           <Link to="/deals"> <li className=' cursor-pointer font-semibold hover:underline hover:text-orange-600 '>Our Offers</li></Link>
           <Link to="/booking">
            <li className=' cursor-pointer font-semibold hover:underline hover:text-orange-600 '>Booking</li>
           </Link>
           <Link to="/faq">
            <li className=' cursor-pointer font-semibold hover:underline hover:text-orange-600 '>FAQ</li>
           </Link>
        </ul>

        {/* <div className='border-slate-400 rounded-2xl border  items-center px-2 hidden lg:flex'>
            <input type="text" placeholder='search' className='text-orange-600 px-1 py-1 outline-none' />
<IoSearch className='text-orange-600 cursor-pointer'/>
        </div> */}
        <div className='lg:hidden text-2xl'><IoMenu/></div>

    </div>
  )
}

export default Navbar