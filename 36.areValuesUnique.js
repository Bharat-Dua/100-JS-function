//* 36.areValuesUnique

//? Write a function named areValuesUnique that receives an Array of numbers as parameter.

// The function should return a boolean verifying if the array contains only unique numbers.

/*

Example 1

Input

numbers=
[
0: 4
1: 6
2: -8
3: 14
]
Output
true

Example 2

Input

numbers=
[
0: 0
1: 1
2: 2
3: 3
4: 4
5: 3
]
Output
false

*/

//* Approach 1

// Brute force approach

function areValuesUnique(numbers) {
  if (numbers.length <= 1) return true;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        return false;
      }
    }
  }
  return true;
}

export { areValuesUnique };

//* Approach 2

// using set

function areValuesUnique(numbers) {
  return new Set(numbers).size === numbers.length;
}

//* Approach 3

// using hash table

function areValuesUnique(numbers) {
  let hashTable = {};
  for (const element of numbers) {
    if (hashTable[element]) {
      return false;
    }
    hashTable[element] = true;
  }
  return true;
}
console.log(areValuesUnique([1, 2, 3, 4]));
console.log(areValuesUnique([1, 2, 3, 2]));
console.log(areValuesUnique([]));
console.log(areValuesUnique([7]));
