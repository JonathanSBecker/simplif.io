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
      lock: {}
    }
    this.setHome = this.setHome.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setLock = this.setLock.bind(this);
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
    const numNotes = this.state.beats * this.state.bars;
    const notes = noteData.notes;
    const rootIndex = notes.indexOf(this.state.key);
    const newNoteSequence = [];
    const newSequence = [];

    if (this.state.page === "Mode") {
      const mode = noteData.modes[this.state.mode];

      for(let i = 0; i < numNotes; i++) {
        if(this.state.lock[i]) {
          newNoteSequence.push(this.state.notes[i]);
        } else {
          newNoteSequence.push(notes[rootIndex + mode[Math.floor(Math.random()*mode.length)]]);
        }
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

  setLock (event) {
    event.preventDefault();
    const newLock = this.state.lock;

    if(typeof newLock[event.target.id] === "boolean") {
      newLock[event.target.id] = !newLock[event.target.id];
      if(newLock[event.target.id]) {
        document.getElementById(event.target.id).innerHTML = "Unlock";
      } else {
        document.getElementById(event.target.id).innerHTML = "Lock";
      }
    } else {
      newLock[event.target.id] = true;
      document.getElementById(event.target.id).innerHTML = "Unlock";
    }

    console.log(newLock);
    this.setState({
      lock: newLock
    });
  }

  clearAll (event) {
    event.preventDefault();

    const newState = {

      notes: [],
      sequence: [],
      beats: 4,
      bars: 4,
      lock: {}
    };

    this.setState(newState);
  }

  unlockAll (event) {
    event.preventDefault();

    const newLock = {};

    for(let i = 0; i < this.state.notes.length; i++) {
      document.getElementById(i).innerHTML = "Lock";
    }

    this.setState(newLock);
  }

  setChords (event) {
    
  }

  render () {
    if(this.state.page === "Mode") {
      return (
        <div>
          <Mode setHome={this.setHome} handleChange={this.handleChange}/>
          <button onClick={(event) => {this.calculateNotes(event)}}>Sequence</button><br />
          <button onClick={(event) => {this.playSequence(event)}}>Play Sequence</button>
          <button onClick={(event) => {this.unlockAll(event)}}>Unlock All</button>
          <button onClick={(event) => {this.clearAll(event)}}>Clear All</button>
          <Sequencer sequence={this.state.sequence} notes={this.state.notes} lock={this.setLock}/>
        </div>
      )
    } else if (this.state.page === "Chords") {
      return (
        <div>
          <Chords setHome={this.setHome} handleChange={this.handleChange}/>
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