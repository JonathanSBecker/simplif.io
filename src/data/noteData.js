const noteData = {
  notes: ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C"],
  chordTypes: {
    minor: [0, 3, 7],
    major: [0, 4, 7],
    diminished: [0, 3, 6],
    maj7: [0, 4, 7, 11],
    min7: [0, 3, 7, 10],
    dom7: [0, 4, 7, 10],
    sus2: [0, 2, 7],
    sus4: [0, 5, 7],
    aug: [0, 4, 8]
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

export default noteData;