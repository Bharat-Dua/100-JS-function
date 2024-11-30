//* 34.removeFirstAndLast

//? Write a function named removeFirstAndLast that receives 2 parameters:

// a string named source
// another string named target
// and returns a new string created by removing from source the first and last appearances of target.

/*

Example 1

Input

source="Hello World"
target="l"

Output

"Helo Word"

Example 2

Input

source="Hello!"
target="Hello!"
Output

""

*/

function removeFirstAndLast(source, target) {
  let indexOfFirstAppearence = source.indexOf(target);
  let indexOfLastAppearence = source.lastIndexOf(target);

  if (
    indexOfFirstAppearence === -1 ||
    indexOfFirstAppearence === indexOfLastAppearence
  )
    return source;

  return (
    source.slice(0, indexOfFirstAppearence) +
    source.slice(
      indexOfFirstAppearence + target.length,
      indexOfLastAppearence
    ) +
    source.slice(indexOfLastAppearence + target.length)
  );
}

export { removeFirstAndLast };
