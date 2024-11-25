//* 10.canDriveCar

//? Write a function named canDriveCar that receives 2 parameters:

// an object named user
// an object named car
// and returns a boolean indicating if the user can drive the car or not.

// Note: anybody can drive a car if it has at least 18 years old or if the car has an engine smaller than 1000cc.

/* 
Example 1

Input
user=
{
age: 21
name: "Jon Doe"
}
car=
{
engineSize: 1200
name: "Mazda 3"
}
Output
true
*/

function canDriveCar(user, car) {
  let age = user.age;
  let engine = car.engineSize;
  if (age >= 18) return true;
  return engine < 1000;
}

export { canDriveCar };
