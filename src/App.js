import React from 'react'
import './App.css'

import TopBar from './components/TopBar'
import Title from './components/Title'
import Game from './components/Game'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: Math.floor(Math.random() * 100),
      input: '',
      inputs: [],
      status: { text: 'Make your Guess!', won: false }
    }
  }

  updateStatus() {
    const lastInput = this.state.inputs[this.state.inputs.length - 1]
    let status
    if (lastInput === this.state.num) {
      status = {
        text: 'You Won. Click new game to play again!',
        won: true
      }
    } else if (Math.abs(lastInput - this.state.num) <= 10) {
      status = {
        text: 'Hot',
        won: false
      }
    } else if (Math.abs(lastInput - this.state.num) <= 20) {
      status = {
        text: 'Kinda Hot',
        won: false
      }
    } else {
      status = {
        text: 'Cold',
        won: false
      }
    }
    this.setState({ status })
  }

  handleChange(e) {
    this.setState({ input: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const input = Number(this.state.input)
    this.setState({ input: '' })
    if (!input) {
      alert('Please input a number')
    } else if (this.state.inputs.indexOf(input) !== -1) {
      alert('You guessed this number already')
    } else {
      this.setState(
        {
          inputs: [...this.state.inputs, input]
        },
        this.updateStatus
      )
    }
  }

  render() {
    return (
      <main className="App">
        <TopBar />
        <Title />
        <Game
          gameOver={this.state.status.won}
          statusText={this.state.status.text}
          input={this.state.input}
          guesses={this.state.inputs}
          handleChange={e => this.handleChange(e)}
          handleSubmit={e => this.handleSubmit(e)}
        />
      </main>
    )
  }
}
