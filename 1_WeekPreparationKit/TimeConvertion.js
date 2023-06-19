function timeConversion(s) {
  // Write your code here
  let result = "";
  const timeLength = s.length;
  let zone = s.slice(timeLength - 2, timeLength);
  let minute = s.slice(timeLength - 7, timeLength - 2);
  let hour = s.slice(0, timeLength - 8);
  if (zone === "PM") {
    if (hour === "12") {
      result = hour + ":" + minute;
    } else {
      let newHour = parseInt(hour);
      newHour += 12;
      result = newHour.toString() + ":" + minute;
    }
  } else if (zone === "AM") {
    if (hour === "12") {
      hour = "00";
      result = hour + ":" + minute;
    } else {
      result = hour + ":" + minute;
    }
  }
  console.log(result);
}

timeConversion("12:40:45PM");
timeConversion("12:40:00AM");
