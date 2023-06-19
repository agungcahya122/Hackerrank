function miniMaxSum(arr) {
  // Write your code here

  let result = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        sum += arr[j];
      } else {
        continue;
      }
    }
    result.push(sum);
    sum = 0;
  }
  console.log(Math.min(...result), Math.max(...result));
}

miniMaxSum([1, 2, 3, 4, 5]);
