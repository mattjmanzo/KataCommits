// Figure Out The Notes 

// Solution 1 

const whatNote = (string, fret) => {
    let array = ['C', 'C#', 'D','D#','E','F','F#', 'G', 'G#', 'A','A#', 'B']
    return array[(fret + array.indexOf(string.toUpperCase())) % 12]  
  };

// Solution 2 

function whatNote (str, fret) {
  let dic = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  return dic[(dic.indexOf(str.toUpperCase()) + fret) % 12]
};