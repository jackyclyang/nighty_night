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

  componentDidMount = async () => {
    let historyDate = this.state.historyDate
    let date = historyDate.toString().substring(4, 15)

    this.setState({
      date: date,
      historyDate: historyDate
    })

    const { allGreatThings } = await this.props
    this.setState({ allGreatThings })

    let records = this.state.allGreatThings.map(element => {
      return new Date(element.date)
    })
    this.setState({
      allRecordDates: records
    })

    let oneGreatThings = this.state.allGreatThings.filter(element => (element.date === date))
    this.setState({ oneGreatThings })

  }


  handleHistoryDate = (historyDate) => {
    let date = historyDate.toString().substring(4, 15)

    this.setState({
      date: date,
      historyDate: historyDate
    })

    let oneGreatThings = this.state.allGreatThings.filter(element => (element.date === date))

    this.setState({ oneGreatThings })

  }


  render() {
    return (
      <div>
        <div className="history-content">
          Great things you had on
        </div>
        <DatePicker
          defaultValue={new Date(Date.now())}
          selected={this.state.historyDate}
          onChange={this.handleHistoryDate}
          maxDate={new Date()}
          highlightDates={this.state.allRecordDates}
          name="selectHistoryDate"
          dateFormat="MM/dd/yyyy"
          className="datepicker"
        />
        <div>
          <div className="history-item">
            {this.state.oneGreatThings ?
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
