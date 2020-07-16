import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ToDoItem extends Component {
  render() {
    const { item } = this.props
    return (
      <div>
        <span>{item.status}: {item.content}</span>

        <Link to={``}><button>Edit</button></Link>
      </div>
    )
  }
}
