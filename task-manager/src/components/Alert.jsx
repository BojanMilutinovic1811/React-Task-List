import React, { Component } from 'react'

export default class Alert extends Component {
  render () {
    const { alert } = this.props
    return (
      <div class='alert alert-warning alert-dismissible fade show' role='alert'>
        <strong>Please add task title!</strong>
        <button
          type='button'
          class='close'
          data-dismiss='alert'
          aria-label='Close'
          onClick={alert}>
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
    )
  }
}
