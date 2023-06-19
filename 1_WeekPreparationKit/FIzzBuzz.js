function fizzBuzz(n) {
  // Write your code here

  let result = "";

  for (let i = 1; i <= n; i++) {
    // console.log(i);
    if (i % 3 === 0 && i % 5 !== 0) {
      result += "Fizz" + "\n";
    } else if (i % 5 === 0 && i % 3 !== 0) {
      result += "Buzz" + "\n";
    } else if (i % 3 === 0 && n % 5 === 0) {
      result += "FizzBuzz" + "\n";
    } else {
      result += i + "\n";
    }
  }
  console.log(result);
}

fizzBuzz(15);
