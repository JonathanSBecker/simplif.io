import React from 'react';
import SequenceEntry from './SequenceEntry.js';

const Sequence = (props) => {
  return (
    <div>
      {props.sequence.map((note, key) => {
        return <SequenceEntry 
                  note={props.notes[key]} 
                  tune={note} 
                  id={key} 
                  key={key}
                  lock={props.lock}
                />
      })}
    </div>
  )
}

export default Sequence;