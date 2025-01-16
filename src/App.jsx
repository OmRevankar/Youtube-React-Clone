import React, { createContext, useState } from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Video from './Pages/Video'

const SidebarContext = createContext();

const App = () => {

  const[sidebar,setSidebar] = useState(true);
  // console.log(sidebar)

  const router = createBrowserRouter(

    [

      {
        path : "/",
        element:
        <div>
          <Navbar />
          <Home />
        </div>
      },

      {
        path : "/video/:categoryId/:videoId",
        element :
        <div>
          <Navbar />
          <Video />
        </div>
      }

    ]

  )


  return (
    <div className='w-[100vw] h-[100vh] overflow-x-hidden font-inter'>
      <SidebarContext.Provider value={{sidebar,setSidebar}}>
        <RouterProvider router={router}></RouterProvider>
      </SidebarContext.Provider>
    </div>
  )
}

export default App
export {SidebarContext}
