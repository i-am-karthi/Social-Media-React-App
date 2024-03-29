import React, { useState } from 'react'
import Post from './Post'
const FeedPost = ({ posts }) => {
  return (

    <div className='posts'>

      {
        posts.map((p) => (
          <>
            <Post key={p.id} posts={p}
            />
            <hr></hr>
          </>
        ))
      }
    </div>
  )
}

export default FeedPost