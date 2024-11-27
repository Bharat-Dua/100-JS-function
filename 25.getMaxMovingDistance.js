//* 25.getMaxMovingDistance

//? You're accepting a job in a new town and have a lot of furniture to move. Write a function named getMaxMovingDistance that receives 3 numbers as parameters:

// your total budget for moving the furniture (in USD) - budget
// the weight of all your furniture (in kg) - weight
// how much moving 10kg for 100km costs (in USD) - cost
// The function should return the maximum number of kilometers that we can afford to move the all furniture.

/* 

Example 1

Input

budget=700
weight=440
cost=50

Output
31.8181

Explanation
We can afford to move all our 440kg of furnite for 31.8181km with a budget of $700
*/

//* Approach 1

function getMaxMovingDistance(budget, weight, cost) {
  let costToMoveEverything1Km = (weight / 1000) * cost;
  return budget / costToMoveEverything1Km;
}

export { getMaxMovingDistance };

//* Approach 2

function getMaxMovingDistance(budget, weight, cost) {
  let budgetInGrams = budget * 1000;
  let maxDistance = budgetInGrams / (weight * cost);
  return maxDistance;
}

export { getMaxMovingDistance };
