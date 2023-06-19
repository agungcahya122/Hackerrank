function plusMinus(arr) {
  // Write your code here

  let resultPlus = 0;
  let resultMinus = 0;
  let resultZero = 0;

  const Plus = arr.filter((arr) => arr > 0);

  const Minus = arr.filter((arr) => arr < 0);

  const Zero = arr.filter((arr) => arr === 0);
  if (Zero.length === 0) {
    Zero.push(0);
    resultZero = (Zero / arr.length).toFixed(6);
  } else {
    resultZero = (Zero.length / arr.length).toFixed(6);
  }

  resultPlus = (Plus.length / arr.length).toFixed(6);
  resultMinus = (Minus.length / arr.length).toFixed(6);

  console.log(resultPlus);
  console.log(resultMinus);
  console.log(resultZero);
}

plusMinus([-4, 3, -9, 4, 1]);
