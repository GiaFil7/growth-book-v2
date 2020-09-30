import React from 'react'

function Header (props) {
  return (
    <div className='header'>
      <img className='logo' src='tree of life.png' alt='logo' />
      <h1>Growth Book</h1>
      <input name='date' className='date' type='text' placeholder='Date' onChange={props.handleChange} />
    </div>
  )
}

export default Header
