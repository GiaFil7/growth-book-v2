import React from 'react'
import ItemBar from './ItemBar'

function Goals (props) {
  return (
    <div className='goals'>
      <h3 className='title'>Goals</h3>
      <ItemBar
        placeholder='Add new goal'
        addItem={props.addItem}
        id='goal-bar'
        name='goals'
      />
      <div>{props.items}</div>
    </div>
  )
}

export default Goals
