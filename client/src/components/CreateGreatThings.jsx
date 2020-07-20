import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateGreatThings extends Component {
  state = {
    content: '',
    date: '',
    todayDate: new Date(Date.now())
  }

  componentDidMount() {
    const { todayDate } = this.state
    this.setState({
      date: todayDate.toString().substring(4, 15),
    })
  }

  handleContentChange = (e) => {
    const { value } = e.target
    this.setState({
      content: value
    })
  }

  handleSelectDate = async (todayDate) => {
    this.setState({
      date: todayDate.toString().substring(4, 15),
      todayDate: todayDate
    })
  }

  handleRedirect = () => {
    return <Redirect to="/great/history" />
  }

  render() {
    const { handleCreateGreatThings } = this.props

    return (
      <div>
        <div>Today is </div>
        {/* Date picker from https://www.npmjs.com/package/react-datepicker */}
        <DatePicker
          selected={this.state.todayDate}
          onChange={this.handleSelectDate}
          name="selectDate"
          dateFormat="MM/dd/yyyy"
        />
        <form onSubmit={(e) => {
          e.preventDefault()
          handleCreateGreatThings(this.state)
          this.handleRedirect()
        }}>
          <label>
            What great things happend today? <br />
            <textarea
              name="content"
              rows="10"
              value={this.state.content}
              onChange={this.handleContentChange}
            />
            <br />
          </label>
          <br />
          <button>Save the joy</button>
        </form >
        <Link to="/great/history">See past great things</Link>
      </div>

    )
  }

}
