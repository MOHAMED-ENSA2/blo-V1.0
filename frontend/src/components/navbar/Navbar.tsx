import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className='header' style={{ backgroundImage: "url('curve.svg')"}} >
        <nav className='navbar'>
            <Link to = "/" className='link'>
              <img className='logo' src="logo.png" alt="logo" />            
            </Link>
            <ul className='navbar--items'>
                <Link to = "/categorie" className='link' > <li>Posts</li> </Link>
                <Link to = "/categorie" className='link' > <li>Projects</li> </Link>
                <Link to = "/categorie" className='link' > <li>tutorials</li> </Link>
                <Link to = "/categorie" className='link' >
                    <li className='additional'>Tips & Tricks</li>
                </Link>
            </ul>
        </nav>
    </header>

  )
}

export default Navbar