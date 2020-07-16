import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { email, password } = this.state;
    const { handleLogin, history } = this.props;

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin(this.state);
        history.push('/')
      }}>
        <h3>Login</h3>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
        <Link to='/register'>Register</Link>
      </form>
    )
  }
}
