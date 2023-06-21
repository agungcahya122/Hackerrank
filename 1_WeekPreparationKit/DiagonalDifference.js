function diagonalDifference(arr) {
  // Write your code here
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    primaryDiagonal += arr[i][i];
    secondaryDiagonal += arr[i][arr.length - (i + 1)];
  }
  console.log(Math.abs(primaryDiagonal - secondaryDiagonal));
}

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
