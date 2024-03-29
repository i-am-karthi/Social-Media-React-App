import React from 'react'
import { Link } from 'react-router-dom'
const NewPost = ({ handlesubmit, posttitle, setposttitle, postbody, setpostbody }) => {
  return (
    <main className='newpostform'>
      <p>New Post</p>
      <form onSubmit={(e) => handlesubmit(e)} className='newpost'>
        <label htmlFor='newposttitle'>Title:</label>
        <input
          type='text'
          id='newposttitle'
          className='newposttitle'
          placeholder='Add title'
          required
          value={posttitle}
          onChange={(e) => setposttitle(e.target.value)}
        />

        <label htmlFor='newpostbody'>Post:</label>

        <textarea
        id='newpostbody'
          className='newpostbody'
          placeholder='Add Content'
          value={postbody}
          required
          onChange={(e) => setpostbody(e.target.value)}
        />
        <br></br>
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default NewPost