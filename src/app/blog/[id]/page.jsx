"use client"
import axios from "axios"
import {notFound} from "next/navigation"
import React, { useEffect, useState } from 'react'

const BlogId = ({params}) => {

  const [posts , setposts] = useState()
  const [user , setuser] = useState()
  useEffect(_=> {setuser(JSON.parse(localStorage?.getItem("blog")))},[])
  
  useEffect(_=>{
     axios.get(`${process.env.NEXT_PUBLIC_baseURL}/post/${params.id}`).then(res => setposts(res.data))
} ,[ ])

  return (
    <div className='BlogId'>
      <div className="box">
        <div className="text">
        <h2>{posts?.title}</h2>
        <p>{posts?.desc}</p>
        <h3> <img src="/user.png" alt="" /> {posts?.user?.email.split("@")[0]}</h3>
        </div>

        <img src={posts?.image} alt="" />
      </div>

      <p>{posts?.content}</p>
    </div>
  )
}

export default BlogId



// export const generateMetadata = async({params})=>{
//   const post = await getData(params.id)
//   return {
//     title: post.title,
//     description: post.desc

//   }
// }
