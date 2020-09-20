import React from 'react'

function ItemBar (props) {
  return (
    <div className='itemBar'>
      <input type='text' placeholder={props.placeholder} />
      <button>+</button>
    </div>
  )
}

export default ItemBar
