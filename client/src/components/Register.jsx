import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Register extends Component {
  state = {
    name: "",
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
    const { name, email, password } = this.state;
    const { handleRegister, history } = this.props;

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegister(this.state);
        history.push('/');
      }}>
        <h3>Register</h3>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <br />
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
        <Link to='/login'>Sign in here</Link>
      </form>
    )
  }
}
