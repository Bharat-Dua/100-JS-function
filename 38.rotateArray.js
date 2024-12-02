//* 38.rotateArray

//? Write a function named rotateArray that receives 2 parameters:

// an array of items - items
// a number - n
// The function should return a new array with the items rotated towards the right, by n positions.

// NOTE: a rotation towards the right means that all elements of the array are moved to the next index, except for the last element which is moved to index=0.

/*
Example 1

Input

items=
[
0: "Bob"
1: 71
2: {…}
name: "JavaScript"
type: "programming_language"
]
n=2
Output
[
0: 71
1: { name: "JavaScript", type: "programming_language" }
2: "Bob"

]
Example 2

Input

items=
[
0: "Wikipedia"
1: "Mozilla Developer Network"
2: "Free Code Camp"
3: "Stack Overflow"
]
n=4

Output

[
0: "Wikipedia"
1: "Mozilla Developer Network"
2: "Free Code Camp"
3: "Stack Overflow"
]

*/

function rotateArray(items, n) {
  const actualRotations = n % items.length;
  const result = [];

  for (let i = 0; i < items.length - actualRotations; i++) {
    result[i + actualRotations] = items[i];
  }

  for (let i = items.length - actualRotations; i < items.length; i++) {
    result[(i + actualRotations) % items.length] = items[i];
  }

  return result;
}

export { rotateArray };
