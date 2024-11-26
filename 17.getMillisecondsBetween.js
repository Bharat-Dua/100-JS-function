//* 17.getMillisecondsBetween

//? Write a function named getMillisecondsBetween that receives 2 dates as parameters and returns the number of milliseconds between them.

function getMillisecondsBetween(date1, date2) {
  let milliseconds1 = date1.getTime();
  let milliseconds2 = date2.getTime();
  let millisecondsBetween = Math.abs(milliseconds1 - milliseconds2);
  return millisecondsBetween;
}
