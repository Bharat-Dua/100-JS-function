//* 21.extractElementsBetweenPositions

//? Write a function named extractElementsBetweenPositions that receives 3 parameters:

// an Array of numbers - numbers
// a number - n
// a number - m
// and returns a new Array containing all elements that have their position between n and m (both included).

// NOTE: there's no guarantee that n is lower than m.

function extractElementsBetweenPositions(numbers, n, m) {
  const min = Math.min(n, m);
  const max = Math.max(n, m);

  return numbers.slice(min, max + 1);
}

export { extractElementsBetweenPositions };
