import React from 'react'
import ProductCard from './ProductCard'

function SearchResult({filterProducts}: {filterProducts: any}) {
  return (
    <div>
         <div>
            <h2 className='text-xl font-bold'>Results</h2>
            <p> Check each product page for other buying options. Price and other details may vary based on product size and color.</p>
         </div>
         <div>
            {
                filterProducts.map((product: any)=>{
                       return <div key={product.id}>
                              <ProductCard product={product} />
                       </div>
                })
            }
         </div>
    </div>
  )
}

export default SearchResult
