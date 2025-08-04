"use client"
import React, { useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { Input } from './ui/input';
import { Button } from './ui/button';
import { IoMdSearch } from "react-icons/io";
import { GrCart } from "react-icons/gr";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function Header() {
  const [query, setQuery] = useState<string>()
  const router = useRouter()

  const searchHandler = () => {
    if (query?.trim() !== "") {
      router.push(`/search/${query}`)
    }
  }

  return (
    <div className='bg-myColorTwo text-white'>
      <div className='flex justify-between gap-12 items-center w-[98%] mx-auto py-1'>

        {/* Left Section - Logo & Location */}
        <div className='flex gap-6'>
          <Image 
            src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg" 
            alt="Amazon Logo"
            width={120} 
            height={50} 
            className='w-30 h-12 object-contain' 
          />
          <div className='flex items-center'>
            <span><IoLocationOutline size={20} /></span>
            <div className='flex flex-col gap-0'>
              <p className='text-sm'>Deliver to</p>
              <p className='font-bold'>Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Middle Section - Search Bar */}
        <div className='flex flex-1'>
          <form 
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault()
              searchHandler()
            }} 
            className='flex w-full'
          >
            <Input
              value={query}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
              type='text' 
              placeholder='Search amazon'
              className='focus:!outline-none focus:!ring-1 focus:!ring-myColor focus:!border-myColor bg-white w-full rounded-none rounded-l-md text-black placeholder-gray-500'
            />
            <Button 
              type='submit'
              className='bg-myColor rounded-none rounded-r-md hover:bg-myColor/80  text-black font-bold cursor-pointer'
            >
              <IoMdSearch size={20}/>
            </Button>
          </form>
        </div>

        {/* Right Section - Account, Orders & Cart */}
        <div className='flex gap-6'>
          <div className='flex flex-col gap-0'>
            <p className='text-sm'>Hello sign in</p>
            <p className='font-bold'>Account & List</p>
          </div>
          <div className='flex flex-col gap-0'>
            <p className='text-sm'>Return</p>
            <p className='font-bold'>& Order</p>
          </div>
          <div className='relative mr-10'>
            <GrCart size={25} />
            <p className='absolute top-4.5 -right-8'>Cart</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
