import React, { Component } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import { getGreatThings, postGreatThings } from '../services/greatThings'
import CreateGreatThings from './CreateGreatThings'
import GreatThingsItem from './GreatThingsItem'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class GreatThings extends Component {
  state = {
    greatThings: [],
    date: ''
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



  }


  render() {

    return (
      <div>
        <div className="createGreatThings">
          <Route exact path="/great">
            <CreateGreatThings
              handleCreateGreatThings={this.handleCreateGreatThings}
            />
          </Route>
        </div>
        <div className="getHistory">
          <Route path="/great/history">
            <GreatThingsItem
              allGreatThings={this.state.greatThings}
              date={this.state.date}
            />
          </Route>
        </div>

      </div>
    )
  }
}
