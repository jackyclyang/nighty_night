import React from 'react'
import sleep from './imgs/sleep.png'
import './LandingPage.css'
import { Link } from 'react-router-dom'
import Footer from './Footer.jsx'

export default function LandingPage() {
  return (
    <div className="landing">
      <div className="top-left">
        <div className="welcome-title">
          Welcome to Nighty Night
        </div>
        <div className="welcome-p">
          This app  helps you get ready for bedtime by clearing your mind and reducing anxiety.
        </div>
        <div>
          <Link to='/register'>
            <button className="get-started">Get Started</button>
          </Link>
        </div>
      </div>
      <div className="top-right">
        <img src={sleep} alt="logo" className="landing-logo"></img>
      </div>
      <Footer />
    </div>
  )
}
