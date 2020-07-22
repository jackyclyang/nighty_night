import React, { Component } from 'react'
import { getAllToDos, postToDo, putToDo, deleteToDo } from '../services/toDos.js'
import CreateToDo from './CreateToDo.jsx'
import ToDoItem from './ToDoItem.jsx'
import './ToDo.css'

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
    let toDos = await getAllToDos(id)

    toDos.sort(function (a, b) { return a.id - b.id })

    this.setState({ toDos })

  }

  handleCreateToDo = async (toDoData) => {
    let { currentUser } = this.props
    let id = currentUser.id

    const newToDo = await postToDo(id, toDoData)

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

  handleDeleteToDo = async (user_id, id) => {
    await deleteToDo(user_id, id)
    this.setState(prevState => ({
      toDos: prevState.toDos.filter(item => item.id !== id)
    }))
  }

  render() {
    let { currentUser } = this.props
    let id = currentUser.id

    return (
      <div className="todo-section">
        <div className="add-todo-section">
          <CreateToDo
            handleCreateToDo={this.handleCreateToDo} />
        </div>
        <div className="todo-items">
          {this.state.toDos.length > 0 ?
            this.state.toDos.map((item) => {
              return (

                <ToDoItem
                  key={item.id}
                  item={item}
                  user_id={id}
                  handleUpdateToDo={this.handleUpdateToDo}
                  handleDeleteToDo={this.handleDeleteToDo}
                />
              )
            })
            : 'none'}

        </div>
      </div>
    )
  }
}
