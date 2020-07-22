import React, { Component } from 'react'

export default class CreateToDo extends Component {
  state = {
    content: '',
    status: ''
  }

  handleContentChange = (e) => {
    const { value } = e.target
    this.setState({
      content: value
    })
  }

  handleStatusChange = (e) => {
    const { value } = e.target

    this.setState({
      status: value
    })
  }

  handleSubmit = () => {
    const { handleCreateToDo } = this.props
    handleCreateToDo(this.state)
    this.setState({
      content: '',
      status: ''
    })
  }

  render() {

    return (
      <div className="add-todo">
        <form onSubmit={(e) => {
          e.preventDefault()
          this.handleSubmit()
        }}>
          <label>
            <div className="create-todo-title">
              Here, get out any to-dos that are on your mind
            </div>
            <div className='create-todo-subtitle'>
              Now it’s time for a good night sleep.
              We will revisit them later. We have time.
            </div>
            <div className="create-todo-input">
              <select
                defaultValue='-Select Status-'
                onChange={this.handleStatusChange}
                className="status-select">
                <option value="-Select Status-" disabled className="option">- Status -</option>
                <option value="Open" className="option-open">Open</option>
                <option value="In Progress" className="option-inprogress">In Progress</option>
                <option value="Complete" className="option-complete">Complete</option>
              </select>
              <input
                name="content"
                value={this.state.content}
                onChange={this.handleContentChange}
                className="todo-input"
              />
            </div>

          </label>
          <div className="create-todo-button">
            <button>Add</button>
          </div>

        </form >
      </div>

    )

  }
}
