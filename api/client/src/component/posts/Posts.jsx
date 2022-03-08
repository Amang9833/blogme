import React from 'react'
import Post from '../post-new/Post'
import './posts.css'

export default function Posts({post}) {
  return (
    <div className='posts'>
      {post.map((p) => (
        <Post post={p}/>
      ))}
    </div>
  )
}
