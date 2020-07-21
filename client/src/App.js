import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
import { withRouter } from 'react-router-dom'


class App extends Component {
  state = {
    currentUser: null
  }

  componentDidMount = async () => {
    this.handleVerify();
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  }

  handleLogin = async (userData) => {
    const currentUser = await loginUser(userData);
    this.setState({ currentUser })
  }

  handleRegister = async (userData) => {
    const currentUser = await registerUser(userData);
    this.setState({ currentUser })
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    removeToken();
    this.props.history.push('/')
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  }

  render() {
    let { currentUser } = this.state
    return (

      <div className="App">
        <Header
          currentUser={currentUser}
          handleLogout={this.handleLogout}
        />
        <Main
          currentUser={currentUser}
          handleLogin={this.handleLogin}
          handleRegister={this.handleRegister}
        />

      </div>
    )
  }
}

export default withRouter(App)