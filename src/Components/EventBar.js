import React from 'react'

function EventBar (props) {
  const hours = []
  for (let i = 0; i <= 23; i++) {
    hours.push(<option value={i} key={i}>{i < 10 ? '0' + i : i}</option>)
  }
  const minutes = []
  for (let i = 0; i <= 59; i++) {
    minutes.push(<option value={i} key={i}>{i < 10 ? '0' + i : i}</option>)
  }

  return (
    <div className='itemBar'>
      <select name='startHour' id='startHour'>{hours}</select>
      <span>:</span>
      <select name='startMinutes' id='startMinutes'>{minutes}</select>
      <span>-</span>
      <select name='endHour' id='endHour'>{hours}</select>
      <span>:</span>
      <select name='endMinutes' id='endMinutes'>{minutes}</select>
      <input type='text' id='event' placeholder='Add a new event' autoComplete='off' />
      <button className='noselect' onClick={props.addEvent}>
        <img src='https://img.icons8.com/android/16/000000/plus.png' alt='+' />
      </button>
    </div>
  )
}

export default EventBar
