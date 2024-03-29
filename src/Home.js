import React from 'react'
import FeedPost from './FeedPost'
const Home = ({ posts }) => {
  return (
    <main>
      {posts.length ? <FeedPost posts={posts} /> :
        <h3 style={{ margintop: "2rem" }} className='noposts'>No posts to display</h3>
      }
    </main>
  )
}

export default Home