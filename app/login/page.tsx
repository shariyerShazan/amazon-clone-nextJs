"use client"
import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { supabase } from '@/supabase/supabase'
import { ThemeSupa } from '@supabase/auth-ui-shared'

function page() {
  return (
    <div className='min-h-[70vh] relative w-96 mx-auto'>
            <div>
            <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
            </div>
          
    </div> 
  )
}

export default page
