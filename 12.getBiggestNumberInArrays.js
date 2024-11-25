//* 12.getBiggestNumberInArrays

//? Write a function named getBiggestNumberInArrays that receives 2 parameters:

// an array of numbers named numbers1
// another array of numbers named numbers2
// and returns the maximum number between those 2 arrays.

//* Approach 1

function getBiggestNumberInArrays(numbers1, numbers2) {
  const maxNumbers1 = Math.max(...numbers1);
  const maxNumbers2 = Math.max(...numbers2);

  return Math.max(maxNumbers1, maxNumbers2);
}

export { getBiggestNumberInArrays };

//* Approach 2

function getBiggestNumberInArrays(numbers1, numbers2) {
  let merge = [...numbers1, ...numbers2].sort((a, b) => a - b);
  console.log(merge);
  return merge.at(-1);
}

export { getBiggestNumberInArrays };
