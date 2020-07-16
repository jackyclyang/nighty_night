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


  render() {
    const { handleCreateToDo } = this.props

    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        handleCreateToDo(this.state)

      }}>
        <label>
          Here, get out any to-dos that are on your mind <br />
          <input
            name="content"
            value={this.state.content}
            onChange={this.handleContentChange}
          />
          <br />
          <input
            name="status"
            value={this.state.status}
            onChange={this.handleStatusChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form >
    )
  }
}
