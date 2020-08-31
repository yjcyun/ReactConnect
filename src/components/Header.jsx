import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>Streamy</Link>
      <div className='right meu'>
        <Link className='item' to='/'>
          All Streams
        </Link>
      </div>
    </div>
  )
}

export default Header
