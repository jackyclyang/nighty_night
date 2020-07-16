import React, { Component } from 'react'
import { getGreatThings, postGreatThings } from '../services/greatThings'
import CreateGreatThings from './CreateGreatThings'

export default class GreatThings extends Component {
  state = {
    greatThings: []
  }

  componentDidMount = async () => {
    this.fetchGreatThings()
  }


  fetchGreatThings = async () => {
    let { currentUser } = this.props

    let id = currentUser.id
    let greatThings = await getGreatThings(id)

    this.setState({ greatThings })
    console.log(this.state.greatThings)

  }

  handleCreateGreatThings = async (greatThingsData) => {
    let { currentUser } = this.props
    let id = currentUser.id
    console.log(greatThingsData)
    console.log(id)
    const newGreatThings = await postGreatThings(id, greatThingsData)
    this.setState(prevState => ({
      greatThings: [...prevState.greatThings, newGreatThings]
    }))
  }


  render() {

    return (
      <div>
        <CreateGreatThings
          handleCreateGreatThings={this.handleCreateGreatThings} />
        {this.state.greatThings ?
          this.state.greatThings.map((thing, index) => {
            return <div key={index}>{thing.date}: {thing.content} </div>
          })
          : ''}
      </div>
    )
  }
}
