import React from 'react';

const SequenceEntry = (props) => {
  return (
    <div>
      {props.note}&nbsp;
      <button id={props.id}>Lock</button>
    </div>
  )
}

export default SequenceEntry;