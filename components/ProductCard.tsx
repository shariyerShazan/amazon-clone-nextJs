"use client"
import { useAppDispatch } from '@/hooks/redux';
import { addCart } from '@/redux/cartSlice';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoStar } from "react-icons/io5";

function ProductCard({ product }: { product: any }) {

  const dispatch = useAppDispatch()

    const router = useRouter()
  const ratingObj = product?.rating ? JSON.parse(product.rating) : { rate: 0, count: 0 };
  const stars = Math.round(ratingObj.rate); 
  const reviewCount = ratingObj.count;

   const handleDetails = (productId: string)=>{
         router.push(`/product/${productId}`)
   }

  return (
    <div  className="max-w-xs bg-white rounded-sm overflow-hidden  border border-gray-100 ">
      <div onClick={()=>handleDetails(product.id)} className="relative w-full h-60 bg-gray-100 cursor-pointer">
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: 'contain' }}
          className="p-4 mix-blend-multiply"
          sizes="(max-width: 640px) 100vw, 250px"
        />
      </div>

      <div className="px-4 py-3">
        <h3 onClick={()=>handleDetails(product.id)} className="text-gray-900 font-semibold text-lg truncate cursor-pointer hover:text-myColor">{product.title}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>

        <div className="flex items-center gap-1 mt-2 text-myColor">
          {Array.from({ length: stars }).map((_, key) => (
            <IoStar key={key} />
          ))}
          <span className="ml-2 text-blue-500 font-semibold text-sm">({reviewCount})</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <button  onClick={()=> dispatch(addCart(product))} className="bg-yellow-400 text-black px-3 py-1 rounded-sm font-semibold hover:bg-yellow-500 transition cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
