import React from 'react'
import './App.css'

import Schedule from './Components/Schedule'
import Goals from './Components/Goals'
import Motivation from './Components/Motivation'
import Todo from './Components/Todo'
import Happiness from './Components/Happiness'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      schedule: [],
      goals: [],
      motivation: '',
      todo: [],
      happiness: ''
    }
  }

  render () {
    return (
      <div className='App'>
        <div className='header'>Header</div>
        <Schedule />
        <Goals />
        <Motivation />
        <Todo />
        <Happiness />
      </div>
    )
  }
}

export default App
