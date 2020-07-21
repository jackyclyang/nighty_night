import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Register.css'
import Footer from './Footer.jsx'

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
      <div className="register-signin">
        <form onSubmit={(e) => {
          e.preventDefault();
          handleLogin(this.state);
          history.push('/')
        }}>
          <h3>Sign in</h3>
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
          <button className="sign-in">Sign in</button>
          <div className="already">
            <Link to='/register'>Don't have an account? Sign up here</Link>
          </div>

        </form>
        <Footer />
      </div>

    )
  }
}
