import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './BlogPage.css'
import { FaArrowLeft } from "react-icons/fa6";

const BlogPage = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const { blog } = location.state;

  useEffect(()=>{ window.scroll(0,0) },[])

  const fnGoBack =()=> navigate(-1);

  return (
    <div className='container'>
      <div className='title_box' >
        <FaArrowLeft onClick={()=> fnGoBack()} className='back_icon'/>
        <h1 className='title'>{blog?.title}</h1>
      </div>
      <img src={blog?.image} className='img' />
      <p className='desc' >{blog?.description}</p>
    </div>
  )
}

export default BlogPage