import React from 'react'
import { Link } from 'react-router-dom'

import "./Card.css"

interface CardInterface{
  bgColor : string
}


function Card(props: CardInterface) {

  return (
    <Link to = "/post" className='link' >

      <article className='postCard' style={{backgroundColor : props.bgColor}}>
          <h2>
          The Surprising Truth About Pixels and Accessibility
          </h2>
          <p>
          “Should I use pixels or rems?”. In this comprehensive blog post, we'll answer this question once and for all. You'll learn about the accessibility implications, and how to determine the best unit to use in any scenario.
          </p>
          <a href="#" className='postCard--link'>
              <span>Read more</span> 
              <i className="card--link fa-solid fa-arrow-right"></i>
          </a>
      </article>
    
    </Link>
  )
}

export default Card