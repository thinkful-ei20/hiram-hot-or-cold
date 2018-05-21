import React from 'react'
import { connect } from 'react-redux'
import './Attempts.css'

function Attempts(props) {
  return (
    <div className="Attempts">
      Guess #<span>{props.amount}</span>!
    </div>
  )
}

const mapStateToProps = state => ({
  // eslint-disable-next-line
  amount: state.inputs.length,
})

export default connect(mapStateToProps)(Attempts)
