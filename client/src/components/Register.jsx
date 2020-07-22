import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import Footer from './Footer.jsx'

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
      <div className="register-signin">
        <form onSubmit={(e) => {
          e.preventDefault();
          handleRegister(this.state);
          history.push('/');
        }}>
          <h3>Sign up</h3>
          <label>
            <div>Name</div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            <div>Email</div>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            <div>Password</div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button className="sign-up">Sign up</button>
          <div className="already">
            <Link to='/login'>Already have an account? Sign in here</Link>
          </div>
        </form>
        <Footer />
      </div>

    )
  }
}
