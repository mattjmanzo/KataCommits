// Grid Index

// Solution 1

const gridIndex = (grid, indices) => {
  const flatList = grid.flat(2);
  return indices.map((indice) => flatList[indice - 1]).join("");
};

// Solution 2

const gridIndex = (grid, indices) =>
  indices.map((c) => grid.flat(2)[c - 1]).join("");
