import React from 'react';
import Mode from './Mode.js';
import Chords from './Chords.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: "default",
      selected: "",
      key: "",
      mode: "",
      chords: []
    }
  }

  handlePageChange (event) {
    event.preventDefault();

    this.setState({
      page: this.state.selected
    });
  }

  handleChange(event) {
    const property = event.target.name;
    const newValue = event.target.value;
    const newState = {};
    newState[property] = newValue;

    this.setState(newState);
  }

  setHome(event) {
    event.preventDefault();

    this.setState({
      page: "default"
    });
  }

  render () {
    if(this.state.page === "Mode") {
      return (
        <Mode setHome={this.setHome.bind(this)} handleChange={this.handleChange.bind(this)}/>
      )
    } else if (this.state.page === "Chords") {
      return (
        <Chords setHome={this.setHome.bind(this)} handleChange={this.handleChange.bind(this)}/>
      )
    } else {
      return (
        <div>
          How to sequence:&nbsp; 
          <select name="selected" onChange={(event) => this.handleChange(event)} defaultValue="">
            <option disabled="disabled" value="">Choose one</option>
            <option value="Mode">Mode</option>
            <option value="Chords">Chords</option>
          </select>
          &nbsp;
          <button onClick={(event) => this.handlePageChange(event)}>Go</button>
        </div>
      )
    }
  }
}

export default App;