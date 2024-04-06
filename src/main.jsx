import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLAyout from './Component/MainLAyout.jsx';
import Home from './Component/Home.jsx';
import Login from './Component/Login.jsx';
import Registar from './Component/Registar.jsx';
import AuthProvider from './PrivateContext/AuthProvider.jsx';
import Orders from './PrivateRoute/Orders.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';


const router=createBrowserRouter([
  {
    path:'/',
    element:<MainLAyout></MainLAyout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registar',
        element:<Registar></Registar>
      },{
        path:'/orders',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <AuthProvider>
  <RouterProvider RouterProvider router={router}></RouterProvider>
  </AuthProvider>

  </React.StrictMode>,
)
