import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class ToDoItem extends Component {
  state = {
    id: '',
    status: '',
    content: '',
    isEditing: false
  }

  componentDidMount() {
    if (this.props.item) {
      this.setFormData();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.item !== this.props.item) {
      this.setFormData();
    }
  }

  setFormData = () => {
    this.setState({
      id: this.props.item.id,
      status: this.props.item.status,
      content: this.props.item.content
    })
  }

  handleEditClick = (e) => {
    const { isEditing } = this.state
    this.setState({ isEditing: !isEditing })
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ content: value })

  }

  handleSaveClick = (e) => {
    const { handleUpdateToDo } = this.props
    e.preventDefault()
    handleUpdateToDo(this.props.user_id, this.state.id, this.state)

    const { isEditing } = this.state
    this.setState({ isEditing: !isEditing })
  }


  handleCancelClick = (e) => {
    const { isEditing } = this.state
    this.setState({ isEditing: !isEditing })
  }

  render() {
    const { item } = this.props
    return (
      <div>
        {this.state.isEditing ?
          <div>
            <input
              type="text"
              name="content"
              placeholder={this.state.content}
              value={this.state.content}
              onChange={this.handleChange}
            />
            <button onClick={this.handleCancelClick}>Cancel</button>
            <button onClick={this.handleSaveClick}>Save</button>

          </div>
          :
          <div>
            <span>{item.status}: {item.content}</span>
            <button onClick={this.handleEditClick}>Edit</button>
          </div>
        }

      </div>
    )
  }
}
