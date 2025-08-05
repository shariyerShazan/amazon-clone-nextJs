"use client"
import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { getCart, increaseQuantity, decreaseQuantity, removeFromCart } from '@/redux/cartSlice'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useMemo } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

function ShoppingCart() {
    const router = useRouter()
    const cart = useAppSelector(getCart)
    const dispatch = useAppDispatch()

    // Subtotal Calculation
    const subtotal = useMemo(() => {
        return cart.reduce((acc, product) => acc + (product.price * (product.quantity || 1)), 0)
    }, [cart])


    const handleDetails = (productId: string)=>{
        router.push(`/product/${productId}`)
  }

    return (
        <div className="p-6">
            {cart.length > 0 ? (
                <>
                    {cart.map((product) => (
                        <div key={product?.id } className="flex items-center border-b py-4">
                            {/* Image Section */}
                            <div onClick={()=>handleDetails(product.id)} className="relative w-32 h-32 cursor-pointer">
                                <Image
                                    src={product?.image}
                                    alt={product?.title}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="p-2 mix-blend-multiply"
                                    sizes="(max-width: 640px) 100vw, 250px"
                                />
                            </div>

                            {/* Details Section */}
                            <div className="ml-4 flex-1">
                                <h2 onClick={()=>handleDetails(product.id)} className="text-lg font-semibold hover:text-myColor cursor-pointer">{product?.title}</h2>
                                
                                {/* Price Label */}
                                <p className="text-xs text-gray-400 mt-1 font-bold">Price</p>
                                <p className="text-gray-600 text-lg font-medium">${product?.price}</p>

                                {/* Quantity controls */}
                                <div className="flex items-center space-x-2 mt-2 border-2 border-myColor w-min rounded-3xl px-2 py-1">
                                    <button 
                                        onClick={() => product.quantity > 1 ? dispatch(decreaseQuantity(product.id)) : dispatch(removeFromCart(product.id))} 
                                        className="px-2 py-1 rounded hover:scale-110 cursor-pointer"
                                    >
                                        {product.quantity > 1 ? <FiMinus size={20}/> : <MdDeleteOutline size={20} />}
                                    </button>
                                    <span className="px-3 font-bold text-lg ">{product?.quantity}</span>
                                    <button 
                                        onClick={() => dispatch(increaseQuantity(product.id))} 
                                        className="px-2 py-1 rounded cursor-pointer hover:scale-110"
                                    >
                                        <FaPlus size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Total Section */}
                            <div className="font-bold text-lg">
                                ${(product?.price * (product?.quantity || 1)).toFixed(2)}
                            </div>
                        </div>
                    ))}

                    {/* Subtotal Section */}
                    <div className="flex  justify-end gap-3 items-center mt-6 text-xl font-bold">
                        <span>Subtotal (<span>{cart?.length}</span> items):</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                </>
            ) : (
                <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
            )}
        </div>
    )
}

export default ShoppingCart
