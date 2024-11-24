//* 6.getGasolineAmount

//? You're driving to a new city for a small weekend trip. Write a function named getGasolineAmount that receives 2 numbers as parameters:

//?the number of kilometers to your destinationaverage consumption of liters per 100km The function should return the amount of gasoline needed to complete the entire round-trip.

/* 

Example 1
Input

distance=
128

consumptionPer100Km=
6.4

Output
16.384

Explanation
The round-trip is 256km so we need 16.384 liters of gasoline for it.
*/

function getGasolineAmount(distance, consumptionPer100Km) {
  let roundTripDistance = distance * 2;
  let gasolineNeeded = (roundTripDistance / 100) * consumptionPer100Km;
  return gasolineNeeded;
}

console.log(getGasolineAmount(128, 6.4)); // Output: 16.384
