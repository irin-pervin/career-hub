import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layour/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader:()=> fetch('infomations.json')

        
      },
      {
        path:'statistics',
        element: <Statistics></Statistics>,
      }
    ]
    

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
