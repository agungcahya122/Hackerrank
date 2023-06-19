function DataMedian(arr) {
  let result = [];
  const newArr = arr.sort((a, b) => a - b);
  const lengthArr = newArr.length;

  if (lengthArr % 2 !== 0) {
    let ganjil = lengthArr / 2 - 0.5;
    result.push(newArr[ganjil]);
  } else if (lengthArr % 2 === 0) {
    let genap = lengthArr / 2;
    result.push(newArr[genap - 1], newArr[genap]);
  }

  console.log(result);
}

DataMedian([0, 1, 2, 3, 4, 5, 6]);
DataMedian([0, 1, 2, 3, 4, 5, 6, 7]);
