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
      chords: {
        chord1: "",
        chord2: "",
        chord3: "",
        chord4: ""
      },
      chordKeys: {
        key1: "",
        key2: "",
        key3: "",
        key4: ""
      },
      notes: [],
      sequence: [],
      beats: 4,
      bars: 4,
      lock: {}
    }

    this.setHome = this.setHome.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setLock = this.setLock.bind(this);
    this.setChords = this.setChords.bind(this);
    this.setChordKeys = this.setChordKeys.bind(this);
  }

  // Changes pageview
  handlePageChange (event) {
    event.preventDefault();

    this.setState({
      page: this.state.selected
    });
  }

  // plays sequence of notes
  playSequence(event, index=0) {
    if(event) event.preventDefault();
    if(!this.state.sequence[index]) {
      this.calculateNotes();
      setTimeout(() => {
        this.playSequence(null, index);
      }, 100)
    } else {
      this.state.sequence[index].play();
      if(index < this.state.sequence.length - 1) { 
        setTimeout(() => {this.playSequence(null, index+1)}, 500);
      }
    }
  }

  // handles most changes
  handleChange(event) {
    const property = event.target.name;
    const newValue = event.target.value;
    const newState = {};
    newState[property] = newValue;

    this.setState(newState);
  }

  // Sets pageview to home
  setHome(event) {
    event.preventDefault();

    this.setState({
      page: "default"
    });
  }

  // creates the note sequence
  calculateNotes(event) {
    if (event) event.preventDefault();
    const numNotes = this.state.beats * this.state.bars;
    const notes = noteData.notes;
    const newNoteSequence = [];
    const newSequence = [];
    
    if (this.state.page === "Mode") {
      if(!this.state.key || !this.state.mode) {
        alert("Please fill out all fields!");
        return;
      }
      const mode = noteData.modes[this.state.mode];
      const rootIndex = notes.indexOf(this.state.key);
      
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
    } else if (this.state.page === "Chords") {
      const chords = this.state.chords;
      const chordKeys = this.state.chordKeys;
      
      for (let i = 0; i < 4; i++) {
        if (!chords[`chord${i+1}`] || !chordKeys[`key${i+1}`]) {
          alert("Please fill out all fields!");
          return;
        }
        
        const chordTypes = noteData.chordTypes;

        for (let j = 0; j < this.state.beats; j++){
          if(this.state.lock[(i*4)+j]) {
            newNoteSequence.push(this.state.notes[i]);
          } else {
            const index = notes.indexOf(chordKeys[`key${i+1}`]);
            const newNoteIndex = index + chordTypes[chords[`chord${i+1}`]][Math.floor(Math.random()*chordTypes[chords[`chord${i+1}`]].length)]
            console.log(newNoteIndex);
            newNoteSequence.push(notes[newNoteIndex]);
          }
        }
      }

      console.log(newNoteSequence);

      for(let note of newNoteSequence) {
        const audio = new Audio(`${note}.wav`);
        newSequence.push(audio);
      }

      console.log(newSequence);
      this.setState({
        notes: newNoteSequence,
        sequence: newSequence
      });
    }
  }

  // locks notes in place
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

    this.setState({
      lock: newLock
    });
  }

  // clears all notes
  clearAll (event) {
    event.preventDefault();

    const newState = {
      chords: {
        key1: "",
        chord1: "",
        key2: "",
        chord2: "",
        key3: "",
        chord3: "",
        key4: "",
        chord4: ""
      },
      notes: [],
      sequence: [],
      beats: 4,
      bars: 4,
      lock: {}
    };

    this.setState(newState);
  }

  // unlocks all notes
  unlockAll (event) {
    event.preventDefault();

    const newLock = {};

    for(let i = 0; i < this.state.notes.length; i++) {
      document.getElementById(i).innerHTML = "Lock";
    }

    this.setState(newLock);
  }

  // sets chords
  setChords (event) {
    event.preventDefault();

    const newChords = this.state.chords;
    newChords[event.target.id] = event.target.value;
    this.setState({
      chords: newChords
    });
  }

  // sets the keys for each chord
  setChordKeys (event) {
    event.preventDefault();

    const newKeys = this.state.chordKeys;
    newKeys[event.target.id] = event.target.value;
    this.setState({
      chordKeys: newKeys
    });
  }

  // render
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
          <Chords setHome={this.setHome} handleChange={this.setChords} handleKeyChange={this.setChordKeys}/>
          <button onClick={(event) => {this.calculateNotes(event)}}>Sequence</button><br />
          <button onClick={(event) => {this.playSequence(event)}}>Play Sequence</button>
          <button onClick={(event) => {this.unlockAll(event)}}>Unlock All</button>
          <button onClick={(event) => {this.clearAll(event)}}>Clear All</button>
          <Sequencer sequence={this.state.sequence} notes={this.state.notes} lock={this.setLock}/>
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