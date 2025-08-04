"use client"
import React from 'react'
import { Button } from './ui/button'
import { MdOutlineMenu } from "react-icons/md";

function Navigation() {
    const navItem = [
        {name: "Today's Deal" , to: ""},
        {name: "Registry" , to: ""},
        {name: "Prime Video" , to: ""},
        {name: "Gift Cards" , to: ""},
        {name: "Customer Service" , to: ""},
        {name: "Sell" , to: ""},
    ]
  return (
    <div className='bg-[#232F3E] '>
       <div className='flex w-[90%]  mx-auto py-0.5'>
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
    </div>
  )
}

export default Navigation
