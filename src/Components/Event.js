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
      hours.push(<option value={i} key={i}>{i < 10 ? '0' + i : i}</option>)
    }
    const minutes = []
    for (let i = 0; i <= 59; i++) {
      minutes.push(<option value={i} key={i}>{i < 10 ? '0' + i : i}</option>)
    }

    const startHour = this.props.startHour < 10 ? '0' + this.props.startHour : this.props.startHour
    const startMinutes = this.props.startMinutes < 10 ? '0' + this.props.startMinutes : this.props.startMinutes
    const endHour = this.props.endHour < 10 ? '0' + this.props.endHour : this.props.endHour
    const endMinutes = this.props.endMinutes < 10 ? '0' + this.props.endMinutes : this.props.endMinutes

    return (
      <div className='item' onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        {this.props.isBeingEdited
          ? <div>
            <select defaultValue={this.props.startHour} name={'editStartHour' + this.props.id} id={'editStartHour' + this.props.id}>{hours}</select>
            <span>:</span>
            <select defaultValue={this.props.startMinutes} name={'editStartMinutes' + this.props.id} id={'editStartMinutes' + this.props.id}>{minutes}</select>
            <span>-</span>
            <select defaultValue={this.props.endHour} name={'editEndHour' + this.props.id} id={'editEndHour' + this.props.id}>{hours}</select>
            <span>:</span>
            <select defaultValue={this.props.endMinutes} name={'editEndMinutes' + this.props.id} id={'editEndMinutes' + this.props.id}>{minutes}</select>
            <input type='text' id={'event' + this.props.id} defaultValue={this.props.desc} autoComplete='off' />
          </div>
          : <div className='item'><p>{startHour} : {startMinutes} - {endHour} : {endMinutes}</p><p className='desc'>{this.props.desc}</p></div>}
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
