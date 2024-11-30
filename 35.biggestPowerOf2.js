//* 35.biggestPowerOf2

//? Write a new function named biggestPowerOf2 that receives a number as a parameter, and returns the biggest positive power of 2 that is less than or equal to this number.

// If no positive power of 2 is less than or equal to the number, the function should return -1.

/*
Example 1

Input

number=12

Output
3

Example 2

Input

number=128

Output
7
Example 3

Input

number=0.25

Output
-1
Example 4

Input

number=-5

Output
-1

*/

//* Approach 1
function biggestPowerOf2(number) {
  if (number <= 0) return -1;
  let currentValue = 1;
  let power = 0;
  while (currentValue * 2 <= number) {
    currentValue *= 2;
    power++;
  }
  return power;
}

export { biggestPowerOf2 };

//* Approach 2
function biggestPowerOf2(number) {
  if (number < 1) {
    return -1;
  }

  let power = 0;
  while (number >= 2) {
    number /= 2;
    power++;
  }

  return power;
}

export { biggestPowerOf2 };
