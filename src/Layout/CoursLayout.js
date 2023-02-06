import React from 'react'
import Navbar from '../Components/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from '../Components/Footer'

export default function CoursLayout() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
