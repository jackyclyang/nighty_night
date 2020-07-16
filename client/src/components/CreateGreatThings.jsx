import React, { Component } from 'react'

export default class CreateGreatThings extends Component {

  state = {
    content: '',
    date: ''
  }

  handleContentChange = (e) => {
    const { value } = e.target;
    this.setState({
      content: value
    })
  }


  render() {
    const { handleCreateGreatThings, history } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCreateGreatThings(this.state);
        // history.push('/great');
      }}>
        <label>
          What great things happend today? <br />
          <textarea
            name="content"
            rows="10"
            value={this.state.content}
            onChange={this.handleContentChange}
          />
        </label>
        <button>Submit</button>
      </form >
    )
  }

}
