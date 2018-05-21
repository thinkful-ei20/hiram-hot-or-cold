import React from 'react'
import { connect } from 'react-redux'
import './Numbers.css'

function Numbers(props) {
  return (
    <div className="Numbers">
      <ul>{props.guesses.map((guess, i) => <li key={i}>{guess}</li>)}</ul>
    </div>
  )
}

const mapStateToProps = state => ({
  // eslint-disable-next-line
  guesses: state.inputs,
})

export default connect(mapStateToProps)(Numbers)
