import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ search, setsearch }) => {

  return (
    <nav>
      <form className='searchform ' onSubmit={(e) => e.preventDefault()} id='navform'>
        <label htmlFor='search' className='searchlabel'>Search Posts:</label>
        <input type='text' id='search' className='search' value={search}
          placeholder='Search Posts'
          onChange={(e) => setsearch(e.target.value)} />
      </form>
      <div className='menu'>
        <h2><Link to="/" className='mlink'>Home</Link></h2>
        <h2><Link to="newpost" className='mlink'>Post</Link></h2>
        <h2><Link to="about" className='mlink'>About</Link></h2>
      </div>
    </nav>
  )
}

export default Nav