import React from 'react'

function Happiness (props) {
  return (
    <div className='happiness'>
      <h3 className='title'>Happiness</h3>
      <textarea name='happiness' placeholder='What made you happy today?' onChange={props.handleChange} />
    </div>
  )
}

export default Happiness
