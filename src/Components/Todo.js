import React from 'react'
import ItemBar from './ItemBar'

function Todo () {
  return (
    <div className='todo'>
      <h3 className='title'>To-do</h3>
      <ItemBar placeholder='Add new task' />
    </div>
  )
}

export default Todo
