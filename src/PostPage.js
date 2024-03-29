import React, { useEffect } from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { Link, Outlet, useParams } from 'react-router-dom'
import Post from './Post'
import Update from './Update'
const PostPage = ({ handledelete,posts,posttitle,setposttitle,postbody,setpostbody}) => {
  const { id } = useParams();
  const k = posts.find((x) => (x.id).toString() == id)
  return (
    <main className='postview'>
      {
        k && <>
         <article>
            <div className='editdiv'>
           <h1>{k.title}</h1>
           <Link to={`/edit/${id}`} className='editicon'> <BiEditAlt/> </Link> 
            </div>
            <h3 className='postdate'>{k.datetime}</h3>
            <h3 className='postbody'>{(k.body).length <= 25 ? k.body : `${(k.body).slice(0, 25)}....`}</h3>
          <button onClick={() => handledelete(id)} className='deletebutton'>Delete Post</button>
          </article>
        </>
      }
      {
        !k && <>
          <h2>Post Not Foud</h2>
          <p>Well,thats disappointing</p>
        </>
      }
    </main>
  )
}

export default PostPage