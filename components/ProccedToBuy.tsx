import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { getCart } from '@/redux/cartSlice'
import React, { useMemo } from 'react'
import { Button } from './ui/button'

function ProccedToBuy() {
    const cart = useAppSelector(getCart)
    //   const router = useRouter()
        const dispatch = useAppDispatch()
    
        // Subtotal Calculation
        const subtotal = useMemo(() => {
            return cart.reduce((acc, product) => acc + (product.price * (product.quantity || 1)), 0)
        }, [cart])
  return (
    <div className='bg-white rounded p-3 mt-4'>
         <div>
            <p className='my-2 text-center'><span className='text-green-500 font-bold'>Your order is eligible for Free Delivery. </span>Choose Free Delivery option at CheckOut</p>
            <div className="flex  justify-end gap-3 items-center mt-3  text-xl font-bold my-2">
                <span>Subtotal (<span>{cart?.length}</span> items):</span>
                <span>${subtotal.toFixed(2)}</span>
         </div>
            <Button className='px-4 !bg-myColor hover:!bg-myColor/80 cursor-pointer rounded-3xl my-2 w-full font-bold'>
              Procced to Checkout
            </Button>
         </div>
    </div>
  )
}

export default ProccedToBuy
