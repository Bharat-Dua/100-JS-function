//* 22.isSorted

//? Write a function named isSorted that receives an Array of numbers as parameter and returns true if the list is sorted (either ascending or descending).

/* 
Example 1
Input
numbers

=
Array(3)
0: 19
1: 10
2: 23
<prototype>: (0) [ ]
Output
false
Example 2
Input
numbers

=
Array(3)
0: 91
1: 31
2: -5
<prototype>: (0) [ ]
Output
true

*/

function isSorted(numbers) {
  let isAscending = true;
  let isDescending = true;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i + 1]) {
      isAscending = false;
    }
    if (numbers[i] < numbers[i + 1]) {
      isDescending = false;
    }
  }
  return isAscending || isDescending;
}

export { isSorted };
