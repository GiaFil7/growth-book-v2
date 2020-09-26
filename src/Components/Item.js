import React from 'react'

class Item extends React.Component {
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
    return (
      <div className='item' onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <input
          type='checkbox'
          name={this.props.name}
          id={this.props.id}
          checked={this.props.checked}
          onChange={this.props.handleChange}
        />
        <p className={this.props.checked ? 'completed' : null}>{this.props.content}</p>
        <button className={this.state.isHovered ? 'noselect' : 'hide'}>
          <img src='https://img.icons8.com/material-sharp/10/000000/edit.png' alt='/' />
        </button>
        <button className={this.state.isHovered ? 'noselect' : 'hide'} onClick={() => this.props.deleteItem(this.props.name, this.props.id)}>
          <img src='https://img.icons8.com/fluent-systems-regular/10/000000/delete-sign.png' alt='X' />
        </button>
      </div>
    )
  }
}

export default Item
