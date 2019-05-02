import React from 'react';

const Mode = (props) => {
  return(
    <div>
      <button onClick={(event) => {props.setHome(event)}}>Home</button>
      <div>Key:&nbsp;
        <select defaultValue="" name="key" onChange={(event) => {props.handleChange(event)}}>
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
      <div>Mode:&nbsp;
        <select defaultValue="" name="mode" onChange={(event) => {props.handleChange(event)}}>
          <option disable="disable" value="">Select Mode</option>
          <option value="ionian">Ionian</option>
          <option value="dorian">Dorian</option>
          <option value="phrygian">Phrygian</option>
          <option value="lydian">Lydian</option>
          <option value="mixolydian">Mixolydian</option>
          <option value="aeolian">Aeolian</option>
          <option value="locrian">Locrian</option>
        </select>
      </div>
    </div>
  );
}

export default Mode;