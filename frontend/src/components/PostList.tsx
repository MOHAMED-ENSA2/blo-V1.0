import React from 'react'
import  Post from "../models/post"


export interface Posts {
  data : Post[]
}

function PostList({data} : Posts ) {
  return (
    <div>
      {
        data.map(elm => <div key = {elm.id}>{elm.title}</div>)
      }
    </div>
  )
}

export default PostList