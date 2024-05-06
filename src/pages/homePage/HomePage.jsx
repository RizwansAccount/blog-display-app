import React from 'react'
import { DATA } from '../../database'
import BlogCard from '../../components/blogCard/BlogCard'
import './HomePage.css'

const HomePage = () => {
  return (
    <>
      <h1 className='blog_heading'>{'Our Blogs'}</h1>
      <div className='blog_container'>
        { DATA?.map((blog)=> <BlogCard blog={blog} /> )}
      </div>
    </>
  )
}

export default HomePage