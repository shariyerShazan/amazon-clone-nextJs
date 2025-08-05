import CategoryProduct from '@/components/CategoryPorduct'
import HomePage from '@/components/HomePage'
import React from 'react'

function page() {
  return (
    <div className='bg-gray-100'>
      <HomePage />
      <div>
      <h2 className='text-center text-3xl font-bold text-myColor mt-6'>Product for Men's:</h2>
        <CategoryProduct category={"men's clothing"} />
      </div>
      <div>
      <h2 className='text-center text-3xl font-bold text-myColor mt-6'>Product for Women's:</h2>
        <CategoryProduct category={"women's clothing"} />
      </div>
      <div>
      <h2 className='text-center text-3xl font-bold text-myColor mt-6'>Jewelry:</h2>
        <CategoryProduct category={"jewelry"} />
      </div>
      
    </div>
  )
}

export default page
