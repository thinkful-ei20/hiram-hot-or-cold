import React from 'react'
import './App.css'

import TopBar from './components/TopBar'
import Title from './components/Title'
import Game from './components/Game'

export default function App() {
  return (
    <main className="App">
      <TopBar />
      <Title />
      <Game />
    </main>
  )
}
