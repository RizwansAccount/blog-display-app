import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from './RouteConstants'
import HomePage from '../pages/homePage/HomePage'
import BlogPage from '../pages/blogPage/BlogPage'

const ReactRoute = createBrowserRouter([
    {
        path: `${ROUTES.home}`,
        element: <HomePage/>
    }, 
    {
        path: `${ROUTES.blog}`,
        element: <BlogPage/>
    }
])
export default ReactRoute