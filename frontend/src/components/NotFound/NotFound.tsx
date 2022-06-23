import React from 'react'
import { Link } from 'react-router-dom'

import './NotFound.css'

function NotFound() {
  return (
    <div className='notfound'>
       <div className='notfound--error'>
          404
       </div>
       <div className='notfound--message'>
        page not found!
        <Link to = "/" className = 'link'>
          <span className='notfound--backhome'>Home</span>
        </Link>
       </div>

      
    </div>
  )
}

export default NotFound