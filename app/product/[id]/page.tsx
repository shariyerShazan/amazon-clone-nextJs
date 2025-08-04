"use client"
import { useSupabase } from '@/supabase/hooks/useSupabase'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import SingleProduct from '@/components/SingleProduct'

function Page() {
    const params = useParams()
    const id = params?.id as string
    const { singleProduct, getSingleProduct } = useSupabase()

    useEffect(() => {
        if (id) { 
            getSingleProduct(id)
        }
    }, [])  

    return (
        <div>
            {singleProduct ? (
                <SingleProduct singleProduct={singleProduct} />  
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Page
