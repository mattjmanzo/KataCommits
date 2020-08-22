// Area or Perimeter

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square. If it is a square, return its area. If it is a rectangle, return its perimeter.

// Solution 1

const areaOrPerimeter = function (l, w) {
  return l == w ? l * w : 2 * (l + w);
};
