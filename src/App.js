import React from 'react'
import ReactRoute from './routes/ReactRoute'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  return (
    <RouterProvider router={ReactRoute} />
  )
}

export default App