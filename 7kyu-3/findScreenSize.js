// Find Screen Size 

// Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

// Solution 1 

function findScreenHeight(width, ratio) {
    const [widthRatio, heightRatio] = ratio.split(':')
    const height = width / widthRatio * heightRatio
    return width + 'x' + height
  }

  // Solution 2

  findScreenHeight=(a,b,[c,d]=b.split`:`)=>`${a}x${a*d/c}`