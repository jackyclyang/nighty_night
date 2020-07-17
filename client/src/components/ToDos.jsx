import React, { Component } from 'react'
import { getToDos, postToDo, putToDo } from '../services/toDos.js'
import CreateToDo from './CreateToDo.jsx'
import ToDoItem from './ToDoItem.jsx'

export default class ToDos extends Component {
  state = {
    toDos: []
  }

  componentDidMount() {
    this.fetchToDos()
  }

  fetchToDos = async () => {
    let { currentUser } = this.props

    let id = currentUser.id
    let toDos = await getToDos(id)

    this.setState({ toDos })
    console.log(this.state.toDos)

  }

  handleCreateToDo = async (toDoData) => {
    let { currentUser } = this.props
    let id = currentUser.id
    console.log(toDoData)
    console.log(id)
    const newToDo = await postToDo(id, toDoData)
    console.log(newToDo)
    this.setState(prevState => ({
      toDos: [...prevState.toDos, newToDo]
    }))
  }


  handleUpdateToDo = async (user_id, id, toDoData) => {
    const newToDo = await putToDo(user_id, id, toDoData)
    this.setState(prevState => ({
      toDos: prevState.toDos.map(toDo => toDo.id === parseInt(id) ? newToDo : toDo)
    }))
  }

  render() {
    let { currentUser } = this.props
    let id = currentUser.id
    this.state.toDos.sort(function (a, b) { return a.id - b.id })
    return (
      <div>
        <CreateToDo
          handleCreateToDo={this.handleCreateToDo} />
        {this.state.toDos ?

          this.state.toDos.map((item) => {
            return (
              <ToDoItem
                key={item.id}
                item={item}
                user_id={id}
                handleUpdateToDo={this.handleUpdateToDo} />)
          })
          : ''}

      </div>
    )
  }
}
