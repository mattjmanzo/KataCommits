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

// Solution 2

function solve(arr) {
  const reversed = arr.reverse();

  return reversed.map((cur, ind, arr) => {
    if (ind === 0) {
      return cur.replace(/(Left|Right)/, "Begin");
    }
    if (arr[ind - 1].includes("Left")) {
      return cur.replace(/(Left|Right|Begin)/, "Right");
    }
    if (arr[ind - 1].includes("Right")) {
      return cur.replace(/(Left|Right|Begin)/, "Left");
    }
  });
}
