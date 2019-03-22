import React, { Component } from 'react'

export default class TodoItem extends Component {
  render () {
    const { id, title, deleteTask, editTask } = this.props
    return (
      <li className='list-group-item text-capitalize  d-flex justify-content-between'>
        {title}
        <span>
          <i
            className='far fa-edit text-success mr-2'
            onClick={() => editTask(id)}
          />
          <i
            className='fas fa-trash text-danger'
            onClick={() => deleteTask(id)}
          />
        </span>
      </li>
    )
  }
}
