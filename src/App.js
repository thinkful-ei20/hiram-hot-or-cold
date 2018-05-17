import React from "react"
import "./App.css"

import TopBar from "./components/TopBar"
import Title from "./components/Title"
import Game from "./components/Game"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0,
      inputs: []
    }
  }

  render() {
    return (
      <main className="App">
        <TopBar />
        <Title />
        <Game />
      </main>
    )
  }
}