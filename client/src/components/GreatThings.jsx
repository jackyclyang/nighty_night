import React, { Component } from 'react'
import { getGreatThings, postGreatThings } from '../services/greatThings'
import CreateGreatThings from './CreateGreatThings'
import GreatThingsItem from './GreatThingsItem'
import './GreatThings.css'


export default class GreatThings extends Component {
  state = {
    greatThings: [],
    date: '',
    showHistory: false
  }


  componentDidMount = async () => {
    this.fetchGreatThings()
  }


  fetchGreatThings = async () => {
    let { currentUser } = this.props
    let id = currentUser.id
    let greatThings = await getGreatThings(id)

    this.setState({ greatThings })
  }


  handleCreateGreatThings = async (greatThingsData) => {
    let { currentUser } = this.props
    let id = currentUser.id

    const newGreatThings = await postGreatThings(id, greatThingsData)
    this.setState(prevState => ({
      greatThings: [...prevState.greatThings, newGreatThings]
    }))

    this.setState({
      date: newGreatThings.date
    })

    const { showHistory } = this.state
    this.setState({ showHistory: !showHistory })

  }

  toggleHistory = (e) => {
    e.preventDefault()
    const { showHistory } = this.state
    this.setState({ showHistory: !showHistory })

  }


  render() {
    console.log(this.state.showHistory)
    return (
      <div className="great-things">
        <div className="createGreatThings">
          <CreateGreatThings
            handleCreateGreatThings={this.handleCreateGreatThings}
          />
        </div>
        <div className="get-history">
          {this.state.showHistory ?
            <div>
              <button className="history-button" onClick={this.toggleHistory}>Hide past joys</button>
              <GreatThingsItem
                allGreatThings={this.state.greatThings}
                date={this.state.date} />
            </div> :
            <button className="history-button" onClick={this.toggleHistory}>See past joys</button>
          }

        </div>
      </div >
    )
  }
}
