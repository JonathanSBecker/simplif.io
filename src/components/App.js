import React from 'react';
import Mode from './Mode.js';
import Chords from './Chords.js';
import Sequencer from './Sequencer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "default",
      selected: "",
      key: "",
      mode: "",
      chords: [],
      sequence: []
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
        <div>
          <Mode setHome={this.setHome.bind(this)} handleChange={this.handleChange.bind(this)}/>
          <button>Sequence</button>
          <Sequencer sequence={this.state.sequence}/>
        </div>
      )
    } else if (this.state.page === "Chords") {
      return (
        <div>
          <Chords setHome={this.setHome.bind(this)} handleChange={this.handleChange.bind(this)}/>
          <button>Sequence</button>
          <Sequencer sequence={this.state.sequence}/>
        </div>
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