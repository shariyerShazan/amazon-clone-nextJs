"use client"
import Image from 'next/image'
import { IoStar } from "react-icons/io5";
import React from 'react'

function SingleProduct({ singleProduct }: { singleProduct: any[] }) {
  if (!singleProduct || singleProduct.length === 0) {
    return <p className="text-center text-lg mt-10">Loading...</p>
  }

  return (
    <div>
      {singleProduct.map((product) => {
        const ratingObj = product?.rating ? JSON.parse(product.rating) : { rate: 0, count: 0 };
        const stars = Math.round(ratingObj.rate);
        const reviewCount = ratingObj.count;

        return (
          <div key={product.id} className="w-[90%] mx-auto my-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Left: Image Section */}
            <div className="bg-gray-100 p-6 rounded-md flex items-center justify-center relative h-[500px] w-full">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-4 mix-blend-multiply"
                    sizes="(max-width: 640px) 100vw, 250px"
                />
                </div>


            {/* Right: Product Details */}
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: stars }).map((_, i) => (
                  <IoStar key={i} />
                ))}
                <span className="ml-2 font-semibold text-blue-500 text-sm">{reviewCount} ratings</span>
              </div>
              <p className="text-3xl text-gray-900 font-semibold">${product.price}</p>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>

              {/* Quantity Selector */}
              <div className="flex items-center gap-3 mt-3">
                <label htmlFor="quantity" className="font-medium">Quantity:</label>
                <select id="quantity" className="border rounded px-2 py-1">
                  {[1, 2, 3, 4, 5 , 6 , 7, 8, 9, 10].map(quantity => <option key={quantity} value={quantity}>{quantity}</option>)}
                </select>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-5">
                <button className="bg-yellow-400 px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition">
                  Add to Cart
                </button>
                <button className="bg-orange-400 px-6 py-2 rounded-md font-semibold hover:bg-orange-500 transition">
                  Buy Now
                </button>
              </div>

              <p className="text-sm text-gray-500 mt-4">In stock and ready to ship.</p>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default SingleProduct
