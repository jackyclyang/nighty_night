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



  render() {
    const { item } = this.props
    console.log(item)
    return (
      <div >
        {this.state.isEditing ?
          <div className="todo-item">
            <div className="todo-texts">
              <select
                onChange={this.handleStatusChange}
                value={this.state.status}
                className="status-select">
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
                className="todo-input-edit"
              />
            </div>
            <div className="two-buttons">
              <button className="primary-button" onClick={this.handleSaveClick}>Save</button>
              <button className="secondary-button" onClick={this.handleCancelClick}>Cancel</button>
            </div>
          </div>
          :
          <div className="todo-item">
            <div className="todo-texts"><span className="todo-item-status">{item.status}: </span>{item.content}</div>
            <div className="two-buttons">
              <button className="primary-button" onClick={this.handleEditClick}>Edit</button>
              <button className="secondary-button" onClick={() => this.props.handleDeleteToDo(this.props.user_id, item.id)}>Delete</button>
            </div>
          </div>
        }
        <hr />
      </div>
    )
  }
}
