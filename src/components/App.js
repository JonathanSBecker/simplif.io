import React from 'react';
import Mode from './Mode.js';
import Chords from './Chords.js';
import Sequencer from './Sequencer.js';
import noteData from '../data/noteData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "default",
      selected: "",
      key: "",
      mode: "",
      chords: [],
      notes: [],
      sequence: [],
      beats: 4,
      bars: 4,
      hold: []
    }
  }

  handlePageChange (event) {
    event.preventDefault();

    this.setState({
      page: this.state.selected
    });
  }

  playSequence(event, index=0) {
    if(event) event.preventDefault();

    this.state.sequence[index].play();
    if(index < this.state.sequence.length - 1) { 
      setTimeout(() => {this.playSequence(null, index+1)}, 500);
    }
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

  calculateNotes(event) {
    event.preventDefault();

    if (this.state.page === "Mode") {
      const numNotes = this.state.beats * this.state.bars;
      const notes = noteData.notes;
      const rootIndex = notes.indexOf(this.state.key);
      const mode = noteData.modes[this.state.mode];
      const newNoteSequence = [];
      const newSequence = [];

      for(let i = 0; i < numNotes; i++) {
        newNoteSequence.push(notes[rootIndex + mode[Math.floor(Math.random()*mode.length)]]);
      }

      for(let note of newNoteSequence) {
        const audio = new Audio(`${note}.wav`);
        newSequence.push(audio);
      }

      this.setState({
        notes: newNoteSequence,
        sequence: newSequence
      });
    }
  }

  render () {
    if(this.state.page === "Mode") {
      return (
        <div>
          <Mode setHome={this.setHome.bind(this)} handleChange={this.handleChange.bind(this)}/>
          <button onClick={(event) => {this.calculateNotes(event)}}>Sequence</button><br />
          <button onClick={(event) => {this.playSequence(event)}}>Play Sequence</button>
          <Sequencer sequence={this.state.sequence} notes={this.state.notes}/>
        </div>
      )
    } else if (this.state.page === "Chords") {
      return (
        <div>
          <Chords setHome={this.setHome.bind(this)} handleChange={this.handleChange.bind(this)}/>
          <button onClick={(event) => {this.calculateNotes(event)}}>Sequence</button>
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