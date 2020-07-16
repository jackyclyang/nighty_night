import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <Link to='/'><h1>Nighty Night</h1></Link>

      {currentUser ? (
        <>
          <p>Hello, {currentUser.name}!</p>
          <button onClick={handleLogout}>Sign out</button>
          <Link to='/great'>Great Things</Link>
          <Link to='/todo'>To Do List</Link>
        </>
      ) : (
          <div>
            <Link to='/login'>Sign in</Link>
            <Link to='/register'><button>Sign up</button></Link>
          </div>

        )
      }
      <hr />
      {currentUser && (
        <>
          content
          <hr />
        </>
      )}

    </header >
  )
}
