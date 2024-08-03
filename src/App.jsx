import { useState } from 'react'
import Home from './pages/Home/Home'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
