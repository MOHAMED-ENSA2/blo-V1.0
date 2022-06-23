import React, { useEffect, useRef, useState } from 'react'

import './Post.css'

function Post() {

    const paragraph1 = useRef<HTMLInputElement | null>(null);
    const paragraph2 = useRef<HTMLInputElement | null>(null);
    const paragraph3 = useRef<HTMLInputElement | null>(null);
    const paragraph4 = useRef<HTMLInputElement | null>(null);
    const introduction = useRef<HTMLInputElement | null>(null);
    const conclusion = useRef<HTMLInputElement | null>(null);

    const  [introvisibily , setIntrovisibily] = useState(false)
    const  [p1visibily , setP1visibily] = useState(false)
    const  [p2visibily , setP2visibily] = useState(false)
    const  [p3visibily , setP3visibily] = useState(false)
    const  [p4visibily , setP4visibily] = useState(false)
    const  [conclusionvisibily , setConclusionvisibily] = useState(false)

    useEffect(()=> {

        document.addEventListener("scroll" , e =>  {

            if(introduction.current !== null ) {
                if( Math.abs(introduction.current.getBoundingClientRect().top) < window.innerHeight) {
                    setIntrovisibily(true)
                    setP1visibily(false)
                    setP2visibily(false)
                    setP3visibily(false)
                    setP4visibily(false)
                    setConclusionvisibily(false)
                }
                 else{
                    setIntrovisibily(false)
                 }
 
             }

            if(paragraph1.current !== null ) {
               if( Math.abs(paragraph1.current.getBoundingClientRect().top) < window.innerHeight ) {
                   setP1visibily(true)
                   setP2visibily(false)
                   setP3visibily(false)
                   setP4visibily(false)
                   setConclusionvisibily(false)
                   setIntrovisibily(false)
               }
                else{
                    setP1visibily(false)
                }

            }
            if(paragraph2.current !== null ) {
                if((paragraph2.current.getBoundingClientRect().top) < window.innerHeight ) {
                    setP2visibily(true)
                    setP1visibily(false)
                    setP3visibily(false)
                    setP4visibily(false)
                    setConclusionvisibily(false)
                    setIntrovisibily(false)
                }
                 else{
                     setP2visibily(false)
                 }
            }
            if(paragraph3.current !== null ) {
                if((paragraph3.current.getBoundingClientRect().top) < window.innerHeight) {
                    setP3visibily(true)
                    setP2visibily(false)
                    setP1visibily(false)
                    setP4visibily(false)
                    setConclusionvisibily(false)
                    setIntrovisibily(false)
                }
                 else{
                     setP3visibily(false)
                 }
            }
            if(paragraph4.current !== null ) {
                if((paragraph4.current.getBoundingClientRect().top) < window.innerHeight) {
                    setP4visibily(true)
                    setP2visibily(false)
                    setP3visibily(false)
                    setP1visibily(false)
                    setConclusionvisibily(false)
                    setIntrovisibily(false)
                }
                 else{
                     setP4visibily(false)
                 }
            }

            if(conclusion.current !== null ) {
                if((conclusion.current.getBoundingClientRect().top) < window.innerHeight ) {
                    setConclusionvisibily(true)
                    setP4visibily(false)
                    setP2visibily(false)
                    setP3visibily(false)
                    setP1visibily(false)
                    setIntrovisibily(false)
                }
                 else{
                    setConclusionvisibily(false)
                 }
            }
        })    

    } , [])
    

  return (
    <div className='post'>
        <section>
            <article id = "introduction" ref = {introduction} >
                <h1>
                    Introduction
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi corrupti, consectetur reiciendis deleniti voluptas suscipit atque cum voluptates eos at molestiae, veniam asperiores molestias! Eum ducimus inventore ex accusamus excepturi!
                    Error tempore aliquam aspernatur libero temporibus quam. Vel possimus distinctio quo repellat. Est tempora fugiat eligendi alias eveniet, totam saepe quod et quo quaerat quasi, aspernatur beatae placeat dolores dolore.
                    Unde nobis iure impedit cupiditate aliquid facilis minima repellendus, pariatur maxime praesentium, soluta laborum officia eum delectus similique culpa quibusdam, fuga corrupti ducimus dolores asperiores. Delectus nemo tempora doloribus ullam.
                    Quisquam officiis omnis nobis sunt, dolor labore laboriosam fugit ducimus nulla unde culpa sapiente repellendus beatae adipisci quos totam incidunt odit enim impedit hic libero numquam voluptatibus ipsam. Quos, magni!
                </p>
            </article>
            <article id = "paragraph1" ref = {paragraph1} >
                <h1>
                    Paragraph 1
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi corrupti, consectetur reiciendis deleniti voluptas suscipit atque cum voluptates eos at molestiae, veniam asperiores molestias! Eum ducimus inventore ex accusamus excepturi!
                    Error tempore aliquam aspernatur libero temporibus quam. Vel possimus distinctio quo repellat. Est tempora fugiat eligendi alias eveniet, totam saepe quod et quo quaerat quasi, aspernatur beatae placeat dolores dolore.
                    Unde nobis iure impedit cupiditate aliquid facilis minima repellendus, pariatur maxime praesentium, soluta laborum officia eum delectus similique culpa quibusdam, fuga corrupti ducimus dolores asperiores. Delectus nemo tempora doloribus ullam.
                    Quisquam officiis omnis nobis sunt, dolor labore laboriosam fugit ducimus nulla unde culpa sapiente repellendus beatae adipisci quos totam incidunt odit enim impedit hic libero numquam voluptatibus ipsam. Quos, magni!
                </p>
            </article>

            <article id = "paragraph2" ref = {paragraph2} >
                <h1>
                    Paragraph 2
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi corrupti, consectetur reiciendis deleniti voluptas suscipit atque cum voluptates eos at molestiae, veniam asperiores molestias! Eum ducimus inventore ex accusamus excepturi!
                    Error tempore aliquam aspernatur libero temporibus quam. Vel possimus distinctio quo repellat. Est tempora fugiat eligendi alias eveniet, totam saepe quod et quo quaerat quasi, aspernatur beatae placeat dolores dolore.
                    Unde nobis iure impedit cupiditate aliquid facilis minima repellendus, pariatur maxime praesentium, soluta laborum officia eum delectus similique culpa quibusdam, fuga corrupti ducimus dolores asperiores. Delectus nemo tempora doloribus ullam.
                    Quisquam officiis omnis nobis sunt, dolor labore laboriosam fugit ducimus nulla unde culpa sapiente repellendus beatae adipisci quos totam incidunt odit enim impedit hic libero numquam voluptatibus ipsam. Quos, magni!
                </p>
            </article>

            <article id = "paragraph3" ref = {paragraph3} >
                <h1>
                    Paragraph 3
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi corrupti, consectetur reiciendis deleniti voluptas suscipit atque cum voluptates eos at molestiae, veniam asperiores molestias! Eum ducimus inventore ex accusamus excepturi!
                    Error tempore aliquam aspernatur libero temporibus quam. Vel possimus distinctio quo repellat. Est tempora fugiat eligendi alias eveniet, totam saepe quod et quo quaerat quasi, aspernatur beatae placeat dolores dolore.
                    Unde nobis iure impedit cupiditate aliquid facilis minima repellendus, pariatur maxime praesentium, soluta laborum officia eum delectus similique culpa quibusdam, fuga corrupti ducimus dolores asperiores. Delectus nemo tempora doloribus ullam.
                    Quisquam officiis omnis nobis sunt, dolor labore laboriosam fugit ducimus nulla unde culpa sapiente repellendus beatae adipisci quos totam incidunt odit enim impedit hic libero numquam voluptatibus ipsam. Quos, magni!
                </p>
            </article>

            <article id = "paragraph4" ref = {paragraph4} >
                <h1>
                    Paragraph 4
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi corrupti, consectetur reiciendis deleniti voluptas suscipit atque cum voluptates eos at molestiae, veniam asperiores molestias! Eum ducimus inventore ex accusamus excepturi!
                    Error tempore aliquam aspernatur libero temporibus quam. Vel possimus distinctio quo repellat. Est tempora fugiat eligendi alias eveniet, totam saepe quod et quo quaerat quasi, aspernatur beatae placeat dolores dolore.
                    Unde nobis iure impedit cupiditate aliquid facilis minima repellendus, pariatur maxime praesentium, soluta laborum officia eum delectus similique culpa quibusdam, fuga corrupti ducimus dolores asperiores. Delectus nemo tempora doloribus ullam.
                    Quisquam officiis omnis nobis sunt, dolor labore laboriosam fugit ducimus nulla unde culpa sapiente repellendus beatae adipisci quos totam incidunt odit enim impedit hic libero numquam voluptatibus ipsam. Quos, magni!
                </p>
            </article>

            <article id = "conclusion" ref = {conclusion} >
                <h1>
                    Conclusion
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi corrupti, consectetur reiciendis deleniti voluptas suscipit atque cum voluptates eos at molestiae, veniam asperiores molestias! Eum ducimus inventore ex accusamus excepturi!
                    Error tempore aliquam aspernatur libero temporibus quam. Vel possimus distinctio quo repellat. Est tempora fugiat eligendi alias eveniet, totam saepe quod et quo quaerat quasi, aspernatur beatae placeat dolores dolore.
                    Unde nobis iure impedit cupiditate aliquid facilis minima repellendus, pariatur maxime praesentium, soluta laborum officia eum delectus similique culpa quibusdam, fuga corrupti ducimus dolores asperiores. Delectus nemo tempora doloribus ullam.
                    Quisquam officiis omnis nobis sunt, dolor labore laboriosam fugit ducimus nulla unde culpa sapiente repellendus beatae adipisci quos totam incidunt odit enim impedit hic libero numquam voluptatibus ipsam. Quos, magni!
                </p>
            </article>

        </section>

        <aside className='post--tableOfContent'>
            <h3>
                TABLE OF CONTENT 
            </h3>

            <a className='tableOfContent--item' href='#introduction' style={{color : !introvisibily ? "" : "blue"  }} > Introduction </a>
            <a className='tableOfContent--item' href='#paragraph1' style={{color : !p1visibily ? "" : "blue"  }}> fist paragraph </a>
            <a className='tableOfContent--item' href='#paragraph2' style={{color : !p2visibily ? "" : "blue"  }} > second paragraph</a>
            <a className='tableOfContent--item' href='#paragraph3' style={{color : !p3visibily ? "" : "blue"  }} > third paragraph</a>
            <a className='tableOfContent--item' href='#paragraph4' style={{color : !p4visibily  ? "" : "blue"  }} > fourth paragraph</a>
            <a className='tableOfContent--item' href='#conclusion' style={{color : !conclusionvisibily ? "" : "blue"  }}> Conclusion</a>

        </aside>
    </div>
  )
}

export default Post