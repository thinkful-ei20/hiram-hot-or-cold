import React from 'react'
import './GameForm.css'

export default function GameForm({
  handleChange,
  handleSubmit,
  input,
  gameOver
}) {
  return (
    <form className="GameForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your Guess"
        onChange={handleChange}
        value={input}
      />
      {gameOver ? (
        <div className="placeholder" />
      ) : (
        <input type="submit" value="Guess" />
      )}
    </form>
  )
}
