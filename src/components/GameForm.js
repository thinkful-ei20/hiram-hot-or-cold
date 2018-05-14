import React from "react"
import "./GameForm.css"

export default function GameForm(props) {
  return (
    <form className="GameForm">
      <input type="text" placeholder="Enter your Guess" />
      <input type="submit" value="Guess" />
    </form>
  )
}
