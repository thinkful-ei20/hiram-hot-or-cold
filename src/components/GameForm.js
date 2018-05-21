import React from 'react'
import './GameForm.css'
import { connect } from 'react-redux'
import { addInput, updateInput, setStatus } from '../actions'

const updateStatus = props => {
  const lastInput = props.inputs[props.inputs.length - 1]
  let status
  if (lastInput === props.num) {
    status = {
      text: 'You Won. Click new game to play again!',
      won: true,
    }
  } else if (Math.abs(lastInput - props.num) <= 10) {
    status = {
      text: 'Hot',
      won: false,
    }
  } else if (Math.abs(lastInput - props.num) <= 20) {
    status = {
      text: 'Kinda Hot',
      won: false,
    }
  } else {
    status = {
      text: 'Cold',
      won: false,
    }
  }
  props.dispatch(setStatus(status))
}

const handleSubmit = (e, props) => {
  e.preventDefault()
  const input = Number(props.input)
  props.dispatch(updateInput(''))
  if (!input) {
    alert('Please input a number')
  } else if (props.inputs.indexOf(input) !== -1) {
    alert('You guessed this number already')
  } else {
    props.dispatch(addInput(input))
  }
}

function GameForm(props) {
  if (props.inputs.length > 0) updateStatus(props)
  return (
    <form className="GameForm" onSubmit={e => handleSubmit(e, props)}>
      <input
        type="text"
        placeholder="Enter your Guess"
        onChange={e => props.dispatch(updateInput(e.target.value))}
        value={props.input}
      />
      {props.won ? (
        <div className="placeholder" />
      ) : (
        <input type="submit" value="Guess" />
      )}
    </form>
  )
}

const mapStateToProps = state => ({
  input: state.input,
  inputs: state.inputs,
  num: state.num,
  won: state.status.won,
})

export default connect(mapStateToProps)(GameForm)
