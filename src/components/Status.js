import React from 'react'
import './Status.css'
import { connect } from 'react-redux'

function Status(props) {
  return (
    <div className="Status">
      <h2>{props.statusText}</h2>
    </div>
  )
}

const mapStateToProps = state => ({
  // eslint-disable-next-line
  statusText: state.status.text,
})

export default connect(mapStateToProps)(Status)
