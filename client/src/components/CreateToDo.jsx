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
    console.log(value)
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
      <form onSubmit={(e) => {
        e.preventDefault()
        this.handleSubmit()

      }}>
        <label>
          Here, get out any to-dos that are on your mind <br />
          <select defaultValue='-Select Status-' onChange={this.handleStatusChange} >
            <option value="-Select Status-" disabled>-Select Status-</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Complete">Complete</option>
          </select>
          <input
            name="content"
            value={this.state.content}
            onChange={this.handleContentChange}
          />
          <br />

        </label>
        <br />
        <button>Submit</button>
      </form >
    )

  }
}
