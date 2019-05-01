import React from 'react';

const Chords = (props) => {
  return(
    <div>
      <button onClick={(event) => {props.setHome(event)}}>Home</button>
      <div>Key:&nbsp;
        <select defaultValue="">
          <option disabled="disabled" value="">Select Key</option>
          <option value="C">C</option>
          <option value="Db">C#</option>
          <option value="D">D</option>
          <option value="Eb">D#</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="Gb">F#</option>
          <option value="G">G</option>
          <option value="Ab">G#</option>
          <option value="A">A</option>
          <option value="Bb">A#</option>
          <option value="B">B</option>
        </select>
      </div>
      <div>Chords:&nbsp;
        <select defaultValue="">
          <option disable="disable" value="">Select Mode</option>
          <option value="minor">Minor</option>
          <option value="major">Major</option>
          <option value="diminished">Diminished</option>
          <option value="maj7">Major 7</option>
          <option value="min7">Minor 7</option>
          <option value="dom7">Dominant 7</option>
          <option value="sus2">Suspended 2</option>
          <option value="sus4">Suspended 4</option>
          <option value="aug">Augmented</option>
        </select>
      </div>
    </div>
  );
}

export default Chords;