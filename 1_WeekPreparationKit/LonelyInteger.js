function lonelyinteger(a) {
  // Write your code here

  //  ______ PUT UNIQUE NUMBER ______
  let newArr = a.filter(
    (num, index, array) => array.indexOf(num) === array.lastIndexOf(num)
  );

  return JSON.parse(newArr);

  //  ______ PUT DOUBLE NUMBER ______

  // let newArr = a.filter(
  //   (num, index, array) => array.indexOf(num) !== array.lastIndexOf(num)
  // );

  // let result = [...new Set(newArr)];

  // return result;
}

console.log(lonelyinteger([1, 1, 3]));
