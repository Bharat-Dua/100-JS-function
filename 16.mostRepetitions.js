//* 16.mostRepetitions

//? Write a function named mostRepetitions that receives 3 parameters:

// a string - string1
// a string - string2
// a letter
// and returns the string that has the most occurrences of the specified letter. If both have the same number of occurrences return string1.

/*
Example 1
Input
string1="Los Angeles"

string2="Texas"

letter="s"

Output
"Los Angeles"

*/

function mostRepetitions(string1, string2, letter) {
  let stringLength1 = string1.split("").filter((c) => c === letter).length;
  let stringLength2 = string2.split("").filter((c) => c === letter).length;
  if (stringLength1 >= stringLength2) {
    return string1;
  }
  return string2;
}

export { mostRepetitions };
