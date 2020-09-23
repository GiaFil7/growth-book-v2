import React from 'react'

function Motivation (props) {
  return (
    <div className='motivation'>
      <h3 className='title'>Motivation</h3>
      <textarea name='motivation' placeholder='What motivates you today?' onChange={props.handleChange} />
    </div>
  )
}

export default Motivation
