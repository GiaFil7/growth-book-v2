import React from 'react'

function ItemBar (props) {
  return (
    <div className='itemBar'>
      <input id={props.id} type='text' placeholder={props.placeholder} />
      <button onClick={() => props.addItem(props.name, props.id)}>+</button>
    </div>
  )
}

export default ItemBar
