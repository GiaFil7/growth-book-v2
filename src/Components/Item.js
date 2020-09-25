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
      <p className={props.checked ? 'completed' : null}>{props.content}</p>
      <button>
        <img src='https://img.icons8.com/material-sharp/10/000000/edit.png' alt='/' />
      </button>
      <button onClick={() => props.deleteItem(props.name, props.id)}>
        <img src='https://img.icons8.com/fluent-systems-regular/10/000000/delete-sign.png' alt='X' />
      </button>
    </div>
  )
}

export default Item
