//* 29.flipObject

//? Write a function named flipObject that receives an Object describing people and their jobs and returns a new object with the jobs as keys, and names as values.

/* 
Example 1

Input

people={
alice: "AI Engineer"
bob: "JS Developer"
jon: "JS Developer"
nick: "UX Designer"
}
Output
{
AI Engineer: (1) [ "alice" ]
JS Developer: (2) [ "bob", "jon" ]
UX Designer: (1) [ "nick" ]
}

*/
//* Approach 1
const people = {
  bob: "JS Developer",
  alice: "AI Engineer",
  jon: "JS Developer",
  nick: "UX Designer",
};

function flipObject(people) {
  let flippedObject = {};
  for (const [name, jobs] of Object.entries(people)) {
    if (!flipObject[jobs]) {
      flippedObject[jobs] = [];
    }
    flippedObject[jobs].push(name);
  }
  return flipObject;
}
const flipPeople = flipObject(people);
console.log(flipPeople);
export { flipObject };

//? Approach 2

function flipObject(people) {
  let flippedObject = {};
  Object.entries(people).forEach(([name, job]) => {
    if (!flippedObject[job]) {
      flippedObject[job] = [];
    }
    flippedObject[job].push(name);
  });
  return flippedObject;
}
