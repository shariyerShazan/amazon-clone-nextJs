"use client"
import { useSupabase } from '@/hooks/useSupabase'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

function HomePage() {
  const { products , getProducts } = useSupabase();  
  const [oneItemFromCategory, setOneItemFromCategory] = useState<any[]>([]);
  const router = useRouter();
//   console.log(products)

useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (products && products.length > 0) {
      const uniqueProducts: any[] = [];

      products.forEach((product: any) => {
        const exists = uniqueProducts.some(
          (item) => item.category === product.category
        );
        if (!exists) {
          uniqueProducts.push(product);
        }
      });

      setOneItemFromCategory(uniqueProducts);
    }
  }, [products]);

  const handleCategoryClick = (category: string) => {
    router.push(`/category/${category}`);
  };

  return (
    <div>
        <div className=' bg-[url("https://wallpapers.com/images/featured/amazon-npcp6jc782ixp9zs.jpg")] bg-cover bg-center bg-no-repeat h-[60vh] w-full'>
      
      </div>
      <h2 className='text-center text-3xl font-bold text-myColor mt-6'>Categories:</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-6 gap-4 p-6 ">
      {oneItemFromCategory.map((category) => (
        <div 
          key={category.id} 
          onClick={() => handleCategoryClick(category.category)}
          className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform "
        >
          <div className="relative w-full h-40">
            <Image
              src={category?.image}
              alt={category?.title}
              fill
              style={{ objectFit: 'contain' }}
              className="p-4 mix-blend-multiply"
              sizes="(max-width: 640px) 100vw, 250px"
            />
          </div>
          <div className="p-2 text-center">
            <h3 className="text-lg font-semibold">{category?.category}</h3>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default HomePage;
