import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './Navbar'
import '../styles/global.css'
import homepage  from '../images/Homepage.png'
export default function Layout( { children }){
  return (
    <>
      <Helmet>
        <title>Victor Nascimento | Portfolio</title>
        <meta name="title" content="Victor Nascimento | Portfolio"/>
        <meta name="description" content="Web Developer Portfolio"/>
        <meta charSet="utf-8" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.vnascimento.com/"/>
        <meta property="og:title" content="Victor Nascimento | Portfolio"/>
        <meta property="og:description" content="Web Developer Portfolio"/>
        <meta property="og:image" content={homepage}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.vnascimento.com/"/>
        <meta property="twitter:title" content="Victor Nascimento | Portfolio"/>
        <meta property="twitter:description" content="Web Developer Portfolio"/>
        <meta property="twitter:image" content={homepage} />
      </Helmet>

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