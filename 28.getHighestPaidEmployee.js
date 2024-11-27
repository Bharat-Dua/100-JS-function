//* 28.getHighestPaidEmployee

//? Write a function named getHighestPaidEmployee that receives 2 parameters:

// employees - an Array of objects representing employees of a company. Each has the following properties

// name - a string representing the name of the employee
// departmentId - a string representing the ID of the department the employee works in
// salary - a number representing the salary of the employee, per month
// departmentId - a string representing the ID of a department

// The function should return the name of the employee with the highest salary in the specified department. If no employee exists in that department return undefined.

/*
Example 1

Input
employees=[
0: { departmentId: "A110", name: "Alice", salary: 7611 }
1: { departmentId: "A110", name: "Bob", salary: 9288 }
2: { departmentId: "A504", name: "Charlie", salary: 4109 }
3: { departmentId: "A504", name: "David", salary: 6100 }
]
departmentId= "A504"

Output

"David"

*/

//* Approach 1 : using the find
function getHighestPaidEmployee(employees, departmentId) {
  let filterEmployee = employees.filter(
    (em) => em.departmentId === departmentId
  );
  if (filterEmployee.length === 0) return undefined;
  let maxSalary = Math.max(...filterEmployee.map((em) => em.salary));
  let highestPaidEmployee = filterEmployee.find(
    (em) => em.salary === maxSalary
  );
  return highestPaidEmployee.name;
}

export { getHighestPaidEmployee };

//* Approach 2 :  Using the filter method and the reduce method
function getHighestPaidEmployee(employee, departmentId) {
  const filteredEmployees = employee.filter(
    (employee) => employee.departmentId === departmentId
  );
  if (filteredEmployees.length === 0) return undefined;
  let highestPaidEmployee = filteredEmployees.reduce((max, current) => {
    return max.salary > current.salary ? max : current;
  }, filteredEmployees[0]);
  //----- or
  //   let highestPaidEmployee = filteredEmployees.reduce((max, current) => {
  //     return max.salary > current.salary ? max : current;
  //   });
  return highestPaidEmployee.name;
}
export { getHighestPaidEmployee };

//* Approach 3 : Using the foreach method
function getHighestPaidEmployee(employees, departmentId) {
  const employeesInDepartment = employees.filter(
    (employee) => employee.departmentId === departmentId
  );

  if (employeesInDepartment.length === 0) {
    return undefined;
  }

  let highestPaidEmployee = employeesInDepartment[0];
  employeesInDepartment.forEach((employee) => {
    if (employee.salary > highestPaidEmployee.salary) {
      highestPaidEmployee = employee;
    }
  });

  return highestPaidEmployee.name;
}

export { getHighestPaidEmployee };
