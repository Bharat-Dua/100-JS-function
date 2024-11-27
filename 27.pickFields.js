//* 27.pickFields

//? Write a function named pickFields that receives 2 parameters:

// an object - data
// an Array of strings - fields
// The function should return a new object that contains all properties of data whose name is present in the fields array.

/*
Example 1
Input
data={
color: "blue"
name: "Earth"
solarSistem: "Milky Way"
}

fields=
[
0: "name"
1: "color"
]

Output
{
color: "blue"
name: "Earth"
]

Example 2

Input

data={
inventor: "Brendan Eich"
name: "JavaScript"
year: 1995
]
fields=[
0: "job"
1: "age"
2: "name"
]
Output
{
name: "JavaScript"
}

*/

//* Approach 1

function pickFields(data, fields) {
  let obj = fields.reduce((acc, cur) => {
    if (data.hasOwnProperty(cur)) {
      acc[cur] = data[cur];
    }
    return acc;
  }, {});
  return obj;
}

export { pickFields };

//* Approach 2

function pickFields(data, fields) {
  const result = {};
  fields.forEach((field) => {
    if (data.hasOwnProperty(field)) {
      result[field] = data[field];
    }
  });

  return result;
}

export { pickFields };
