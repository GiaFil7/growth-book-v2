import React from 'react'
import './App.css'

import Schedule from './Components/Schedule'
import Goals from './Components/Goals'
import Motivation from './Components/Motivation'
import Todo from './Components/Todo'
import Happiness from './Components/Happiness'
import Header from './Components/Header'
import Item from './Components/Item'

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
    this.editItem = this.editItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.searchCheckbox = this.searchCheckbox.bind(this)
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

  editItem (name, id) {
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
      const newDesc = document.getElementById('edit-' + id).value.trim()
      if (newDesc !== '') {
        prevState[matchIndex].desc = newDesc
        prevState[matchIndex].isBeingEdited = false
        this.setState({[name]: prevState})
      }
    }
  }

  deleteItem (name, id) {
    const newArray = this.state[name].filter((item) => item.key !== id)
    this.setState({[name]: newArray})
  }

  render () {
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
        <Schedule />
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
