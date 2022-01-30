import React, {useState} from 'react'
import { Link } from 'gatsby'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Navbar(){

  const [menuToggle, setMenuToggle] = useState(false)

  const navToggle = () =>{
    const body = document.querySelector("body");
    const navbarLinks = document.querySelectorAll(".links")[0]
    navbarLinks.classList.toggle("active")
    body.classList.toggle("hide-overflow")
    setMenuToggle(!menuToggle);
  }

  return (
    <nav>
      <div className="logo">
        <h1>
          <Link to="/">V.N.</Link>
        </h1>
      </div>
      {menuToggle ?
      <AiOutlineClose className="toggle-button" style={{fill: "#333", height: "2rem"}} onClick={() => navToggle()} />
      : 
      <GiHamburgerMenu className="toggle-button" style={{fill: "#333", height: "2rem"}} onClick={() => navToggle()} />
      }
      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}