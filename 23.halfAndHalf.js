//* 23.halfAndHalf

//? Write a function named halfAndHalf that takes a string as parameter.

//? The function should return the same string with the first half of the string in lowercase and the second half in uppercase.

/* 
Example 1

Input

text="Hello World"

Output
"hello WORLD"
*/

function halfAndHalf(text) {
  let lengthText = text.length / 2;
  let firstHalf = text.slice(0, lengthText).toLowerCase();
  let otherHalf = text.slice(lengthText).toUpperCase();
  console.log(firstHalf + otherHalf);

  return firstHalf + otherHalf;
}

export { halfAndHalf };
