//* 15.doubleNumbers

//? Write a function named doubleNumbers that takes an array of numbers as a parameter. The function should return a new array where each element of the original array is doubled.

function doubleNumbers(numbers) {
  let a = numbers.map((ele) => ele * 2);
  return a;
}

export { doubleNumbers };
