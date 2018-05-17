import React from 'react'
import './Game.css'

import Status from './Status'
import GameForm from './GameForm'
import Attempts from './Attempts'
import Numbers from './Numbers'

function Game({
  handleChange,
  handleSubmit,
  guesses,
  input,
  gameOver,
  statusText
}) {
  return (
    <div className="Game">
      <Status {...{ statusText }} />
      <GameForm {...{ handleChange, handleSubmit, input, gameOver }} />
      <Attempts amount={guesses.length} />
      <Numbers {...{ guesses }} />
    </div>
  )
}

export default Game
