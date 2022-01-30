import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
export default function Layout( { children }){
  return (
    <>
      <div className="body-border body-border--top"></div>
      <div className="body-border body-border--bottom"></div>
      <div className="body-border body-border--left"></div>
      <div className="body-border body-border--right"></div>
      <Navbar />
      <div className="layout">
        <div className="content">
          { children }
        </div>
      </div>
      <footer>
        <p>Developed by Victor Nascimento</p>
      </footer>
    </>
  )
}