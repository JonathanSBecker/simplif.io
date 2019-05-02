import React from 'react';

const SequenceEntry = (props) => {
  return (
    <div>
      <button 
        id={props.id} 
        onClick={(event) => {props.lock(event)}}
      >
        Lock
      </button>&nbsp;
      {props.note}
    </div>
  )
}

export default SequenceEntry;