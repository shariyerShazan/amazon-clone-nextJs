"use client"
import { useAppDispatch } from '@/hooks/redux'
import { useSupabase } from '@/hooks/useSupabase'
import { addCart } from '@/redux/cartSlice'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IoStar } from 'react-icons/io5'

function CategoryPage() {  
  const router = useRouter()
  const { category } = useParams()
  const { getCategoryProducts, categoryProduct } = useSupabase() 
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (category) {
      const decodedCategory = decodeURIComponent(category as string)
      getCategoryProducts(decodedCategory).finally(() => setLoading(false))
    }
  }, [category])

  const handleDetails = (productId: string) => {
    router.push(`/product/${productId}`)
  }

  if (loading) {
    return <p className="p-6 text-center text-gray-500">Loading products...</p>
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {categoryProduct?.length === 0 ? ( // <-- এখানেও পরিবর্তন
        <p className="col-span-full text-center text-gray-500">No products found for this category</p>
      ) : (
        categoryProduct.map((product: any) => {
          const ratingObj = product?.rating ? JSON.parse(product.rating) : { rate: 0, count: 0 }
          const stars = Math.round(ratingObj.rate)
          const reviewCount = ratingObj.count

          return (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <div onClick={() => handleDetails(product.id)} className="relative w-full h-60 bg-gray-100 cursor-pointer rounded-md">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-4 mix-blend-multiply"
                  sizes="(max-width: 640px) 100vw, 250px"
                />
              </div>

              <div className="px-2 py-3">
                <h3 
                  onClick={() => handleDetails(product.id)} 
                  className="text-gray-900 font-semibold text-lg truncate cursor-pointer hover:text-blue-500"
                >
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>

                <div className="flex items-center gap-1 mt-2 text-yellow-500">
                  {Array.from({ length: stars }).map((_, key) => (
                    <IoStar key={key} />
                  ))}
                  <span className="ml-2 text-blue-500 font-semibold text-sm">({reviewCount})</span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">${product.price}</span>
                  <button  
                    onClick={() => dispatch(addCart(product))} 
                    className="bg-yellow-400 text-black px-3 py-1 rounded-sm font-semibold hover:bg-yellow-500 transition cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}

export default CategoryPage
