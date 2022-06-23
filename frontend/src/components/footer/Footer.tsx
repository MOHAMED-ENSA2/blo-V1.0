import React from 'react'
import { Link } from 'react-router-dom'

import "./Footer.css"

function Footer() {
  return (
    <footer className='footer'>
        <div className="footer--legal">
            <img
                className='logo'
                src = 'logo.png' 
                alt  = "logo"
            />

            <p>
                all right reserved. meziani.com 2022 &copy;
            </p>
        </div>
        
        <div className='footer--content'>
            
            <div>
                <Link to = "/categorie" className = "link">
                    <div className="footer--headitem">Posts</div>
                </Link>
                <Link to = "/categorie" className = "link">
                    <div className="footer--item">React</div>
                </Link>
                <Link to = "/categorie" className = "link">
                    <div className="footer--item">Node/express</div>
                </Link>
                <Link to = "/categorie" className = "link">
                    <div className="footer--item">html</div>
                </Link>
                <Link to = "/categorie" className = "link">
                    <div className="footer--item">css</div>
                </Link>
                <Link to = "/categorie" className = "link">
                    <div className="footer--item">typescript</div>
                </Link>
                   </div>
            <div>
                <Link to = "/categorie" className='link'>
                    <div className="footer--headitem">Tutorial</div>
                </Link>
                <Link to = "/categorie" className='link'>
                    <div className="footer--item">React</div>
                </Link>
                <Link to = "/categorie" className='link'>
                    <div className="footer--item">Node/express</div>
                </Link>
                <Link to = "/categorie" className='link'>
                    <div className="footer--item">html</div>
                </Link>
                <Link to = "/categorie" className='link'>
                    <div className="footer--item">css</div>
                </Link>
                <Link to = "/categorie" className='link'>
                    <div className="footer--item">typescript</div>
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer