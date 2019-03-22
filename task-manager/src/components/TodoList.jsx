import React, { Component } from 'react'
import TodoItem from './TodoItem'
import FilterTasks from './FilterTasks'
export default class TodoList extends Component {
  render () {
    const {
      tasks,
      clearTasks,
      deleteTask,
      editTask,
      searchTasks,
      filteredTasks,
      filterTitle,
      filter
    } = this.props
    return (
      <div>
        <h2 className='mt-3'>Tasks List</h2>
        <FilterTasks searchTasks={searchTasks} filterTitle={filterTitle} />
        <ul className='list-group'>
          {!filter
            ? tasks.map(task => (
              <TodoItem
                deleteTask={deleteTask}
                editTask={editTask}
                key={task.id}
                title={task.title}
                id={task.id}
              />
            ))
            : filteredTasks.map(task => (
              <TodoItem
                deleteTask={deleteTask}
                editTask={editTask}
                key={task.id}
                title={task.title}
                id={task.id}
              />
            ))}
        </ul>
        <button onClick={clearTasks} className='btn btn-block btn-danger mt-5'>
          Clear All Tasks
        </button>
      </div>
    )
  }
}
