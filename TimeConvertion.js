function timeConversion(s) {
  // Write your code here
  const acc = s.length;
  let result = "";
  const zone = s.substring(acc - 2, acc);
  let hour = s.slice(0, 2);
  const minute = s.slice(2, acc - 2);
  if (zone === "PM") {
    if (hour === "12") {
      result = hour + minute;
    } else {
      const convertHour = parseInt(hour);
      const newHour = convertHour + 12;
      result = newHour.toString() + minute;
    }
  } else if (zone === "AM") {
    if (hour === "12") {
      console.log("tes");
      hour = "00";
      result = hour + minute;
    } else {
      result = hour + minute;
    }
  }
  console.log(result);
  // console.log(typeof result);
}

timeConversion("12:45:54PM");
// timeConversion("12:00:00AM");
