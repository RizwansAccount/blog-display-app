import React from 'react'
import './BlogCard.css'
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/RouteConstants';

const BlogCard = ({blog}) => {

  const navigate = useNavigate();

  return (
    <div className='blog_card'>
        <img src={blog.image} className='blog_img'/>
        <h3 className='blog_title' >{blog.title}</h3>
        <p className='blog_desc' >{blog.description}</p>

        <div onClick={()=> navigate(ROUTES.blog, { state : { blog } } )} className='btn'>
          <p>{'Read More'}</p>
          <FaArrowRight className='btn_icon'/>
        </div>
    </div>
  )
}

export default BlogCard