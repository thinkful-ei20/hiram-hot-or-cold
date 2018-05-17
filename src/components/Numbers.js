import React from 'react'
import './Numbers.css'

export default function Numbers({ guesses }) {
  return (
    <div className="Numbers">
      <ul>{guesses.map((guess, i) => <li key={i}>{guess}</li>)}</ul>
    </div>
  )
}
