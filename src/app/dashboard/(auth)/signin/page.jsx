"use client"
import React, { useState , useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {signIn, useSession} from "next-auth/react"
import Link from 'next/link'
import axios from 'axios'
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';

const Login = () => {
  const notyf = new Notyf({position:{y:"top"}})

  const [err , setErr] = useState(false)
  const [Load , setLoad] = useState(false)
  const [Data , setData] = useState([])
  const Navigate = useRouter()


  const handleSub = async(e)=>{
      e.preventDefault()
      const email = e.target[0].value
      const password = e.target[1].value
      setLoad(true)
      await axios.post(`${process.env.NEXT_PUBLIC_baseURL}/auth/login`,{email , password}).then(res => setData(res.data)).catch(err => setData(err.response.data))
      setLoad(false)
  }

  
  useEffect(_=>{
    if(Load === false){
      if(Data?.email){
        notyf.success("You're Login")
        setTimeout(() => {
          Navigate.push("/dashboard")
          localStorage.setItem("blog" , JSON.stringify(Data))
      }, 1000);
      }else{
       Data?.Error?.message && notyf.error(Data?.Error?.message)
      }
    }
  } ,[Load])


  return (
    <div className='Login'>
        <form action="" onSubmit={handleSub}>
            <input type="email" placeholder='Email' required />
            <input type="password" placeholder='password' required />
            <input type="submit" className='btn' value="Sign up" />
        </form>
        <Link href="/dashboard/signup">create an acount</Link>
    </div>
  )
}

export default Login