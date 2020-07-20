import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class GreatThingsItem extends Component {
  state = {
    allGreatThings: [],
    oneGreatThings: [],
    date: '',
    historyDate: new Date(Date.now()),
    allRecordDates: []
  }

  componentDidMount() {
    const { allGreatThings } = this.props
    this.setState({ allGreatThings })

    const { historyDate } = this.state
    let date = historyDate.toString().substring(4, 15)
    console.log(date)
    this.setState({
      date: date
    })

    let records = allGreatThings.map(element => {
      return new Date(element.date)
    })

    this.setState({
      allRecordDates: records
    })

    let oneGreatThings = allGreatThings.filter(element => (element.date === date))

    this.setState({ oneGreatThings })
  }


  handleHistoryDate = (historyDate) => {
    let date = historyDate.toString().substring(4, 15)

    this.setState({
      date: date,
      historyDate: historyDate
    })

    let oneGreatThings = this.state.allGreatThings.filter(element => (element.date === date))

    console.log(oneGreatThings)

    this.setState({ oneGreatThings })

  }


  render() {
    return (
      <div>
        <div>
          Great things you have had
        </div>
        <DatePicker
          defaultValue={new Date(Date.now())}
          selected={this.state.historyDate}
          onChange={this.handleHistoryDate}
          maxDate={new Date()}
          highlightDates={this.state.allRecordDates}
          name="selectHistoryDate"
          dateFormat="MM/dd/yyyy"
        />
        <div>
          <div>
            {this.state.date}
          </div>
          <div>
            {this.state.oneGreatThings.length > 0 ?
              this.state.oneGreatThings.map((thing, index) => {
                return <div key={index}>{thing.content} </div>
              })
              : <div>Nothing from that day</div>}
          </div>

        </div>

      </div>
    )
  }
}
