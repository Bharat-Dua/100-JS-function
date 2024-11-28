//* 32.linkedNumbersSum

//? Write a function named linkedNumbersSum that receives one parameter

// an object representing the start node of a linked list. It has 2 properties:
// value - representing a number
// next - representing the next node in the linked list (or null if there is no next node)
// The function should return the sum of all the numbers in the linked list.

//* Approach 1
function linkedNumbersSum(node) {
  let sum = 0;
  while (node) {
    sum += node.value;
    node = node.next;
  }
  return sum;
}

//? Approach 2
function linkedNumbersSum(node) {
  let result = 0;
  let currentNode = node;
  while (currentNode !== null) {
    result += currentNode.value;
    currentNode = currentNode.next;
  }
  return result;
}

export { linkedNumbersSum };

//? Test the function with the example provided in the problem statement
let node = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null,
    },
  },
};
console.log(linkedNumbersSum(node)); // Output: 6
//? Test the function with a linked list with only one node
node = {
  value: 5,
  next: null,
};
console.log(linkedNumbersSum(node)); // Output: 5
//? Test the function with an empty linked list
node = null;
console.log(linkedNumbersSum(node)); // Output: 0
//? Test the function with a linked list with multiple nodes
node = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
console.log(linkedNumbersSum(node)); // Output: 10
