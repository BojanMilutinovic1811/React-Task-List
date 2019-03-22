import React, { Component } from 'react'

export default class TodoInput extends Component {
  render () {
    const { title, handleInputChange, handleInputSubmit, edit } = this.props
    return (
      <form onSubmit={handleInputSubmit}>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>
              <i className='fas fa-book text-primary' />
            </span>
          </div>
          <input
            type='text'
            className='form-control text-capitalize'
            placeholder='type a task'
            value={title}
            onChange={handleInputChange}
          />
        </div>
        {edit ? (
          <button className='btn btn-block btn-success'>Edit Task</button>
        ) : (
          <button className='btn btn-block btn-primary'>Add Task</button>
        )}
      </form>
    )
  }
}
