"use client"
import React, { useEffect, useState } from 'react'
import {useRouter} from "next/navigation"
import Link from "next/link"
import axios from "axios"
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';

const SignUp = () => {
    const notyf = new Notyf({position:{y:"top"}})

    const [Data , setData] = useState()
    const [Load , setLoad] = useState(false)

    const Navigate = useRouter()


    const handleSub = async(e)=>{
        e.preventDefault()
        const name = e.target[0].value
        const email = e.target[1].value
        const pass = e.target[2].value
        setLoad(true)
        await axios.post(`${process.env.NEXT_PUBLIC_baseURL}/auth/register`,{name , password:pass , email}).then(res => setData(res.data)).catch(err => setData(err.response))
        setLoad(false)
    }
    useEffect(_=>{
        if(Load === false){
            if(Data?.email){
                notyf.success("You have been registered successfully")
                setTimeout(() => {
                    Navigate.push("/dashboard/signin")
                }, 1000);
            }else{
                if(Data?.data?.Error?.message.startsWith("E11000 duplicate key error collectio")) notyf.error("this E-mail is already exist")
            }
        }
    } ,[Load])



    return (
    <div className='SignUp'>
        <form action="" onSubmit={handleSub}>
            <input type="text" placeholder='Name' required />
            <input type="email" placeholder='Email' required />
            <input type="password" placeholder='password' required />
            <input style={{opacity: Load?".6" : "1"}} type="submit" className='btn' value="Sign up" />
        </form>
        <Link href="/dashboard/signin"> You have an account </Link>
    </div>
  )
}

export default SignUp