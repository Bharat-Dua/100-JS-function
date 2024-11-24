//* 7.lastNRevert

//? Write a function named lastNRevert that receives 2 parameters:

// a string named text
// a number - n
// and returns the last n characters of text but in reverse order.

/*
Example 1

Input
text="T-shirts"

n=4

Output
"stri"

Explanation
Last 4 characters are irts and their reversed order is stri.

*/

function lastNRevert(message, n) {
  const lastN = message.slice(-n);
  let reversedString = "";

  for (let i = lastN.length - 1; i >= 0; i--) {
    reversedString += lastN[i];
  }

  return reversedString;
}

export { lastNRevert };
