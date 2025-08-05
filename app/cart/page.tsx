"use client"
import ProccedToBuy from '@/components/ProccedToBuy'
import ShoppingCart from '@/components/ShoppingCart'
import { useAppSelector } from '@/hooks/redux'
import { getCart } from '@/redux/cartSlice'
import React from 'react'

function page() {
      const cart = useAppSelector(getCart)
  return (
    <div className='bg-gray-200 min-h-screen'>
       <div className='flex w-[98%] gap-5 mx-auto'>
           <div className='w-[80%] bg-white m-3'>
                <div className='p-4 border-b-1 border-gray-300'>
                      <p className='text-3xl font-bold'>Shopping cart</p>
                      <div className='flex justify-end'>
                      <p className='font-bold mr-4 text-xl'>Price</p>
                  </div>
                  </div>
                  
                <ShoppingCart />
            </div>
            {(cart.length > 0) && <div className='w-[18%] mx-auto'>
                    <ProccedToBuy />
                </div>
           }
           
       </div>
    </div>
  )
}

export default page
