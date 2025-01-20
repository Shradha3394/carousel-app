import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
      <div>
        <img alt='logo' width="100px;" src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" />
      </div>
      <Link to="/" style={{marginLeft: "5em"}}>Home</Link>
      <Link to="/about" style={{marginLeft: "5em"}}>About</Link>
      <Link to="/contact-us/Shradha" style={{marginLeft: "5em"}}>Contact Us</Link>
    </>
  )
}

export default Header