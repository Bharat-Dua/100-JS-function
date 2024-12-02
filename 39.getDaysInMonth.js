//* 39.getDaysInMonth

//? Write a function named getDaysInMonth that receives a Date as a parameter, and returns the number of days in the month of the given date.

/*
Example 1

Input

date=Date Thu Feb 15 2024 15:30:00 GMT+0530 (India Standard Time)
Output
29

Example 2
Input

date=Date Mon Aug 08 2011 11:30:00 GMT+0530 (India Standard Time)
Output
31

*/

function getDaysInMonth(date) {
  let month = date.getMonth();
  let year = date.getFullYear();
  return new Date(year, month + 1, 0).getDate();
}

export { getDaysInMonth };
