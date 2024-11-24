//* 5.getMonthsNeededToWait

//? Write a function name getMonthsNeededToWait that receives 2 numbers as parameters, representing the index of two months.

//?The function should return the number of months we have to wait, to get from the first month to the second one.

/* 
Example 1

Input
index1=
1

index2=
3

Output
2

Explanation
The month with index 1 is February and the month with index 3 is April. So, the number of months needed to wait is 2.

Example 2
Input

index1=
11

index2=
0

Output
1
Explanation
The month with index 11 is December and the month with index 0 is January. So, the number of months needed to wait is 1.

*/

function getMonthsNeededToWait(index1, index2) {
  //? We need to get the total number of months in a year, which is 12
  let totalMonths = 12;
  //? We need to calculate the absolute difference between the two indices, to get the number of months we have to wait. We use the absolute value to avoid negative numbers.
  let monthsNeededToWait = Math.abs(index2 - index1);
  //? If the number of months needed to wait is greater than the total number of months in a year, we subtract the total number of months from it, to get the correct number of months needed to wait.
  if (monthsNeededToWait > totalMonths) {
    monthsNeededToWait = totalMonths - monthsNeededToWait;
  }
  return monthsNeededToWait;
}
//? We need to call the function with the given indices, to get the number of months needed to wait.
console.log(getMonthsNeededToWait(1, 3)); // Output: 2
console.log(getMonthsNeededToWait(11, 0)); // Output: 1

//* Approach 2
function getMonthsNeededToWait(index1, index2) {
  if (index2 >= index1) return index2 - index1;
  let totalMonthsInYear = 12 - index1;
  return totalMonthsInYear + index2;
}

export { getMonthsNeededToWait };
