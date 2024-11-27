//* 24.isSameDay

//? Write a function named isSameDay that receives 2 Dates as parameters, and checks if they represent the same day, month and year.

/* 
Example 1

Input

date1=Date Sat Nov 10 2007 15:30:00 GMT+0530 (India Standard Time)
date2=Date Wed Dec 10 2008 16:30:00 GMT+0530 (India Standard Time)

Output
false

*/

function isSameDay(date1, date2) {
  let d1 = date1.getDay();
  let d2 = date2.getDay();
  console.log(d1);
  console.log(d2);
  return d1 === d2;
}

export { isSameDay };
