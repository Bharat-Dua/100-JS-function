//* 13.getLongestString

//? Write a function named getLongestString that receives an Array of strings as parameter and returns the longest one.

// If the Array is empty, return an empty string.

// If there are multiple strings of the same maximum length, return the first one.

function getLongestString(arrayOfStrings) {
  if (arrayOfStrings.length === 0) return "";
  let longestStr = arrayOfStrings[0];

  for (let i = 1; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].length > longestStr.length) {
      longestStr = arrayOfStrings[i];
    }
  }

  return longestStr;
}

export { getLongestString };
