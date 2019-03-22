import React, { Component } from 'react'

export default class FilterTasks extends Component {
  render () {
    const { searchTasks, filterTitle } = this.props
    return (
      <div>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Search Tasks</span>
          </div>
          <input
            type='search'
            className='form-control text-capitalize'
            value={filterTitle}
            onChange={searchTasks}
          />
        </div>
      </div>
    )
  }
}
