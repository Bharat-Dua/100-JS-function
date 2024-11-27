//* 26.arrayToObject

//? Write a function named arrayToObject that receives an array of strings as parameter and returns an object where each key is an item of the array and its value is the index of that item.

// If there are duplicate strings in the array, the value inside the object should be the index of it's first occurrence.

/*
Example 1

Input

strings=
[
0: "JavaScript"
1: "is"
2: "awesome"
]
Output
{
JavaScript: 0
awesome: 2
is: 1
}
Example 2
Input
strings

=
[
0: "My"
1: "name"
2: "is"
3: "Pava"
4: "."
5: "What"
6: "is"
7: "your"
8: "name"
9: "?"
]
Output
{
.: 4
?: 9
My: 0
Pava: 3
What: 5
is: 2
name: 1
your: 7
}

*/

//* Approach 1

function arrayToObject(strings) {
  console.log(strings);
  let obj = strings.reduce((acc, cur, i) => {
    if (!(cur in acc)) {
      acc[cur] = i;
    }
    return acc;
  }, {});
  console.log(obj);
  return obj;
}
export { arrayToObject };

console.log(
  arrayToObject([
    "My",
    "name",
    "is",
    "Pava",
    ".",
    "What",
    "is",
    "your",
    "name",
    "?",
  ])
);

//* Approach 2

function arrayToObject(strings) {
  const result = {};
  strings.forEach((string, index) => {
    if (result[string] === undefined) {
      result[string] = index;
    }
  });

  return result;
}

export { arrayToObject };
