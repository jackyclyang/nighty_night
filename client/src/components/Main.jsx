import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from './Login.jsx'
import Register from './Register.jsx'
import GreatThings from './GreatThings.jsx'
import ToDos from './ToDos.jsx'


export default class Main extends Component {
  state = {
    user_id: ''
  }



  render() {
    const { handleLogin, handleRegister, currentUser } = this.props;

    return (
      <div>
        <Route path='/login' render={(props) => (
          <Login
            {...props}
            handleLogin={handleLogin}
          />
        )} />
        <Route path='/register' render={(props) => (
          <Register
            {...props}
            handleRegister={handleRegister}
          />
        )} />
        {currentUser ? (<Route path='/great'>
          <GreatThings currentUser={currentUser} />
        </Route>) : <div></div>}
        {currentUser ? (<Route path='/todo'>
          <ToDos currentUser={currentUser} />
        </Route>) : <div></div>}


      </div>
    )
  }
}
