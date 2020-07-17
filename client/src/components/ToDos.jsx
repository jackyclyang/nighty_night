import React, { Component } from 'react'
import { getAllToDos, postToDo, putToDo, deleteToDo } from '../services/toDos.js'
import CreateToDo from './CreateToDo.jsx'
import ToDoItem from './ToDoItem.jsx'

export default class ToDos extends Component {

  state = {
    toDos: []
  }

  componentDidMount() {
    this.fetchToDos()
    console.log(this.state.toDos)
  }

  fetchToDos = async () => {
    let { currentUser } = this.props
    let id = currentUser.id
    let toDos = await getAllToDos(id)

    this.setState({ toDos })

    console.log(this.state.toDos)

  }

  handleCreateToDo = async (toDoData) => {
    let { currentUser } = this.props
    let id = currentUser.id

    const newToDo = await postToDo(id, toDoData)
    console.log(newToDo)

    // if (this.state.toDos) {
    //   this.state.toDos.sort(function (a, b) { return a.id - b.id })
    // }

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
    console.log(this.state.toDos)


    return (
      <div>
        <CreateToDo
          handleCreateToDo={this.handleCreateToDo} />
        {this.state.toDos.length > 0 ?
          this.state.toDos.map((item) => {
            return (
              <ToDoItem
                key={item.id}
                item={item}
                user_id={id}
                handleUpdateToDo={this.handleUpdateToDo}
                handleDeleteToDo={this.handleDeleteToDo}
              />)
          })
          : 'none'}

      </div>
    )
  }
}