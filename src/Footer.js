import React from 'react'

const Footer = () => {
  const dat = new Date().getFullYear();
  return (
    <footer>
      <h1>Copyright &copy; {dat} </h1>
    </footer>
  )
}

export default Footer