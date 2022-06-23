import React, { useEffect, useState } from 'react'
import Post from '../../models/post'
import getPosts from '../../services/posts'
import PostCard from '../../components/posts/Card'

import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    const [data , setData] = useState<Post[]>([])

    const getAllPosts = async() => {
    try {
    const newData = await getPosts()
    setData(newData)

    } catch (error) {
        console.log(error)
    }
    }

    useEffect(() => {
        getAllPosts()
    } , [])

  return (
    <div className='home'>
        <section className='home--main'>
            <PostCard bgColor = "#f5f4f9" />
            <PostCard bgColor = "#f5f4f9" />
            <PostCard bgColor = "#f5f4f9" />
            <PostCard bgColor = "#f5f4f9" />
            <PostCard bgColor = "#f5f4f9" />
            <PostCard bgColor = "#f5f4f9" />
        </section>
        <aside className='home--aside'>
            <section className='top-categories'>

            </section>
            <section className='home--topCtg'>
                <h1>
                    Top categories
                </h1>
                <div className='home--topCtg-content'>
                    <Link to = "/categorie" className='link'>
                        <button className='btn btn_curved' >React</button>
                    </Link>
                    <Link to = "/categorie" className='link'>
                        <button className='btn btn_curved' >Node</button>
                    </Link>
                    <Link to = "/categorie" className='link'>
                        <button className='btn btn_curved' >express</button>
                    </Link>
                    <Link to = "/categorie" className='link'>
                        <button className='btn btn_curved' >MongoDB</button>
                    </Link>
                    <Link to = "/categorie" className='link'>
                        <button className='btn btn_curved' >NLP</button>
                    </Link>
                    <Link to = "/categorie" className='link'>
                        <button className='btn btn_curved' >Html</button>
                    </Link>
                    <Link to = "/categorie" className='link'>
                        <button className='btn btn_curved' >css</button>
                    </Link>

                </div>
            </section>
            <section className='home--popular'>
                <h1>
                    Popular posts
                </h1>
                <Link to = "/post" className='link'>
                    <article>
                        <i className="fa-solid fa-arrow-right"></i>
                        <span>
                            An Interactive Guide to CSS Transitions
                        </span>
                    </article>
                </Link>
                <Link to = "/post" className='link'>
                    <article>
                        <i className="fa-solid fa-arrow-right"></i>
                        <span>
                            An Interactive Guide to CSS Transitions
                        </span>
                    </article>
                </Link>
                <Link to = "/post" className='link'>
                    <article>
                        <i className="fa-solid fa-arrow-right"></i>
                        <span>
                            An Interactive Guide to CSS Transitions
                        </span>
                    </article>
                </Link>
                <Link to = "/post" className='link'>
                    <article>
                        <i className="fa-solid fa-arrow-right"></i>
                        <span>
                            An Interactive Guide to CSS Transitions
                        </span>
                    </article>
                </Link>
            </section>
        </aside>

    </div>
  )
}

export default Home