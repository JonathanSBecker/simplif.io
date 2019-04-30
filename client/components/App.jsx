import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    /*
    1:0
    2m:1
    2:2
    3m:3
    3:4
    4:5
    tri:6
    5:7
    6m:8
    6:9
    7m:10
    7:11
    */
    this.state = {
      notes: ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C"],
      chordTypes: {
        minor: [0,3,7],
        major: [0,4,7],
      },
      modes: {
        ionian: [0,2,4,5,7,9,11],
        dorian: [0,2,3,5,7,9,10],
        phrygian: [0,1,3,5,7,8,10],
        lydian: [0,2,4,6,7,9,11],
        mixolydian: [0,2,4,5,7,9,10],
        aeolian: [0,2,3,5,7,8,10],
        locrian: [0,1,3,5,6,8,10]
      }
    }
  }

  render () {
    return (
      <div>Rendering React</div>
    )
  }
}

export default App;