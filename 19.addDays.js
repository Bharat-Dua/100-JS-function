//* 19.addDays

//?Write a function named addDays that receives 2 parameters:

// a date - initialDate
// a number - daysCount
// and returns a new date created by adding daysCount days to initialDate.

/*
Example 1

Input
initialDate=Date Mon May 01 2023 15:30:00 GMT+0530 (India Standard Time)

daysCount=11

Output
Date Fri May 12 2023 15:30:00 GMT+0530 (India Standard Time)

Example 2
Input

initialDate=Date Sat Feb 09 2013 18:07:00 GMT+0530 (India Standard Time)

daysCount=3

Output
Date Tue Feb 12 2013 18:07:00 GMT+0530 (India Standard Time)

*/

//* Approach 1: Using the Date object's setFullYear(), setMonth(), and setDate() methods
function addDays(initialDate, daysCount) {
  let date = new Date(initialDate);
  date.setDate(date.getDate() + daysCount);
  return date;
}

//* Approach 2: Using the Date object's getTime() method and the Date constructor
function addDays(initialDate, daysCount) {
  let millisecondsPerDay = 1000 * 60 * 60 * 24;
  let newDate = new Date(
    initialDate.getTime() + daysCount * millisecondsPerDay
  );

  return newDate;
}

export { addDays };
