"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { Notyf } from "notyf";
// import 'notyf/notyf.min.css';

const Dashboard = () => {
  // const notyf = new Notyf()

  const config = {headers: {"Content-Type": "multipart/form-data" }}
  const [data , setdata] = useState()
  const [err , seterr] = useState(false)
  const [posts , setposts] = useState()
  const [Img , setImg] = useState()
  const [load , setload] = useState(false)
  const [user , setuser] = useState()
  useEffect(_=> {setuser(JSON.parse(localStorage?.getItem("blog")))},[])


  const handleImg = (e)=>{
    if(e.target.files && e.target.files[0]){
      setImg((e.target.files[0]))
    }
  }

  const handleSub=async(e)=>{
    e.preventDefault()
    if(user === null) return seterr(true)
    const title = e.target[0].value
    const desc = e.target[1].value
    const content = e.target[2].value
    
    setload(true)
    await axios.post(`${process.env.NEXT_PUBLIC_baseURL}/post/`,{title , desc,image:Img , content , user:user?._id} , config).then(res => setdata(res.data)).catch(err => setdata(err.response.data))
    setload(false)

    e.target[0].value = ""
    e.target[1].value = ""
    e.target[2].value = ""
    e.target[3].value = ""
  }

  useEffect(_=>{
      user && axios.get(`${process.env.NEXT_PUBLIC_baseURL}/post?search=${user?._id}`).then(res => setposts(res.data))
  } ,[user , load ])

  const handleDele = async(e)=>{
    setload(true)
    await axios.delete(`${process.env.NEXT_PUBLIC_baseURL}/post/${e}`)
    setload(false)
  }

  return (<div className='Dashboard'>
      <div className="right">
        {
          posts?.data?.length >= 1 ?
          posts?.data?.map((e,index) => (
            <div className="box" key={index}>
              <img src={e?.image} alt="" />
              <div className="text">
                <h2>{e?.title}</h2>
                <h3>{e?.desc}</h3>
                <h4 onClick={_=>handleDele(e?._id)}>×</h4>
              </div>
            </div>
          )) : <img className='alt' src="./art2.jpeg" />
        }
      </div>
        
        
      <div className="left">
        <h1>Add New Article </h1>
        <form action="" onSubmit={handleSub}>
          <input type="text" placeholder='Title' />
          <input type="text" placeholder='Description' />
          <textarea  placeholder='Content' ></textarea>
          <input onChange={handleImg} type="file" placeholder='image' className='file' />

          <button className='btn'>Send</button>
          {err && <h2 className='err'>You are not registered</h2>}
        </form>
      </div>


  </div>)


}

export default Dashboard