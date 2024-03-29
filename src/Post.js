import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
const Post = ({ posts }) => {
  return (
    <article className='Posts'>
      <Link to={`newpost/${posts.id}`}className='linkstopost'> <h3 className='title'>{posts.title}</h3>
        <p className='postdate'>{posts.datetime}</p>
      </Link>
      <br></br>
      <p className='postbody'>{(posts.body).length <= 500 ? posts.body : `${(posts.body).slice(0, 25)}....`}</p>
    </article>
  )
}

export default Post