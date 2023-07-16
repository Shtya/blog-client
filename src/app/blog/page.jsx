'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'




const Blog = () => {
  const [posts , setposts] = useState()
  const [user , setuser] = useState()
  useEffect(_=> {setuser(JSON.parse(localStorage?.getItem("blog")))},[])
  
  useEffect(_=>{
     axios.get(`${process.env.NEXT_PUBLIC_baseURL}/post`).then(res => setposts(res.data))
} ,[ ])

console.log(posts);
  return (
    <div className='Blog'>
      {
        posts?.data?.map((e,index)=> (
             <Link href={`/blog/${e?._id}`} className="box" key={index}>
            <img src={e?.image} alt="" />
            <div className="text">
              <h2> {e?.title}</h2>
              <h3> {e?.desc}</h3>
              <h3>{e.content}</h3>
            </div>
          </Link>
        ))
      }
        

    </div>
  )
}

export default Blog