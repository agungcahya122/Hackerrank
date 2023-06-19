function miniMaxSum(arr) {
  // Write your code here

  let sum = 0;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // console.log("i :", i);
      // console.log("j :", j);
      if (j === i) {
        continue;
      } else {
        sum += arr[j];
      }
    }
    result.push(sum);
    sum = 0;
  }

  console.log(Math.min(...result), Math.max(...result));
  // console.log(Math.min(...result));
}

miniMaxSum([1, 2, 3, 4, 5]);
