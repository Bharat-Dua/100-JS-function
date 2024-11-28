//* 30.diffArrays

//? Write a function named diffArrays that receives 2 Arrays of numbers as parameters.

// The function should return a new Array, that contains all numbers from the first array that are not in the second one, and all numbers from the second array that are not in the first one.

/* 
Example 1

Input

numbers1=[
0: 11
1: 96
2: 103
3: -5
4: 0
5: 12
6: 1
]

numbers2=
[
0: 0
1: 1
2: 2
3: 3
4: 4
5: 5
]
Output
[

0: 11
1: 96
2: 103
3: -5
4: 12
5: 2
6: 3
7: 4
8: 5
]
*/

//* Approach 1
function diffArrays(numbers1, numbers2) {
  let filterArr1 = numbers1.filter((num) => !numbers2.includes(num));
  let filterArr2 = numbers2.filter((num) => !numbers1.includes(num));
  return [...filterArr1, ...filterArr2];
}

export { diffArrays };

//* Approach 2

function diffArrays(number1, number2) {
  let diffArray = [];
  number1.forEach((element) => {
    if (!number2.includes(element)) {
      diffArray.push(element);
    }
  });
  number2.forEach((element) => {
    if (!number1.includes(element)) {
      diffArray.push(element);
    }
  });
  return diffArray;
}
export { diffArrays };
