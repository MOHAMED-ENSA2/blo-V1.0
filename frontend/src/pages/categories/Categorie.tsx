import React from 'react'
import ProductCard from '../../components/posts/Card'

import './Categorie.css'

function Categorie() {
  return (
    <section className='categorie'>
        <ProductCard bgColor = "rgb(var(--fourth-color))"/>
        <ProductCard bgColor = "rgb(var(--fourth-color))"/>
        <ProductCard bgColor = "rgb(var(--fourth-color))"/>
        <ProductCard bgColor = "rgb(var(--fourth-color))"/>
        <ProductCard bgColor = "rgb(var(--fourth-color))"/>
    </section>
  )
}

export default Categorie