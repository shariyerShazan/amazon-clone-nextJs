import Image from 'next/image'
import React from 'react'

function ProductCard({ product }: { product: any }) {
  return (
    <div className="max-w-xs bg-white rounded-sm overflow-hidden cursor-pointer border-1 border-gray-100">
      <div className="relative w-full h-60 bg-gray-100">
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
        <h3 className="text-gray-900 font-semibold text-lg truncate">{product.title}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <button className="bg-yellow-400 text-black px-3 py-1 rounded-sm font-semibold hover:bg-yellow-500 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
