import React from 'react'
import './App.css'

import Schedule from './Components/Schedule'
import Goals from './Components/Goals'
import Motivation from './Components/Motivation'
import Todo from './Components/Todo'
import Happiness from './Components/Happiness'
import Header from './Components/Header'
import Item from './Components/Item'
import Event from './Components/Event'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      schedule: [],
      goals: [],
      motivation: '',
      todo: [],
      happiness: '',
      count: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.addEvent = this.addEvent.bind(this)
    this.editItem = this.editItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.searchCheckbox = this.searchCheckbox.bind(this)
    this.checkEvent = this.checkEvent.bind(this)
    this.checkOverlap = this.checkOverlap.bind(this)
  }

  searchCheckbox (name, checked, key) {
    this.setState(prevState => {
      const newState = prevState[name].map(item => {
        key = parseInt(key)
        if (item.key === key) {
          return {
            ...item,
            checked: !item.checked
          }
        } else {
          return item
        }
      })
      return {[name]: newState}
    })
  }

  checkEvent (startHour, startMinutes, endHour, endMinutes) {
    startHour = parseInt(startHour)
    startMinutes = parseInt(startMinutes)
    endHour = parseInt(endHour)
    endMinutes = parseInt(endMinutes)

    if (startHour < endHour) {
      return true
    } else if (startHour === endHour) {
      return (startMinutes < endMinutes)
    } else {
      return false
    }
  }

  checkOverlap (newStartHour, newStartMinutes, newEndHour, newEndMinutes, id) {
    newStartHour = parseInt(newStartHour)
    newStartMinutes = parseInt(newStartMinutes)
    newEndHour = parseInt(newEndHour)
    newEndMinutes = parseInt(newEndMinutes)
    const checkArray = this.state.schedule.map(item => {
      if (item.key !== id) {
        if (newStartHour > item.startHour && newStartHour < item.endHour) {
          return true
        } else if (newEndHour > item.startHour && newEndHour < item.endHour) {
          return true
        } else if (newStartHour < item.startHour && newEndHour > item.endHour) {
          return true
        } else if (newStartHour === item.startHour) {
          return (newStartMinutes >= item.endMinutes || newEndMinutes <= item.startMinutes)
        } else if (newEndHour === item.endHour) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    })
    console.log(checkArray)
    return checkArray.includes(true)
  }

  // Sort
  // Error messages ?

  handleChange (event) {
    const {name, value, type, checked, id} = event.target
    type === 'checkbox' ? this.searchCheckbox(name, checked, id) : this.setState({[name]: value})
  }

  addItem (name, id) {
    const desc = document.getElementById(id).value.trim()
    if (desc !== '') {
      this.setState(prevState => {
        return ({
          count: prevState.count + 1
        })
      })

      this.setState(prevState => {
        return ({[name]: [...prevState[name], {
          checked: false,
          desc: desc,
          key: this.state.count,
          isBeingEdited: false
        }]})
      })
      document.getElementById(id).value = ''
    }
  }

  addEvent () {
    const startHourInput = document.getElementById('startHour')
    const startHour = parseInt(startHourInput.options[startHourInput.selectedIndex].value)
    const startMinutesInput = document.getElementById('startMinutes')
    const startMinutes = parseInt(startMinutesInput.options[startMinutesInput.selectedIndex].value)
    const endHourInput = document.getElementById('endHour')
    const endHour = parseInt(endHourInput.options[endHourInput.selectedIndex].value)
    const endMinutesInput = document.getElementById('endMinutes')
    const endMinutes = parseInt(endMinutesInput.options[endMinutesInput.selectedIndex].value)
    const desc = document.getElementById('event').value.trim()

    if (desc !== '' && this.checkEvent(startHour, startMinutes, endHour, endMinutes) && !this.checkOverlap(startHour, startMinutes, endHour, endMinutes, 0)) {
      this.setState(prevState => {
        return ({
          count: prevState.count + 1
        })
      })
      this.setState(prevState => {
        return ({
          schedule: [...prevState.schedule, {
            desc: desc,
            startHour: startHour,
            startMinutes: startMinutes,
            endHour: endHour,
            endMinutes: endMinutes,
            key: this.state.count,
            isBeingEdited: false
          }]
        })
      })
      document.getElementById('event').value = ''
      startHourInput.selectedIndex = 0
      startMinutesInput.selectedIndex = 0
      endHourInput.selectedIndex = 0
      endMinutesInput.selectedIndex = 0
    }
  }

  editItem (name, id, type) {
    let matchIndex
    for (let i = 0; i < this.state[name].length; i++) {
      if (this.state[name][i].key === id) {
        matchIndex = i
        break
      }
    }
    const prevState = this.state[name]
    if (!prevState[matchIndex].isBeingEdited) {
      prevState[matchIndex].isBeingEdited = true
      this.setState({[name]: prevState})
    } else {
      if (type === 'item') {
        const newDesc = document.getElementById('edit-' + id).value.trim()
        if (newDesc !== '') {
          prevState[matchIndex].desc = newDesc
          prevState[matchIndex].isBeingEdited = false
          this.setState({[name]: prevState})
        }
      } else if (type === 'event') {
        const startHourInput = document.getElementById('editStartHour' + id)
        const newStartHour = parseInt(startHourInput.options[startHourInput.selectedIndex].value)
        const startMinutesInput = document.getElementById('editStartMinutes' + id)
        const newStartMinutes = parseInt(startMinutesInput.options[startMinutesInput.selectedIndex].value)
        const endHourInput = document.getElementById('editEndHour' + id)
        const newEndHour = parseInt(endHourInput.options[endHourInput.selectedIndex].value)
        const endMinutesInput = document.getElementById('editEndMinutes' + id)
        const newEndMinutes = parseInt(endMinutesInput.options[endMinutesInput.selectedIndex].value)
        const newDesc = document.getElementById('event' + id).value.trim()

        if (newDesc !== '' &&
        this.checkEvent(newStartHour, newStartMinutes, newEndHour, newEndMinutes) &&
        !this.checkOverlap(newStartHour, newStartMinutes, newEndHour, newEndMinutes, id)) {
          prevState[matchIndex] = {
            desc: newDesc,
            startHour: newStartHour,
            startMinutes: newStartMinutes,
            endHour: newEndHour,
            endMinutes: newEndMinutes,
            key: id,
            isBeingEdited: false
          }
          this.setState({[name]: prevState})
        }
      }
    }
  }

  deleteItem (name, id) {
    const newArray = this.state[name].filter((item) => item.key !== id)
    this.setState({[name]: newArray})
  }

  render () {
    const events = this.state.schedule.map(event => {
      return <Event
        desc={event.desc}
        startHour={event.startHour}
        startMinutes={event.startMinutes}
        endHour={event.endHour}
        endMinutes={event.endMinutes}
        key={event.key}
        id={event.key}
        isBeingEdited={event.isBeingEdited}
        editItem={this.editItem}
        deleteItem={this.deleteItem}
      />
    })

    const goals = this.state.goals.map(item => {
      return <Item
        name='goals'
        content={item.desc}
        checked={item.checked}
        isBeingEdited={item.isBeingEdited}
        key={item.key}
        id={item.key}
        handleChange={this.handleChange}
        editItem={this.editItem}
        deleteItem={this.deleteItem}
      />
    })

    const todo = this.state.todo.map(item => {
      return <Item
        name='todo'
        content={item.desc}
        checked={item.checked}
        isBeingEdited={item.isBeingEdited}
        key={item.key}
        id={item.key}
        handleChange={this.handleChange}
        editItem={this.editItem}
        deleteItem={this.deleteItem}
      />
    })

    return (
      <div className='App'>
        <Header />
        <Schedule addEvent={this.addEvent} events={events} />
        <Goals
          addItem={this.addItem}
          items={goals}
          name='goals'
        />
        <Motivation handleChange={this.handleChange} />
        <Todo
          addItem={this.addItem}
          items={todo}
          name='todo'
        />
        <Happiness handleChange={this.handleChange} />
      </div>
    )
  }
}

export default App
