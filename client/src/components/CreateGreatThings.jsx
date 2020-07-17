import React, { Component } from 'react'

export default class CreateGreatThings extends Component {

  state = {
    content: '',
    date: ''
  }

  handleContentChange = (e) => {
    const { value } = e.target
    this.setState({
      content: value
    })
  }

  handleDateChange = (e) => {
    const { value } = e.target
    this.setState({
      date: value
    })
  }


  render() {
    const { handleCreateGreatThings } = this.props

    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        handleCreateGreatThings(this.state)

      }}>
        <label>
          What great things happend today? <br />
          <textarea
            name="content"
            rows="10"
            value={this.state.content}
            onChange={this.handleContentChange}
          />
          <br />
          <input
            name="date"
            value={this.state.date}
            onChange={this.handleDateChange}
          />
        </label>
        <br />
        <button>Save the joy</button>
      </form >
    )
  }

}