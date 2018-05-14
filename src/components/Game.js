import React from "react"
import "./Game.css"

import Status from "./Status"
import GameForm from "./GameForm"
import Attempts from "./Attempts"
import Numbers from "./Numbers"

export default function Game(props) {
  return (
    <div className="Game">
      <Status />
      <GameForm />
      <Attempts />
      <Numbers />
    </div>
  )
}
