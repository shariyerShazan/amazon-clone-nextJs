"use client"
import React, { useEffect, useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { Input } from './ui/input';
import { Button } from './ui/button';
import { IoMdSearch } from "react-icons/io";
import { GrCart } from "react-icons/gr";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAppSelector } from '@/hooks/redux';
import { getCart } from '@/redux/cartSlice';
import Link from 'next/link';
import { supabase } from '@/supabase/supabase';

function Header() {
  const cart = useAppSelector(getCart)
  const [query, setQuery] = useState<string>()
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [isMounted, setIsMounted] = useState(false)

  // Check hydration status
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Get user data from Supabase
  useEffect(() => {
    const getUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUserData()
  }, [])

  // Handle search submit
  const searchHandler = () => {
    if (query?.trim() !== "") {
      router.push(`/search/${query}`)
    }
  }

  return (
    <div className='bg-myColorTwo text-white'>
      <div className='flex justify-between gap-12 items-center w-[98%] mx-auto py-1'>

        {/* Left Section - Logo & Location */}
        <div className='flex gap-6 '>
          <Link className='border hover:border-white cursor-pointer border-transparent' href={"/"}>
            <Image
              src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"
              alt="Amazon Logo"
              width={120}
              height={50}
              className='w-30 h-14 object-contain'
            />
          </Link>
          <div className='flex items-center p-1 border hover:border-white cursor-pointer border-transparent'>
            <span><IoLocationOutline size={20} /></span>
            <div className='flex flex-col gap-0 '>
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
              <IoMdSearch size={20} />
            </Button>
          </form>
        </div>

        {/* Right Section - Account, Orders & Cart */}
        <div className='flex gap-6 '>
          <div onClick={() => { router.push("/login") }} className='flex flex-col gap-0 p-1 border hover:border-white cursor-pointer border-transparent'>
            <p className='text-sm'>
              Hello, {!isMounted ? "..." : user ? `${user?.identities?.[0]?.identity_data?.full_name}` : "login"}
            </p>
            <p className='font-bold'>Account & List</p>
          </div>
          <div className='flex flex-col gap-0 p-1 border hover:border-white cursor-pointer border-transparent'>
            <p className='text-sm'>Return</p>
            <p className='font-bold'>& Order</p>
          </div>
          <div onClick={() => router.push("/cart")} className='relative pr-8 pl-6 mr-10 border hover:border-white cursor-pointer border-transparent'>
            <GrCart className=' absolute right-7 top-1' size={25} />
            <p className='absolute text-myColor font-extrabold top-1 right-2'>{cart?.length || 0}</p>
            <p className='absolute top-7 right-1'>Cart</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
