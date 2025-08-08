"use client"
import React from 'react'
import { Button } from './ui/button'
import { MdOutlineMenu } from "react-icons/md";
import { supabase } from '@/supabase/supabase';
import { useRouter } from 'next/navigation';

function Navigation() {
    const router = useRouter()
    const navItem = [
        {name: "Today's Deal" , to: ""},
        {name: "Registry" , to: ""},
        {name: "Prime Video" , to: ""},
        {name: "Gift Cards" , to: ""},
        {name: "Customer Service" , to: ""},
        {name: "Sell" , to: ""},
    ]
  return (
    <div className='bg-[#232F3E] flex  justify-between'>
       <div className='flex w-[98%]  mx-auto py-0.5'>
       <div>
            <Button className='!bg-navColor hover:!bg-navColor !text-white !border !border-transparent hover:!border-white !cursor-pointer'>
                 <MdOutlineMenu size={25} /> All
            </Button>
        </div>
        {
            navItem.map((item: any , index: number)=>{
                return <Button
                    className='bg-navColor hover:!bg-navColor !text-white !border !border-transparent hover:!border-white !cursor-pointer'
                    key={index}
                >
                    {item.name}
                </Button>
            })
        }
       </div>
       <div className='mr-4'>
       <Button onClick={async()=>{
          const {error} =  await  supabase.auth.signOut()
            await router.push("/login")
          location.reload()  
       }} className='bg-navColor hover:!bg-navColor !text-white !border !border-transparent hover:!border-white !cursor-pointer text-md font-bold'>
        Logout
      </Button>
       </div>
    </div>
  )
}

export default Navigation
