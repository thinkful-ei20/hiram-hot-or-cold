import React from 'react'
import './Attempts.css'

export default function Attempts({ amount }) {
  return (
    <div className="Attempts">
      Guess #<span>{amount}</span>!
    </div>
  )
}
