import React from 'react'
import EventBar from './EventBar'

function Schedule (props) {
  return (
    <div className='schedule'>
      <div className='bar'>
        <h3 className='title'>Schedule</h3>
        <EventBar addEvent={props.addEvent} />
      </div>
    </div>
  )
}

export default Schedule
