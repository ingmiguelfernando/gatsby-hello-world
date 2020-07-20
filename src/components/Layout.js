import React from "react"
import NavBar from "./Navbar"
import Footer from "./Footer"
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
