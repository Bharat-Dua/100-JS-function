//* 18.getMonthOfTheYear

//? Write a function named getMonthOfTheYear that receives a Date as a parameter and returns the month of the year as a human-readable string, in English.

/*
Example 1

Input

date=Date Wed Dec 25 2024 21:45:00 GMT+0530 (India Standard Time)

Output
"December"

Example 2

Input

date=Date Sun Feb 04 2024 16:11:11 GMT+0530 (India Standard Time)

Output
"February"

*/
function getMonthOfTheYear(date) {
  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let a = date.getMonth();

  console.log(months[a]);
  return months[a];
}

export { getMonthOfTheYear };
