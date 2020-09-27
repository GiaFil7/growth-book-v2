import React from 'react'

class Event extends React.Component {
  constructor () {
    super()
    this.state = {
      isHovered: false
    }
    this.handleHover = this.handleHover.bind(this)
  }

  handleHover () {
    this.setState({
      isHovered: !this.state.isHovered
    })
  }

  render () {
    const hours = []
    for (let i = 0; i <= 23; i++) {
      hours.push(<option value={i} key={i}>{i}</option>)
    }
    const minutes = []
    for (let i = 0; i <= 59; i++) {
      minutes.push(<option value={i} key={i}>{i}</option>)
    }

    return (
      <div className='item' onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        {this.props.isBeingEdited
          ? <div>
            <select name={'editStartHour-' + this.props.id} id={'editStartHour' + this.props.id}>{hours}</select>
            <span>:</span>
            <select name={'editStartMinutes' + this.props.id} id={'editStartMinutes' + this.props.id}>{minutes}</select>
            <span>-</span>
            <select name={'editEndHour' + this.props.id} id={'editEndHour' + this.props.id}>{hours}</select>
            <span>:</span>
            <select name={'editEndMinutes' + this.props.id} id={'editEndMinutes' + this.props.id}>{minutes}</select>
            <input type='text' id='event' placeholder='Add a new event' autoComplete='off' />
          </div> : <div><p>{this.props.startHour} : {this.props.startMinutes} - {this.props.endHour} : {this.props.endMinutes}</p>
            <p>{this.props.desc}</p></div>}

        <button className={this.state.isHovered ? 'noselect' : 'hide'} onClick={() => this.props.editItem('schedule', this.props.id, 'event')}>
          <img src='https://img.icons8.com/material-sharp/10/000000/edit.png' alt='/' />
        </button>
        <button className={this.state.isHovered ? 'noselect' : 'hide'} onClick={() => this.props.deleteItem('schedule', this.props.id)}>
          <img src='https://img.icons8.com/fluent-systems-regular/10/000000/delete-sign.png' alt='X' />
        </button>
      </div>
    )
  }
}

export default Event
