import React from 'react'

function Item (props) {
  return (
    <div className='item'>
      <input
        type='checkbox'
        name={props.name}
        id={props.id}
        checked={props.checked}
        onChange={props.handleChange}
      />
      <p>{props.content}</p>
      <button>/</button>
      <button onClick={() => props.deleteItem(props.name, props.id)}>X</button>
    </div>
  )
}

export default Item
