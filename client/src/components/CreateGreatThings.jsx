import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

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

  handleSubmit = () => {
    const { handleCreateGreatThings } = this.props
    handleCreateGreatThings(this.state)
    this.setState({
      content: ''
    })
  }

  render() {

    let day = new Date(Date.now())
    let yesterday = day.setDate(day.getDate() - 1)
    let today = new Date(Date.now())

    return (
      <div>
        <div>For </div>
        {/* Date picker from https://www.npmjs.com/package/react-datepicker */}
        <DatePicker
          selected={this.state.todayDate}
          onChange={this.handleSelectDate}
          includeDates={[yesterday, today]}
          name="selectDate"
          dateFormat="MM/dd/yyyy"
        />
        <div className="past-midnight-text">Already after midnight? You can change the date to yesterday.</div>

        <br />
        <form onSubmit={(e) => {
          e.preventDefault()
          this.handleSubmit()
        }}>
          <label>
            <div className="what-happened">Here, write down anything great from today</div>
            <div className="write-down-great-things-texts">
              No matter how small the joy it, they all worth remembering.
              Maybe you saw a cute dog today, or maybe someone held a door for you?</div>
            <textarea
              name="content"
              rows="5"
              placeholder="Write down any joys!"
              value={this.state.content}
              onChange={this.handleContentChange}
            />
            <br />
          </label>
          <br />
          <button className="save-joy-button">Save the joy</button>

        </form >

      </div>

    )
  }

}

