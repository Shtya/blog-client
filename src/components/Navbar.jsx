"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import DarkModeToggel from './DarkModeToggel'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [user , setuser] = useState()
  const [load , setload] = useState(false)
  useEffect(_=>{ localStorage.getItem("blog") ? setuser(JSON.parse(localStorage?.getItem("blog"))) : null}, [load])

  const links = [{title:"Home" , url:"/"},{title:"Portfolio" , url:"/portfolio"},{title:"Blog" , url:"/blog"},{title:"About" , url:"/about"},{title:"Contact" , url:"/contact"},{title:"Dashboard" , url:"/dashboard"},]
  const Navigat = useRouter()

  const handleLogOut = async(e)=>{
    setload(false)
    await localStorage.removeItem("blog")
    Navigat.push("/dashboard/signin")
    window.location.reload(false)
    setload(true)
  }
  return (
    <div className='Navbar'>
      <Link href="/" >Dev</Link>
      <div>
        <DarkModeToggel/>
        {links?.map((e,index) => (<Link href={e?.url} key={index}> {e?.title} </Link>))}
         {user  ? <button onClick={handleLogOut}>Logout</button> : <button onClick={_=> Navigat.push("/dashboard/signin")}>Sign in</button> }
        
      </div>
    </div>
  )
}

export default Navbar