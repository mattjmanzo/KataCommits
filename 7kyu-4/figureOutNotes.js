// Figure Out The Notes 

// Solution 1 

const whatNote = (string, fret) => {
    let array = ['C', 'C#', 'D','D#','E','F','F#', 'G', 'G#', 'A','A#', 'B']
    return array[(fret + array.indexOf(string.toUpperCase())) % 12]  
  };