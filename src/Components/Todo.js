import React from 'react'
import ItemBar from './ItemBar'

function Todo (props) {
  return (
    <div className='todo'>
      <h3 className='title'>To-do</h3>
      <ItemBar
        placeholder='Add new task'
        addItem={props.addItem}
        id='todo-bar'
        name='todo'
      />
      <div>{props.items}</div>
    </div>
  )
}

export default Todo
