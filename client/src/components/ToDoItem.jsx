import React, { Component } from 'react'


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
  handleStatusChange = (e) => {
    const { value } = e.target
    this.setState({ status: value })
  }

  handleContentChange = (e) => {
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

  handleDeleteClick = (e) => {

  }


  render() {
    const { item } = this.props
    console.log(item)
    return (
      <div>
        {this.state.isEditing ?
          <div>
            <select onChange={this.handleStatusChange} value={this.state.status}>
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Complete">Complete</option>
            </select>
            <input
              type="text"
              name="content"
              placeholder={this.state.content}
              value={this.state.content}
              onChange={this.handleContentChange}
            />
            <button onClick={this.handleCancelClick}>Cancel</button>
            <button onClick={this.handleSaveClick}>Save</button>

          </div>
          :
          <div>
            <span>{item.status}: {item.content}</span>
            <button onClick={this.handleEditClick}>Edit</button>
            <button onClick={() => this.props.handleDeleteToDo(this.props.user_id, item.id)}>Delete</button>
          </div>
        }

      </div>
    )
  }
}
