"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
function ProtectedLayout({children, authentication = true}:any) {
    const authStatus = useSelector((state:any) => state.auth.status)
    const router = useRouter()
    const [loader,setLoader] = useState(true)
    useEffect(() => {
        if(authentication && authStatus !== authentication){
            router.push("/login")
        }
        else if(!authentication && authStatus !== authentication){
            router.push('/')
        }
        setLoader(false)
    }, [authStatus,router,authentication])
  return loader? <div>Loading</div>:(
    <>
    {children}
    </>
  )
}

export default ProtectedLayout
