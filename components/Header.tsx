import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { Input } from './ui/input';
import { Button } from './ui/button';
import { IoMdSearch } from "react-icons/io";
import { GrCart } from "react-icons/gr";

function Header() {
  return (
    <div className='bg-myColorTwo text-white '>
         <div className='flex justify-between gap-12 items-center w-[90%] mx-auto py-1'>
         <div className='flex  gap-6'>
           <img className='w-30 h-12 ' src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg" alt="" />
           <div className='flex  items-center '>
               <span><IoLocationOutline size={20} /></span>
               <div className='flex flex-col gap-0'>
                   <p className='text-sm '>Deliver to</p>
                   <p className='font-bold'>Bangladesh</p>
               </div>
           </div>
         </div>
         <div className='flex flex-1'>
             <Input
                type='text' 
                placeholder='Serch amazon'
                className='focus:outline-none focus:ring-1 focus:ring-myColor focus:border-myColor bg-white w-full rounded-none rounded-l-md'
              />
              <Button className='bg-myColor/80 rounded-none rounded-r-md hover:bg-myColor text-black font-bold'> <IoMdSearch size={20}/></Button>
         </div>
         <div className='flex  gap-6'>
            <div>
                 <div className='flex flex-col gap-0'>
                        <p className='text-sm '>Hello sign in</p>
                        <p className='font-bold'>Account & List</p>
                  </div>
            </div>
            <div>
                 <div className='flex flex-col gap-0'>
                        <p className='text-sm '>Return</p>
                        <p className='font-bold'>& Order</p>
                  </div>
            </div>
            <div className=' relative'>
                <GrCart size={25} />
                <p className=' absolute top-4.5 -right-8'>Cart</p>
            </div>
         </div>
         </div>
    </div>
  )
}

export default Header
