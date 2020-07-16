import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from './Login.jsx'
import Register from './Register.jsx'
import GreatThings from './GreatThings.jsx'


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


      </div>
    )
  }
}
