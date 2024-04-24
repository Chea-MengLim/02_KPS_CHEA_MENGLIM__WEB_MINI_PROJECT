'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const SignUpButtonComponent = () => {
    const router = useRouter();
  return (
    <button onClick={()=>router.push("/login")} className="w-[120px] bg-[#306BFF] text-white px-5 py-2 rounded-lg">Sign Up</button>
  )
}

export default SignUpButtonComponent