import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom' // for dynamically get the component
function Route() {
  return (
    <>
    <Header/>
    <Outlet/> 
    <Footer/>
    </>
  )
}

export default Route