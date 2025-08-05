"use client"
import ShoppingCart from '@/components/ShoppingCart'
import React from 'react'

function page() {
  return (
    <div className='bg-gray-200 min-h-screen'>
       <div className='flex w-[98%] mx-auto'>
           <div className='w-[70%] bg-white m-3'>
                <div className='p-4 border-b-1 border-gray-300'>
                      <p className='text-3xl font-bold'>Shopping cart</p>
                      <div className='flex justify-end'>
                      <p className='font-bold mr-4 text-xl'>Price</p>
                  </div>
                  </div>
                  
                <ShoppingCart />
            </div>
           <div>

           </div>
       </div>
    </div>
  )
}

export default page
