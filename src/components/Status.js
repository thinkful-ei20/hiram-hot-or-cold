import React from 'react'
import './Status.css'

export default function Status({ statusText }) {
  return (
    <div className="Status">
      <h2>{statusText}</h2>
    </div>
  )
}
