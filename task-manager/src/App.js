import React, { Component } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import Alert from './components/Alert'

class App extends Component {
  state = {
    tasks: [],
    filteredTasks: [],
    title: '',
    id: Math.random(),
    edit: false,
    filter: false,
    filterTitle: '',
    alert: false
  }

  handleInputChange = e => {
    this.setState({ title: e.target.value })
  }

  handleInputSubmit = e => {
    e.preventDefault()
    if (!this.state.title) {
      this.setState({ alert: true })
    } else {
      const newTask = {
        title: this.state.title,
        id: this.state.id
      }

      const updatedTasks = [...this.state.tasks, newTask]

      this.setState({
        tasks: updatedTasks,
        title: '',
        id: Math.random(),
        edit: false
      })
    }
  }

  handleDeleteTask = id => {
    const filteredTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({
      tasks: filteredTasks
    })
  }

  handleEditTask = id => {
    const filteredTasks = this.state.tasks.filter(task => task.id !== id)
    const task = this.state.tasks.find(task => id === task.id)
    this.setState({
      tasks: filteredTasks,
      filteredTasks: [],
      filter: false,
      filterTitle: '',
      title: task.title,
      id: task.id,
      edit: true
    })
  }

  handleSearchTasks = e => {
    const filteredTasks = this.state.tasks.filter(task =>
      task.title.includes(e.target.value)
    )
    this.setState({
      filteredTasks: filteredTasks,
      filter: true,
      filterTitle: e.target.value
    })
  }

  handleClearTasks = () => {
    this.setState({
      tasks: []
    })
  }

  handleAlert = () => {
    this.setState({
      alert: false
    })
  }

  render () {
    return (
      <div className='App'>
        <div className='container row mx-auto'>
          <div className='col-10 col-md-8 mx-auto text-center'>
            <h1 className='my-3'>Task Manager</h1>
            {this.state.alert ? <Alert alert={this.handleAlert} /> : null}
            <TodoInput
              handleInputChange={this.handleInputChange}
              title={this.state.title}
              handleInputSubmit={this.handleInputSubmit}
              edit={this.state.edit}
            />
            <TodoList
              clearTasks={this.handleClearTasks}
              deleteTask={this.handleDeleteTask}
              editTask={this.handleEditTask}
              searchTasks={this.handleSearchTasks}
              tasks={this.state.tasks}
              filter={this.state.filter}
              filterTitle={this.state.filterTitle}
              filteredTasks={this.state.filteredTasks}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
