"use client"
import SearchResult from "@/components/SearchResult"
import { useSupabase } from "@/hooks/useSupabase"
import { useParams } from "next/navigation"
import React, { useEffect } from "react"

function Page() {
  const params = useParams()
  const query = params?.query as string | undefined 
  const { filterProducts, getFilterProducts } = useSupabase()

  useEffect(() => {
    if (query) {
      getFilterProducts({ query })
    }
  }, [])

  return (
    <div className="">
      <div className="h-8 shadow-xl border-gray-200 border-b-2">
          <div className=" w-[98%] mx-auto">
             <p>Over {filterProducts.length} result for <span className="text-orange-700">{`"${query}"`}</span></p>
         </div>
      </div>
      <div className=" w-[98%] mx-auto">
          <SearchResult filterProducts={filterProducts}/>
      </div>
    </div>
  )
}

export default Page
