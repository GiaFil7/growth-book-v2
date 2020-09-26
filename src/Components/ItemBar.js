import React from 'react'

function ItemBar (props) {
  return (
    <div className='itemBar'>
      <input id={props.id} type='text' placeholder={props.placeholder} autoComplete='off' />
      <button className='noselect' onClick={() => props.addItem(props.name, props.id)}>
        <img src='https://img.icons8.com/android/16/000000/plus.png' alt='+' />
      </button>
    </div>
  )
}

export default ItemBar
