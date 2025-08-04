import { useState } from "react"
import { supabase } from "../supabase"


interface Product {
  id: number
  title: string
  description?: string
  category?: string
  price?: number
}

export const useSupabase = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [filterProducts, setFilterProducts] = useState<Product[]>([])

  const getProducts = async () => {
    const { data, error } = await supabase.from("products").select("*")
    if (data) {
      setProducts(data)
      console.log(data)
    }
    if (error) {
      console.log(error)
    }
  }

  const getFilterProducts = async ({ query = "" }: { query?: string }) => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .or(
        `title.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`
      )
    if (data) {
      setFilterProducts(data)
      console.log(data)
    }
    if (error) {
      console.log(error)
    }
  }

  return {
    products,
    filterProducts,
    getProducts,
    getFilterProducts,
  }
}
