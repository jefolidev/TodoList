import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Choose from './Pages/Choose/Choose'
import Todo from './Pages/Todo/Todo'
import Cash from './Pages/Cash/Cash'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }, 
  {
    path: 'escolha',
    element: <Choose />
  }, 
  {
    path: 'to_do_list',
    element: <Todo />
  }, 
  {
    path: 'financeiro',
    element: <Cash />
  }, 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router = {router} />
    
  </React.StrictMode>,
)
