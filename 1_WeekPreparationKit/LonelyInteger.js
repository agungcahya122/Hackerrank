function lonelyinteger(a) {
  // Write your code here

  let newArr = a.filter(
    (num, index, array) => array.indexOf(num) === array.lastIndexOf(num)
  );
  return JSON.parse(newArr);
}

console.log(lonelyinteger([1, 1, 2]));
