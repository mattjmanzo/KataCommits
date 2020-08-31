// Simple Direction Reversal

// In this Kata, you will be given directions and your task will be to find your way back.

// Solution 1

function solve(arr) {
  const map = { Begin: "Begin", Left: "Right", Right: "Left" },
    parts = arr.map((step) => step.split(" on ")),
    steps = [];

  for (let i = 0; i < arr.length; i++)
    steps.unshift(map[parts[(i + 1) % arr.length][0]] + " on " + parts[i][1]);

  return steps;
}
