import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

export default class Dashboard extends Component {
  render() {
    const { currentUser } = this.props
    return (
      <div className='dashboard'>
        <div className='greetings'>
          Hello, {currentUser.name}!
        </div>
        <div className='greetings-2'>
          <div>
            take a deep breathe
          </div>
          <div>
            and get ready for a good night sleep
          </div>
        </div>
        <div className="two-boxes">
          <div className="go-to-section">
            <div>
              I understand.  Was today a rough day?
              But remember there are great things too.
              No matter how small the joy is,
              they all worth remembering.
            </div>
            <div >
              <Link to="/great">
                <button className="write-it-down">Write it down</button>
              </Link>
            </div>
          </div>
          <div className="go-to-section">
            <div>
              Still a lot of things on your mind?
              Write them down. Get them out.
              Then, you can relax.
              Don’t worry, you can revisit this tomorrow morning.
            </div>
            <div >
              <Link to="/todo">
                <button className="write-it-down">Get them out</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
