import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import sleep from './imgs/sleep.png'
import heartUnselected from './imgs/heart (1).png'

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <div>
        <Link to='/'>
          <div className="logo">
            <img src={sleep} alt="logo" className="logo-image"></img>
            <h1 className="title">Nighty Night</h1>
          </div>

        </Link>
      </div>


      {currentUser ? (
        <>
          <div className="header-right-side">
            <div className="header-right-one-element">
              <Link to='/great'>Great Things</Link>
            </div>
            <div className="header-right-one-element">
              <Link to='/todo'>To Do List</Link>
            </div>
            <button
              onClick={handleLogout}
              className="header-right-one-element">
              Sign out
              </button>
          </div>

        </>
      ) : (
          <div className="header-right-side">
            <div className="header-right-one-element">
              <Link to='/login'>Sign in</Link>
            </div>
            <div className="header-right-one-element">
              <Link to='/register'>
                <button className="register-button">Sign up</button>
              </Link>
            </div>
          </div>

        )
      }

    </header >
  )
}
